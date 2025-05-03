# Express MongoDB API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB Atlas**, designed to be deployed on an **AWS EC2 Ubuntu instance** and managed with **GitHub** version control.

---

## 🛠️ Features

- REST API with Express
- MongoDB Atlas integration via Mongoose
- `.env` configuration support
- Routes for user CRUD operations
- Easy deployment to AWS EC2
- GitHub-based version control and collaboration

---


---

## 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/YOUR_USERNAME/express-mongo-api.git
cd express-mongo-api
```
2. **Install the dependencies**
   ```bash
   npm install
   ```
3. ** Create a .env file: **
  ``` ini
 PORT=3000
MONGO_URI=your_mongodb_connection_string
```
replace 'your_mongodb_connection_string with your connection string from MongoDB Atlas

4.  **Running the Project** run:
   ```bash
   node index.js
```
Note: setting up project with initial data run:
```bash
node seed.js
```

**API Endpoints**
GET	/api/students get all students
GET	/api/subjects get all subjects



## Server Management Scripts

### 1. `health_check.sh`
Monitors system health and checks if the Express API is running correctly.
- Logs CPU, memory, and disk usage
- Confirms Nginx/Apache is active
- Tests `/api/students` and `/api/subjects` endpoints for 200 OK
- Logs results to `/var/log/server_health.log`

### 2. `backup_api.sh`
Creates a compressed backup of:
- API source code directory
- MongoDB database using `mongodump`
- Saved to `/home/ubuntu/backups`

### 3. `update_server.sh`
Automates server and API updates:
- Updates Ubuntu package list and upgrades installed packages
- Pulls the latest changes from your GitHub repository
- Restarts the web server (Nginx/Apache)
- Logs the process to `/var/log/update.log`

### Setup Instructions

1. **Grant execute permissions to the scripts:**
   ```bash
   chmod +x bash_scripts/*.sh
``



## Docker Setup

###  Build the image
```bash
docker build express-mongo-api
```

###  Run the container
docker run -d -p 3000:3000 --name api-container express-mongo-api

### Docker compose
docker-compose up -d


## Docker Registry Upload
1. Log in to Docker Hub:
```bash
docker login
```

## Tag your image:
docker tag express-mongo-api fazilfizo/express-mongo-api:latest

## Push to Docker Hub
docker push fazilfizo/express-mongo-api:latest

## Docker Image  
- **Docker Hub URL**: (https://hub.docker.com/r/fazilfizo/express-mongo-api)  
- Pull command:  
```bash
docker pull fazilfizo/express-mongo-api
```

### Building and Running Frontend Containers
#1. Build frontend image
```bash
cd frontend-UI
```
```bash
docker build -t fazilfizo/express-mongo-api:v2 .
```

# 2. Run three instances
docker run -d -p 3003:5173 -e VITE_NODE_ID=frontend1 fazilfizo/express-mongo-api:v2
docker run -d -p 3004:5173 -e VITE_NODE_ID=frontend2 fazilfizo/express-mongo-api:v2
docker run -d -p 3005:5173 -e VITE_NODE_ID=frontend3 fazilfizo/express-mongo-api:v2


###Load-balancing(nginx-load-balancer.conf)
upstream frontend {
    # Round-robin is default
    server frontend1:5173 max_fails=3 fail_timeout=30s; # Health checks
    server frontend2:5173 max_fails=3 fail_timeout=30s;
    server frontend3:5173 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    server_name aws_public_ip;  //replace aws_public_ip with aws public ip you have
    location /health {  # Health check endpoint
        return 200 'OK';
    }
}

# On EC2 Ubuntu instance:

```bash
git clone https://github.com/Fazilfizzo/express-mongo-api.git
cd express-mongo-api
docker-compose pull                           //pulling latest docker changes(up-to-date)
docker-compose up -d                          //run the docker container
```

### 🐛 Troubleshooting
# Issue	Solution
Frontend not loading -	Check container logs: docker logs frontend1
No X-Node-ID header  -	Verify NGINX config has proxy_set_header X-Node-ID $hostname
502 Bad Gateway -	      1. Check health: curl http://localhost/health
                        2. Verify containers: docker ps
API connection failed -	Confirm MongoDB Atlas IP whitelisting


# Push Docker images
docker fazilfizo/express-mongo-api:v2
docker tag fazilfizo/express-mongo-api:v2 fazilfizo/express-mongo-api:latest
docker push fazilfizo/express-mongo-api:v2
