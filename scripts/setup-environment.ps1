<#
.SYNOPSIS
  Bootstraps Nijjara ERP local environment on Windows PowerShell.
.DESCRIPTION
  - Installs npm deps
  - Validates Node/clasp/git
  - Creates .env if missing
  - Optionally installs recommended VS Code extensions
  - Configures MCP server paths in .vscode/settings.json
  - Writes audit logs to ./logs
  - Provides rollback notes
#>

[CmdletBinding(SupportsShouldProcess)]
param(
  [switch]$InstallExtensions,
  [switch]$GlobalClasp,
  [switch]$Force
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path | Split-Path -Parent
$logDir = Join-Path $root 'logs'
$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$logFile = Join-Path $logDir "setup-$timestamp.log"
New-Item -ItemType Directory -Path $logDir -Force | Out-Null

function Write-Log {
  param([string]$Message)
  $line = "[$(Get-Date -Format 'u')] $Message"
  $line | Tee-Object -FilePath $logFile -Append
}

try {
  Write-Log "Starting setup at $timestamp"
  Push-Location $root

  # Basic tool checks
  Write-Log 'Checking Node.js version...'
  node --version | Tee-Object -FilePath $logFile -Append | Out-Null

  Write-Log 'Checking npm version...'
  npm --version | Tee-Object -FilePath $logFile -Append | Out-Null

  Write-Log 'Checking git version...'
  git --version | Tee-Object -FilePath $logFile -Append | Out-Null

  if ($GlobalClasp) {
    Write-Log 'Installing @google/clasp globally (optional)...'
    try {
      npm install -g @google/clasp | Tee-Object -FilePath $logFile -Append | Out-Null
    }
    catch {
      Write-Log 'Global clasp install failed, continuing with local npx clasp.'
    }
  }

  Write-Log 'Installing project npm dependencies...'
  npm ci | Tee-Object -FilePath $logFile -Append | Out-Null

  # Ensure .env exists
  $envPath = Join-Path $root '.env'
  if (-not (Test-Path $envPath)) {
    Write-Log 'Creating .env from .env.example...'
    Copy-Item (Join-Path $root '.env.example') $envPath -Force
  }
  else {
    Write-Log '.env already exists – leaving untouched.'
  }

  # Update MCP paths inside .vscode/settings.json via Node helper
  $settingsPath = Join-Path $root '.vscode/settings.json'
  if (Test-Path $settingsPath) {
    Write-Log 'Ensuring MCP server paths point to current workspace (via scripts/fix-paths.js) ...'
    try {
      node .\scripts\fix-paths.js | Tee-Object -FilePath $logFile -Append | Out-Null
    }
    catch {
      Write-Log 'Path fix helper failed; continuing. You can run: npm run fix:paths'
    }
  }


  if ($InstallExtensions) {
    Write-Log 'Installing recommended VS Code extensions (optional)...'
    $exts = @(
      'esbenp.prettier-vscode', 'dbaeumer.vscode-eslint', 'eamodio.gitlens', 'mhutchie.git-graph', 'ms-vscode.powershell', 'streetsidesoftware.code-spell-checker'
    )
    foreach ($e in $exts) {
      try { code --install-extension $e --force | Tee-Object -FilePath $logFile -Append | Out-Null } catch { Write-Log "Skipping extension $e (code CLI missing?)" }
    }
  }

  Write-Log 'Setup complete. Review the log for details.'
  Write-Log 'Rollback: git checkout -- .vscode/settings.json to revert MCP changes; delete .env as needed.'
}
catch {
  Write-Log ("ERROR: " + $_.Exception.Message)
  throw
}
finally {
  Pop-Location
}
