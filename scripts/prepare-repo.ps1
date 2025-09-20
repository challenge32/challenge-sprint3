param()

if (!(Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "git não encontrado. Instale o Git e rode novamente."
  exit 1
}

git init
git checkout -b main
git add .
git commit -m "chore: projeto base Sprint 03 (React+Vite+TS+Tailwind)"
git tag v1.0.0
Write-Host "Repositório inicializado e commit criado na branch 'main'."