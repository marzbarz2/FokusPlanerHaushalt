@echo off
setlocal EnableExtensions EnableDelayedExpansion

cd /d "%~dp0"

if defined PORT (
  set "APP_PORT=%PORT%"
) else (
  set "APP_PORT=8000"
)

set "APP_URL=http://localhost:%APP_PORT%"
set "PYTHON_CMD="

call :resolve_python
if not defined PYTHON_CMD goto :missing_python

call :free_port_if_needed

echo Starte FokusPlaner unter %APP_URL% ...
start "FokusPlaner Browser" "%APP_URL%"
call %PYTHON_CMD% -m http.server %APP_PORT%
goto :eof

:resolve_python
where py >nul 2>nul
if %errorlevel%==0 (
  set "PYTHON_CMD=py"
  goto :eof
)

where python >nul 2>nul
if %errorlevel%==0 (
  set "PYTHON_CMD=python"
)
goto :eof

:free_port_if_needed
set "PORT_PID="
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /r /c:":%APP_PORT% .*LISTENING"') do (
  set "PORT_PID=%%P"
  goto :port_found
)
goto :eof

:port_found
echo Port %APP_PORT% ist bereits belegt. Beende Prozess !PORT_PID! fuer Neustart ...
taskkill /PID !PORT_PID! /F >nul 2>nul
timeout /t 1 /nobreak >nul
goto :eof

:missing_python
echo Python wurde nicht gefunden.
echo Installiere Python oder passe start.cmd an.
pause