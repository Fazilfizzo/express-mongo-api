#!/bin/bash

# Directories
BACKUP_DIR="/home/ubuntu/backups"
API_DIR="/home/ubuntu/express-mongo-api"  
DB_NAME="test"
DATE=$(date +%F)

# Ensure backup directory exists
mkdir -p "$BACKUP_DIR"

# API backup
tar -czf "$BACKUP_DIR/api_backup_${DATE}.tar.gz" "$API_DIR"

# MongoDB Backup
mongodump --uri="mongodb+srv://fazil:fazil3456@cluster0.c0zuz3v.mongodb.net/test"  --out="$BACKUP_DIR"

echo "[$(date)] Backup completed: API and DB stored in $BACKUP_DIR"

