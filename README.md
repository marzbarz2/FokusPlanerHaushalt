# FokusPlanerHaushalt

Statische Web-App fuer die Planung und das Abhaken wiederkehrender Haushaltsaufgaben.

Die Anwendung laeuft ohne Datenbank auf einem einfachen Webserver.
Konfiguration, Wocheninhalte und Checkbox-Status werden lokal im Browser gespeichert.

## Ziel

- Wochenroutinen schnell sehen und abhaken
- Zonen pro Woche planen und bearbeiten
- Wochen dynamisch variieren
- Daten ohne Backend sichern und wiederherstellen

## Funktionsumfang

- Morgenroutine und Abendroutine mit Checkboxen pro Wochentag
- Zonen der Woche mit Aufgaben und Checkbox pro Aufgabe
- Tagesfokus und Haus-Reset
- Notizen und Sonderaufgaben
- 5-Wochen-Zyklus als konfigurierbare Basis
- Bearbeitungsmodus fuer Wochenfelder
- Druckansicht
- Backup Export/Import als JSON

## Projektstruktur

- [index.html](index.html): Seitenstruktur und UI-Bereiche
- [styles.css](styles.css): Layout, Responsiveness, Drucklayout
- [app.js](app.js): Datenmodell, Rendering, Persistenz, Backup
- [config/default-config.json](config/default-config.json): Team-Basisvorlage
- [start.cmd](start.cmd): schneller Start auf Windows

## Starten

### Windows

Im Projektordner [start.cmd](start.cmd) ausfuehren.

Die Datei:

- startet den Server im Projektordner
- oeffnet den Browser
- nutzt standardmaessig Port 8000
- beendet bei Bedarf einen bestehenden Prozess auf dem Port und startet neu

Optionaler Port:

set PORT=8080
start.cmd

### Mit Python

python -m http.server 8000

Dann im Browser aufrufen:

http://localhost:8000

## Bedienung

### Kopfbereich

- Woche im Zyklus waehlen
- Kalenderwoche setzen

### Wochenblatt

- Routinen und Aufgaben direkt abhaken
- Status bleibt beim Reload erhalten

### Bearbeitungsmodus

- Ueber Wochenfelder bearbeiten aktivieren
- Danach werden Bearbeitungsfelder fuer die Wochenbereiche eingeblendet
- Aenderungen werden lokal gespeichert

### Untere Steuerleiste

- Neue Woche anlegen
- Drucken
- Wochenfelder bearbeiten
- Backup exportieren
- Backup importieren
- Konfiguration bearbeiten

## Konfiguration

Die Basis liegt in [config/default-config.json](config/default-config.json).

Wichtige Bereiche:

- routines: Morgen- und Abendaufgaben
- zones: Zonen, Aufgabenpool, tasksPerWeek
- weeks: Wochen mit zoneOrder und optional zoneOffsets
- dayFocus: Wochenthemen
- resetTasks: Aufgaben fuer den Haus-Reset

Beim Start wird die Basis aus der JSON-Datei geladen.
Lokale Aenderungen im Browser koennen diese Basis fuer den aktuellen Browser ueberschreiben.

## Persistenz

Die App nutzt localStorage:

- fokusplaner-config: Konfiguration und Wochenstruktur
- fokusplaner-state: Checkboxen, Notizen und Wochenstatus

Das gilt fuer:

- Browser-Neustart
- Seiten-Reload
- Neustart des lokalen Webservers

## Backup und Wiederherstellung

Damit Daten auch nach geloeschtem Browser-Speicher erhalten bleiben:

- Backup exportieren erstellt eine JSON-Datei mit:
	- Konfiguration
	- Planner-Status inklusive Checkboxen
	- ausgewaehlter Woche und Kalenderwoche
- Backup importieren spielt den kompletten Stand wieder ein

Empfehlung:

- regelmaessig Backup exportieren
- Backup-Datei ausserhalb des Browsers sichern, z. B. Cloud-Ordner oder Projektablage

## Druckansicht

Der Drucken-Button oeffnet die Browser-Druckansicht.
Das Druck-CSS reduziert Deko und optimiert die Ausgabe fuer A4.

## Hinweis zu Mehrgeraete-Nutzung

Ohne Backend ist der Stand nicht automatisch zwischen Geraeten synchron.

Wenn mehrere Personen oder Geraete denselben Datenstand nutzen sollen, gibt es zwei praktikable Wege:

- gemeinsame Backup-Datei regelmaessig exportieren und importieren
- kleines Datei-Backend oder API fuer zentrale Speicherung ergaenzen

## Entwicklung

Kein Build-Schritt notwendig. Direkte Bearbeitung von [index.html](index.html), [styles.css](styles.css) und [app.js](app.js).
