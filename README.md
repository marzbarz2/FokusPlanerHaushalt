# FokusPlanerHaushalt

Statische Fokusplaner-App fuer wiederkehrende Haushaltsaufgaben. Die Anwendung laeuft ohne Datenbank auf einem einfachen Webserver und speichert Konfiguration sowie Haken lokal im Browser.

## Funktionen

- Wochenblatt mit Morgen- und Abendroutine inklusive Checkboxen pro Wochentag
- Zonenaufgaben mit einer Checkbox pro Aufgabe fuer die laufende Woche
- Zonen direkt in der jeweiligen Karte bearbeiten und pro Woche speichern
- Bearbeitungsmodus wirkt auf alle Wochenfelder (Morgenroutine, Abendroutine, Wochenthemen, Haus-Reset und Zonen)
- Neue Wochen starten mit leeren Zonen
- Vorschlagsliste beim Bearbeiten mit Aufgaben aus allen Wochen und Zonen
- 5-Wochen-Zyklus mit frei definierbaren Wochenvorlagen
- Wiederverwendbare Zonen mit Aufgabenpool und dynamischer Aufgabenrotation pro Woche
- Druckansicht fuer ein sauberes Wochenblatt im Papierformat
- Tagesfokus, Haus-Reset, Notizen und Sonderaufgaben
- Konfigurationseditor im Browser mit JSON-Import und JSON-Export

## Projektdateien

- `index.html`: Struktur der App
- `styles.css`: Layout und visuelle Gestaltung
- `app.js`: Datenmodell, Rendering, Rotation der Zonenaufgaben und lokale Persistenz
- `config/default-config.json`: Team-Vorlage, die beim Start geladen wird

## Starten

Es ist kein Build-Schritt notwendig. Ein einfacher statischer Webserver reicht.

### Windows per start.cmd

```bat
start.cmd
```

Die Batch-Datei:

- startet den Server direkt im Projektordner
- oeffnet den Browser automatisch
- verwendet standardmaessig Port `8000`
- beendet einen bereits laufenden Prozess auf diesem Port und startet den Server neu

Optional kann ein anderer Port ueber eine Umgebungsvariable gesetzt werden:

```bat
set PORT=8080
start.cmd
```

### Variante mit Python

```bash
python -m http.server 8000
```

Danach im Browser `http://localhost:8000` aufrufen.

## Druckansicht

Ueber den Button `Drucken` wird die Browser-Druckansicht geoeffnet. Das Druck-CSS reduziert Dekoration, blendet Bedien-Elemente aus und verdichtet das Layout fuer ein A4-Wochenblatt.

## Konfiguration

Die Konfiguration besteht aus vier Kernbereichen:

- `routines`: Morgen- und Abendaufgaben
- `zones`: Wiederverwendbare Zonen mit `taskPool` und `tasksPerWeek`
- `weeks`: Wochenvorlagen mit `zoneOrder` und optionalen `zoneOffsets`
- `resetTasks` und `dayFocus`: Zusatzbereiche fuer das Wochenblatt

### Zonenbearbeitung pro Woche

- Jede Zone hat einen integrierten Editor direkt in der Wochenansicht
- Aufgaben werden in `week.zoneTaskMap[zoneId]` fuer genau diese Woche gespeichert
- Beim Anlegen einer neuen Woche werden alle Zonen bewusst leer initialisiert
- Beim Bearbeiten werden Vorschlaege aus allen bekannten Aufgaben (Zonen + bestehende Wochen) angeboten

Beim Start wird zuerst [config/default-config.json](config/default-config.json) geladen. Diese Datei dient als gemeinsame Team-Vorlage im Repository.

Danach werden, falls vorhanden, lokale Aenderungen aus dem Browser-Speicher daruebergelegt. Damit lassen sich feste Repo-Vorlagen und persoenliche Anpassungen kombinieren.

Die Dynamik entsteht ueber zwei Ebenen:

1. Unterschiedliche `zoneOrder` pro Woche
2. Rotierende und abwechselnde Aufgabenreihenfolge innerhalb jeder Zone per `zoneOffsets` und Kalenderwoche

Damit koennen aufeinanderfolgende Wochen bewusst unterschiedlich konfiguriert werden, ohne dass eine Datenbank oder ein Server-Backend noetig ist.

## Persistenz

- Basis-Konfiguration: `config/default-config.json`
- Lokale Konfiguration: `localStorage` unter `fokusplaner-config`
- Planungsstatus: `localStorage` unter `fokusplaner-state`

Wenn der Browser-Speicher geloescht wird, gehen lokale Aenderungen verloren. Die Konfiguration kann deshalb ueber den integrierten JSON-Export gesichert werden.

## Backup gegen Browser-Speicherverlust

Fuer den Fall, dass Browserdaten geloescht werden, gibt es eine vollstaendige JSON-Sicherung:

- `Backup exportieren`: speichert Konfiguration + Checkbox-Status + aktive Woche + Kalenderwoche
- `Backup importieren`: spielt diese Daten wieder ein

Empfehlung: Regelmaessig ein Backup exportieren (z. B. woechentlich oder nach groesseren Aenderungen).
