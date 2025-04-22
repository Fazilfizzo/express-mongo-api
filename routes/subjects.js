import express from 'express';
import Subject from '../models/Subject.js';

const router = express.Router();

// GET /subjects
router.get('/', async (req, res) => {
  const allSubjects = await Subject.find();
  const grouped = {};

  for (let i = 1; i <= 4; i++) {
    grouped[`Year ${i}`] = allSubjects.filter(s => s.year === i).map(s => s.name);
  }

  res.json(grouped);
});

export default router;
