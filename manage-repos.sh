#!/bin/bash

# Repository Management Script for Dyslexia-First Template
# This script helps manage both template and project repositories

echo "============================================"
echo "Dyslexia-First Repository Manager"
echo "============================================"
echo

echo "Current remotes:"
git remote -v
echo

echo "Choose an action:"
echo "1. Push to template repository"
echo "2. Push to project repository"
echo "3. Pull from template repository"
echo "4. Pull from project repository"
echo "5. Check status"
echo "6. Exit"
echo

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo "Pushing to template repository..."
        git push template main
        ;;
    2)
        echo "Pushing to project repository..."
        git push origin main
        ;;
    3)
        echo "Pulling from template repository..."
        git pull template main
        ;;
    4)
        echo "Pulling from project repository..."
        git pull origin main
        ;;
    5)
        echo "Checking repository status..."
        git status
        echo
        echo "Recent commits:"
        git log --oneline -5
        ;;
    6)
        echo "Goodbye!"
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        ;;
esac

echo
