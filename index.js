import express from 'express';
import mongoose from 'mongoose';
import studentRoutes from './routes/students.js';
import subjectRoutes from './routes/subjects.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

// MongoDB connection (No .env used)
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.use('/students', studentRoutes);
app.use('/subjects', subjectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
