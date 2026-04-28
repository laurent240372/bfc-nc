#!/usr/bin/env bash

cd /c/Users/laurent.baillehache/bfc-nc || exit 1

echo "=== Projet courant ==="
pwd

echo "=== Branche courante ==="
BRANCH=$(git branch --show-current)
echo "$BRANCH"

echo "=== Statut avant commit ==="
git status

read -p "Message du commit : " MSG

if [ -z "$MSG" ]; then
  echo "Commit annulé : message vide."
  exit 1
fi

git add .
git commit -m "$MSG"

echo "=== Push GitHub ==="
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519_github -o IdentitiesOnly=yes" git push