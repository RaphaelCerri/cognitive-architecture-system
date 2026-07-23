# Backup e restore do repositório (G-A07)

A memória institucional inteira vive neste repositório Git local. Sem cópia
externa, um defeito de disco apaga o projeto. Este checklist operacionaliza o
mínimo; a escolha do destino externo é decisão humana pendente (DH-backup).

## Rotina (após cada checkpoint aceito, ~30 s)

```powershell
powershell -File scripts\backup-repo.ps1
```

Gera `~\Backups\cognitive-architecture\cognitive-architecture-<data>-<sha>.bundle`
(histórico completo, verificado com `git bundle verify`) + manifest `.txt`.

## Regras

1. **Copie o bundle para FORA do disco** (decisão pendente: remoto Git privado
   — recomendado —, drive externo ou nuvem pessoal). Bundle no mesmo disco
   protege contra `rm` acidental, não contra falha de hardware.
2. Untracked NÃO entram no bundle: `.obsidian/` (config local, dispensável) e
   `knowledge/assessments/DRAFT-*.md` (copiar manualmente se importar).
3. Reter pelo menos os 3 bundles mais recentes; apagar o resto.
4. **Teste de restore** (1×/mês ou após mudança grande):
   `git clone -c core.longpaths=true <bundle> <pasta-vazia>` e conferir
   `git log -1` + `git status` limpo. `core.longpaths=true` é obrigatório —
   sem ele o checkout falha em paths longos do Windows (achado do teste real
   de 2026-07-23: dados íntegros, checkout quebrado por MAX_PATH).

## Evidência do primeiro ciclo completo (2026-07-23)

Backup criado e verificado (`af0401c`, bundle ok) → restore executado →
falha real encontrada e corrigida (longpaths) → restore repetido → **269
arquivos, worktree limpo, HEAD íntegro**. O procedimento acima é o que
funcionou, não o que se imaginou que funcionaria.
