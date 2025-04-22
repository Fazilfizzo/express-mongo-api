import express from 'express';
import mongoose from 'mongoose';
import studentRoutes from './routes/students.js';
import subjectRoutes from './routes/subjects.js';

const app = express();
const PORT = 3000;

// MongoDB connection (No .env used)
const MONGO_URI = 'mongodb+srv://fazil:fazil3456@cluster0.c0zuz3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.use('/students', studentRoutes);
app.use('/subjects', subjectRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
