# Projektwebseite – Technik & Informatik (OS Naters)

## Webseite lokal starten

Wenn ihr `index.html` nur per Doppelklick öffnet (`file://...`), werden Änderungen an `projects.json` oft nicht korrekt geladen.

Startet deshalb immer einen lokalen Server:

```bash
python3 -m http.server 8000
```

Dann im Browser öffnen:

- http://localhost:8000

## Projekte aktualisieren

1. Datei `projects.json` öffnen.
2. Projekte bearbeiten/ergänzen.
3. Im Browser `Strg + F5` drücken (Hard Reload).

So seht ihr Änderungen sofort.

## GitHub-Link aktualisiert sich nicht? (GitHub Pages)

Wenn lokal alles korrekt ist, aber der öffentliche GitHub-Link noch alt ist:

1. Änderungen committen und auf GitHub pushen.
2. Unter **GitHub → Actions** prüfen, ob der Workflow **Deploy static site to GitHub Pages** erfolgreich durchgelaufen ist.
3. Unter **Settings → Pages** sicherstellen, dass als Source **GitHub Actions** aktiv ist.
4. 1–5 Minuten warten und Seite mit **Strg + F5** neu laden.

Hilfreiche Befehle:

```bash
git add .
git commit -m "Update projects"
git push
```
