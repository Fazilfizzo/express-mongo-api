import express from 'express';
import Subject from '../models/Subject.js';

const router = express.Router();

// GET /subjects - List all subjects grouped by academic year
router.get('/subjects', async (req, res) => {
  try {
    const allSubjects = await Subject.find();

    const groupedByYear = allSubjects.reduce((acc, subject) => {
      const yearKey = `Year ${subject.year}`;
      if (!acc[yearKey]) {
        acc[yearKey] = [];
      }
      acc[yearKey].push(subject.name);
      return acc;
    }, {});

    res.status(200).json(groupedByYear);
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
