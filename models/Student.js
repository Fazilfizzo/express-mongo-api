import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  program: String
});

export default mongoose.model('Student', studentSchema);
