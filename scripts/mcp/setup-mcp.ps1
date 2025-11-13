<#
Creates/updates local MCP server configuration for IDEs that support it.
Uses .vscode/settings.json but also writes a standalone JSON for reference.
#>

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path | Split-Path -Parent | Split-Path -Parent
$configDir = Join-Path $root '.config/mcp'
$configFile = Join-Path $configDir 'servers.json'
New-Item -ItemType Directory -Path $configDir -Force | Out-Null

$path = $root
$config = @{
  filesystem = @{ command = 'npx'; args = @('-y','@modelcontextprotocol/server-filesystem', $path) }
  shell      = @{ command = 'npx'; args = @('-y','@modelcontextprotocol/server-shell') }
  git        = @{ command = 'npx'; args = @('-y','@modelcontextprotocol/server-git','--repository', $path) }
  puppeteer  = @{ command = 'npx'; args = @('-y','@modelcontextprotocol/server-puppeteer') }
}

$config | ConvertTo-Json -Depth 5 | Set-Content $configFile -Encoding UTF8
Write-Output "MCP server config written to $configFile"
