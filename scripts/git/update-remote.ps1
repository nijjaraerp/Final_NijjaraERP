<#
Updates the 'origin' remote to point to the repo defined in .env (GITHUB_OWNER/GITHUB_REPO)
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path | Split-Path -Parent | Split-Path -Parent
$envFile = Join-Path $root '.env'
if (Test-Path $envFile) {
  Get-Content $envFile | ForEach-Object {
    if (-not [string]::IsNullOrWhiteSpace($_) -and -not $_.Trim().StartsWith('#')) {
      $parts = $_.Split('=',2)
      if ($parts.Length -eq 2) { [Environment]::SetEnvironmentVariable($parts[0],$parts[1],'Process') }
    }
  }
}

$owner = $env:GITHUB_OWNER
$repo = $env:GITHUB_REPO
if (-not $owner -or -not $repo) { throw 'GITHUB_OWNER and GITHUB_REPO must be set in .env' }

$httpsUrl = "https://github.com/$owner/$repo.git"
Write-Output "Setting origin to $httpsUrl"

git remote set-url origin $httpsUrl

git remote -v
