<#
Configures secure PowerShell remoting for administrative operations.
By default, no changes are applied unless -Enable is passed.
Provides -Disable to revert. Writes audit logs.
#>
[CmdletBinding(SupportsShouldProcess)]
param(
  [switch]$Enable,
  [switch]$Disable
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path | Split-Path -Parent
$logDir = Join-Path $root 'logs'
$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$logFile = Join-Path $logDir "secure-remote-$timestamp.log"
New-Item -ItemType Directory -Path $logDir -Force | Out-Null

function Write-Log { param([string]$m) $m = "[$(Get-Date -Format 'u')] $m"; $m | Tee-Object -FilePath $logFile -Append }

try {
  if ($Enable -and $Disable) { throw 'Choose either -Enable or -Disable, not both.' }

  if ($Enable) {
    Write-Log 'Enabling PSRemoting (WinRM) securely...'
    Enable-PSRemoting -Force
    Set-Item -Path WSMan:\localhost\Service\AllowUnencrypted -Value $false
    Set-Item -Path WSMan:\localhost\Service\Auth\Basic -Value $false
    Write-Log 'PSRemoting enabled. Allow only trusted subnets via firewall rules as needed.'
  }
  elseif ($Disable) {
    Write-Log 'Disabling PSRemoting (WinRM)...'
    Disable-PSRemoting -Force
    Write-Log 'PSRemoting disabled.'
  }
  else {
    Write-Log 'No action taken. Use -Enable or -Disable.'
  }
}
catch { Write-Log ("ERROR: " + $_.Exception.Message); throw }
