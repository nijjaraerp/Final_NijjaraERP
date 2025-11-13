<#
Agent deployment entrypoint.
Loads .env and accepts -TaskPath to a structured task JSON.
Extend this to actually execute actions using MCP servers or other agents.
#>

[CmdletBinding()]
param(
  [string]$TaskPath
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path | Split-Path -Parent | Split-Path -Parent
$envFile = Join-Path $root '.env'
if (Test-Path $envFile) {
  Get-Content $envFile | ForEach-Object {
    if (-not [string]::IsNullOrWhiteSpace($_) -and -not $_.Trim().StartsWith('#')) {
      $parts = $_.Split('=', 2)
      if ($parts.Length -eq 2) {
        $name = $parts[0]
        $value = $parts[1]
        [Environment]::SetEnvironmentVariable($name, $value, 'Process')
      }
    }
  }
}

$logDir = Join-Path $root 'logs'
New-Item -ItemType Directory -Path $logDir -Force | Out-Null
$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$logFile = Join-Path $logDir "agent-$timestamp.log"

function Write-Log { param([string]$m) "[$(Get-Date -Format 'u')] $m" | Tee-Object -FilePath $logFile -Append }

Write-Log 'Agent deploy script started.'
if ($TaskPath -and (Test-Path $TaskPath)) {
  $json = Get-Content $TaskPath -Raw | ConvertFrom-Json
  Write-Log ("Received task: " + $json.task.title)
  Write-Log 'Checklist:'
  $json.checklist | ForEach-Object {
    $mark = ' '
    if ($_.done) { $mark = 'x' }
    Write-Log (" - [$mark] " + $_.item)
  }
  Write-Log 'Simulating execution (placeholder)...'
  Start-Sleep -Seconds 1
  Write-Log 'Execution complete (placeholder).'
}
else {
  Write-Log 'No TaskPath provided or file not found.'
}

Write-Output "Agent log written to: $logFile"
