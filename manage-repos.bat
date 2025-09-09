@echo off
REM Repository Management Script for Dyslexia-First Template
REM This script helps manage both template and project repositories

echo ============================================
echo Dyslexia-First Repository Manager
echo ============================================
echo.

echo Current remotes:
git remote -v
echo.

echo Choose an action:
echo 1. Push to template repository
echo 2. Push to project repository
echo 3. Pull from template repository
echo 4. Pull from project repository
echo 5. Check status
echo 6. Exit
echo.

set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" (
    echo Pushing to template repository...
    git push template main
    goto end
)

if "%choice%"=="2" (
    echo Pushing to project repository...
    git push origin main
    goto end
)

if "%choice%"=="3" (
    echo Pulling from template repository...
    git pull template main
    goto end
)

if "%choice%"=="4" (
    echo Pulling from project repository...
    git pull origin main
    goto end
)

if "%choice%"=="5" (
    echo Checking repository status...
    git status
    echo.
    echo Recent commits:
    git log --oneline -5
    goto end
)

if "%choice%"=="6" (
    echo Goodbye!
    goto end
)

echo Invalid choice. Please run the script again.
:end
echo.
pause
