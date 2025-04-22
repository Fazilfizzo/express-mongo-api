import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: String,
  year: Number // 1 to 4
});

export default mongoose.model('Subject', subjectSchema);
