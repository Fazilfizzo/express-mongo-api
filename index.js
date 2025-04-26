import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentRoutes from './routes/students.js';
import subjectRoutes from './routes/subjects.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || process.env.PORT1;


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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port :${PORT}`);
});
