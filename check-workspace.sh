#!/bin/bash

# Workspace Dependency Validation Script
# This script checks for common workspace dependency issues

echo "============================================"
echo "Dyslexia-First Workspace Health Check"
echo "============================================"
echo

echo "Checking workspace structure..."
if [ ! -f "apps/web/package.json" ]; then
    echo "❌ Missing apps/web/package.json"
    exit 1
fi
if [ ! -f "packages/ui-dyslexia/package.json" ]; then
    echo "❌ Missing packages/ui-dyslexia/package.json"
    exit 1
fi

echo "✅ Workspace structure looks good"
echo

echo "Checking package names..."
if ! grep -q '"name": "@dyslexia-first/ui-components"' packages/ui-dyslexia/package.json; then
    echo "❌ Package name mismatch in ui-dyslexia"
    exit 1
fi

echo "✅ Package names are correct"
echo

echo "Checking imports..."
if ! grep -q "@dyslexia-first/ui-components" apps/web/src/app/layout.tsx; then
    echo "❌ Import path issue in layout.tsx"
    exit 1
fi

echo "✅ Import paths are correct"
echo

echo "Checking for common issues..."
if [ -d "node_modules" ]; then
    echo "⚠️  node_modules found in root (should be in workspace packages)"
    echo "   Consider running: rm -rf node_modules"
fi

echo
echo "🎉 Workspace health check passed!"
echo "Your dyslexia-first project is ready for development."
