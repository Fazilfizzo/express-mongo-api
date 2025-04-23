#!/bin/bash

LOG_FILE="/var/log/update.log"
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

# Log the start of the update process
echo "[$TIMESTAMP] Starting server update..." >> $LOG_FILE

# Update and upgrade Ubuntu packages
echo "[$TIMESTAMP] Running apt update and upgrade..." >> $LOG_FILE
sudo apt update && sudo apt upgrade -y

# Pull the latest changes from GitHub repository
REPO_DIR="/home/ubuntu/express-mongo-api"  # Change this to the location of your project
cd "$REPO_DIR" || { echo "[$TIMESTAMP] ERROR: Repository not found!" >> $LOG_FILE; exit 1; }

echo "[$TIMESTAMP] Pulling latest changes from GitHub..." >> $LOG_FILE
git pull origin main  # Adjust if you're using a different branch

# If git pull fails, log the error and exit
if [ $? -ne 0 ]; then
    echo "[$TIMESTAMP] ERROR: Git pull failed!" >> $LOG_FILE
    exit 1
fi

# Restart web server (Nginx/Apache)
echo "[$TIMESTAMP] Restarting web server..." >> $LOG_FILE
sudo systemctl restart nginx  # Change to apache2 if using Apache

# Log success
echo "[$TIMESTAMP] Server update completed successfully." >> $LOG_FILE
