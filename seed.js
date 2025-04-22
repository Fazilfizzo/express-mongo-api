import mongoose from 'mongoose';
import Student from './models/Student.js';
import Subject from './models/Subject.js';

const MONGO_URI = 'mongodb+srv://fazil:fazil3456@cluster0.c0zuz3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB.');

    // Seed Students if not already present
    const studentCount = await Student.countDocuments();
    if (studentCount === 0) {
      await Student.insertMany([
        { name: 'Alice', program: 'Software Engineering' },
        { name: 'Bob', program: 'Software Engineering' },
        { name: 'Charlie', program: 'Software Engineering' },
        { name: 'Diana', program: 'Software Engineering' },
        { name: 'Ethan', program: 'Software Engineering' },
        { name: 'Fiona', program: 'Software Engineering' },
        { name: 'George', program: 'Software Engineering' },
        { name: 'Hannah', program: 'Software Engineering' },
        { name: 'Ian', program: 'Software Engineering' },
        { name: 'Julia', program: 'Software Engineering' }
      ]);
      console.log('Students seeded.');
    } else {
      console.log('Students already exist. Skipping student seeding.');
    }

    // Seed Subjects if not already present
    const subjectCount = await Subject.countDocuments();
    if (subjectCount === 0) {
      await Subject.insertMany([
        { name: 'Principles of Programming Languages(CP 111)', year: 1 },
        { name: 'Development Perspectives(DS 102)', year: 1 },
        // ... (your full subject list here)
        { name: 'Foundations of Data Science(CG 222)', year: 4 }
      ]);
      console.log('Subjects seeded.');
    } else {
      console.log('Subjects already exist. Skipping subject seeding.');
    }

    console.log('Seeding complete.');
    process.exit();
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seed();
