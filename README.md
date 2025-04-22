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
GET	/students get all students
GET	/subjects get all subjects


