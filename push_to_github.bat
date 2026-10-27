@echo off
setlocal
echo ========================================================
echo        TimeTable Studio - Quick GitHub Uploader
echo ========================================================
echo.

set GIT_PATH="C:\Users\SUBASH\AppData\Local\GitHubDesktop\app-3.5.8\resources\app\git\cmd\git.exe"
if not exist %GIT_PATH% (
    set GIT_PATH=git
)

set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/USERNAME/TIME-TABLE.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No repository URL provided. Exiting.
    pause
    exit /b 1
)

echo.
echo [1/3] Adding all changes...
%GIT_PATH% add .

echo [2/3] Committing...
%GIT_PATH% commit -m "Update TimeTable Studio" --allow-empty

echo [3/3] Setting remote origin and pushing to main branch...
%GIT_PATH% remote remove origin 2>nul
%GIT_PATH% remote add origin %REPO_URL%
%GIT_PATH% branch -M main
%GIT_PATH% push -u origin main

echo.
echo ========================================================
echo [SUCCESS] Your code is uploaded to GitHub!
echo To view your site live:
echo 1. Open your GitHub repository in your browser.
echo 2. Go to Settings -^> Pages.
echo 3. Under Branch, choose 'main' and '/ (root)', then Save.
echo ========================================================
pause
