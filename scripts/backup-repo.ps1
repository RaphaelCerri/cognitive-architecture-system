# backup-repo.ps1 — backup íntegro do repositório via git bundle (G-A07).
# Uso:  powershell -File scripts\backup-repo.ps1 [-DestDir <pasta>]
# Gera: cognitive-architecture-<yyyyMMdd-HHmm>-<shortsha>.bundle (todo o histórico)
#       + manifest .txt com HEAD, contagem de objetos e instrução de restore.
# O bundle NÃO inclui untracked (.obsidian/, DRAFTs) — copie-os à parte se quiser.
# Restore (testado 2026-07-23, 269 arquivos):
#   git clone -c core.longpaths=true <arquivo>.bundle <pasta-destino>
#   (core.longpaths é OBRIGATÓRIO em destinos com path longo no Windows —
#    sem ele o checkout falha com "Filename too long"; achado do teste real)
param(
  [string]$DestDir = (Join-Path $env:USERPROFILE "Backups\cognitive-architecture")
)
$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

if (-not (Test-Path $DestDir)) { New-Item -ItemType Directory -Force $DestDir | Out-Null }

$sha   = (git rev-parse --short HEAD).Trim()
$stamp = Get-Date -Format "yyyyMMdd-HHmm"
$name  = "cognitive-architecture-$stamp-$sha"
$bundle = Join-Path $DestDir "$name.bundle"

git bundle create $bundle --all
git bundle verify $bundle | Out-Null

$manifest = @(
  "bundle: $name.bundle"
  "created: $stamp"
  "head: $((git rev-parse HEAD).Trim())"
  "branch: $((git branch --show-current).Trim())"
  "restore: git clone -c core.longpaths=true `"$name.bundle`" <pasta-destino>"
  "verify:  git bundle verify `"$name.bundle`""
  "nota: untracked (.obsidian/, DRAFT-*.md) NAO estao no bundle."
)
$manifest | Out-File -Encoding utf8 (Join-Path $DestDir "$name.txt")

Write-Host "OK: $bundle"
Write-Host "Lembrete G-A07: copie o bundle para um local EXTERNO ao disco (decisao humana pendente)."
