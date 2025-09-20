#!/usr/bin/env bash
set -e

if ! command -v git >/dev/null 2>&1; then
  echo "git não encontrado. Instale o Git e rode novamente."
  exit 1
fi

git init
git checkout -b main || git branch -M main
git add .
git commit -m "chore: projeto base Sprint 03 (React+Vite+TS+Tailwind)"
git tag v1.0.0
echo "Repositório inicializado e commit criado na branch 'main'."