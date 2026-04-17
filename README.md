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
