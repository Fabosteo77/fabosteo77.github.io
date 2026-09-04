@echo off
title Site Fabien Marie - serveur local
cd /d "%~dp0"
set PATH=C:\Program Files\nodejs;%PATH%

rem Astro 7 bascule le serveur en arriere-plan s'il croit tourner dans un agent IA,
rem ce qui arrete TinaCMS et son serveur de donnees (port 4001) : page vide.
set CLAUDECODE=

echo Nettoyage d'eventuels anciens serveurs...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":4321" ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":4001" ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1

echo Demarrage du site... Votre navigateur va s'ouvrir dans quelques secondes.
echo (Laissez cette fenetre ouverte tant que vous consultez le site.)
start "" /min cmd /c "timeout /t 15 /nobreak >nul & start http://localhost:4321"
npm run tina:dev
echo.
echo Le serveur s'est arrete. Appuyez sur une touche pour fermer.
pause >nul
