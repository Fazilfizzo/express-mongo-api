#!/bin/bash

LOG_FILE="/var/log/server_health.log"
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
DISK_THRESHOLD=10

echo "[$TIMESTAMP] Starting server health check..." >> $LOG_FILE

# CPU & Memory
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2 + $4}')
MEM_USAGE=$(free -m | awk '/Mem:/ {printf("%.2f"), $3/$2 * 100.0}')

# Disk
DISK_USAGE=$(df / | grep / | awk '{print $5}' | sed 's/%//')

# Web Server Check
if pgrep -x "nginx" >/dev/null || pgrep -x "apache2" >/dev/null; then
    SERVER_STATUS="Running"
else
    SERVER_STATUS="Down"
    echo "[$TIMESTAMP] WARNING: Web server is not running!" >> $LOG_FILE
fi

# API Endpoints Check
API_URL="http://localhost:3000"
ENDPOINTS=("/students" "/subjects")

for endpoint in "${ENDPOINTS[@]}"; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$API_URL$endpoint")
    if [ "$STATUS" != "200" ]; then
        echo "[$TIMESTAMP] WARNING: API endpoint $endpoint returned status $STATUS!" >> $LOG_FILE
    fi
done

# Logging
echo "[$TIMESTAMP] CPU: $CPU_USAGE% | Memory: $MEM_USAGE% | Disk: $DISK_USAGE% | Web Server: $SERVER_STATUS" >> $LOG_FILE

# Disk Warning
if [ "$DISK_USAGE" -ge "$DISK_THRESHOLD" ]; then
    echo "[$TIMESTAMP] WARNING: Disk usage exceeds ${DISK_THRESHOLD}%" >> $LOG_FILE
fi
