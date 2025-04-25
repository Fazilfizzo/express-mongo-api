import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentRoutes from './routes/students.js';
import subjectRoutes from './routes/subjects.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT;


const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('API is running');
  });

app.use('/api/students', studentRoutes);
app.use('/api/subjects', subjectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
