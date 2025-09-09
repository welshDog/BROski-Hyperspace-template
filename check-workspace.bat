@echo off
REM Workspace Dependency Validation Script
REM This script checks for common workspace dependency issues

echo ============================================
echo Dyslexia-First Workspace Health Check
echo ============================================
echo.

echo Checking workspace structure...
if not exist "apps\web\package.json" (
    echo ❌ Missing apps/web/package.json
    goto error
)
if not exist "packages\ui-dyslexia\package.json" (
    echo ❌ Missing packages/ui-dyslexia/package.json
    goto error
)

echo ✅ Workspace structure looks good
echo.

echo Checking package names...
findstr /C:"\"name\": \"@dyslexia-first/ui-components\"" packages\ui-dyslexia\package.json >nul
if errorlevel 1 (
    echo ❌ Package name mismatch in ui-dyslexia
    goto error
)

echo ✅ Package names are correct
echo.

echo Checking imports...
findstr /C:"@dyslexia-first/ui-components" apps\web\src\app\layout.tsx >nul
if errorlevel 1 (
    echo ❌ Import path issue in layout.tsx
    goto error
)

echo ✅ Import paths are correct
echo.

echo Checking for common issues...
if exist "node_modules" (
    echo ⚠️  node_modules found in root (should be in workspace packages)
    echo    Consider running: rm -rf node_modules
)

echo.
echo 🎉 Workspace health check passed!
echo Your dyslexia-first project is ready for development.
goto end

:error
echo.
echo ❌ Workspace health check failed!
echo Please fix the issues above before proceeding.
exit /b 1

:end
echo.
pause
