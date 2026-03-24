# Undo dans Git : restore vs reset

## git restore
La commande git restore permet d’annuler les modifications locales d’un fichier sans affecter l’historique des commits. Elle restaure le fichier à son état du dernier commit.

## git reset
La commande git reset permet de modifier l’historique Git. Elle peut déplacer HEAD, désindexer des fichiers ou supprimer des commits selon l’option utilisée (soft, mixed, hard).

## Différence principale
- git restore : annule les changements locaux sans modifier l’historique
- git reset : modifie l’historique ou la zone de staging

