import mongoose from 'mongoose';
import Student from './models/Student.js';
import Subject from './models/Subject.js';

const MONGO_URI = 'mongodb://localhost:27017/student_api';

const seed = async () => {
  await mongoose.connect(MONGO_URI);

  await Student.deleteMany();
  await Subject.deleteMany();

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

  await Subject.insertMany([
    // Year 1
    { name: 'Principles of Programming Languages(CP 111)', year: 1 },
    { name: 'Development Perspectives(DS 102)', year: 1 },
    { name: 'Mathematical Foundations of Information Security-(IA 112)', year: 1 },
    { name: 'Introduction to Information Technology(IT 111)', year: 1 },
    { name: 'Communication Skills(LG 102)', year: 1 },
    { name: 'Discrete Mathematics for ICT(MT1111)', year: 1 },
    { name: 'Calculus(MT 1112)', year: 1 },
    { name: 'Linear Algebra for ICT(MT 1117)', year: 1 },
    { name: 'Introduction to Computer Networking(CN 121)', year: 1 },
    { name: 'Introduction to Database systems(CP 121)', year: 1 },
    { name: 'Introduction to High Level Programming(CP 123)', year: 1 },
    { name: 'Introduction to Software Engineering(CS 123)', year: 1 },
    { name: 'Introduction to IT Security(IA 124)', year: 1 },
    { name: 'Numerical Analysis for ICT(MT 1211)', year: 1 },
    { name: 'Introduction to Probability and Statistics(ST 1210)', year: 1 },
  
    // Year 2
    { name: 'Computer Networking Protocols(CN 211)', year: 2 },
    { name: 'Introduction To Linux/Unix Systems(CP 211)', year: 2 },
    { name: 'Systems Analysis and Design(CP 212)', year: 2 },
    { name: 'Data Structures and Algorithms Analysis(CP 213)', year: 2 },
    { name: 'Computational Theory(CP 214)', year: 2 },
    { name: 'Object Oriented Programming in Java(CP 215)', year: 2 },
    { name: 'Industrial Practical Training I(CS 131)', year: 2 },
    { name: 'Computer Organization and Architecture I(CT 211)', year: 2 },
    { name: 'Internet Programming And Application I(CP 221)', year: 2 },
    { name: 'Open Source Technologies(CP 222)', year: 2 },
    { name: 'Object-Oriented Systems Design(CP 223)', year: 2 },
    { name: 'Database Management Systems(CP 224)', year: 2 },
    { name: 'Software Testing and Quality Assurance(CP 225)', year: 2 },
    { name: 'Operating Systems(CP 226)', year: 2 },
    { name: 'ICT Research Methods(IS 221)', year: 2 },
  
    // Year 3
    { name: 'Internet Programming and Applications II(CP 311)', year: 3 },
    { name: 'Python Programming(CP 312)', year: 3 },
    { name: 'Mobile Applications Development(CP 313)', year: 3 },
    { name: 'Selected Topics in Software Engineering(CP 316)', year: 3 },
    { name: 'Computer Graphics(CP 318)', year: 3 },
    { name: 'Industrial Practical Training II(CS 231)', year: 3 },
    { name: 'ICT Entrepreneurship(EME 314)', year: 3 },
    { name: 'Mathematical Logic and Formal Semantics(MT 3111)', year: 3 },
    { name: 'Distributed Database Systems(CP 321)', year: 3 },
    { name: 'Data Mining and Warehousing(CP 322)', year: 3 },
    { name: 'Web Framework Development Using Javascript(CP 323)', year: 3 },
    { name: 'Compiler Technology(CP 324)', year: 3 },
    { name: 'Advanced Java Programming(CS 321)', year: 3 },
    { name: 'Information and Communication Systems Security(IA 321)', year: 3 },
  
    // Year 4
    { name: 'ICT Project Management(BT 413)', year: 4 },
    { name: 'Distributed Computing(CP 314)', year: 4 },
    { name: 'C# Programming(CP 412)', year: 4 },
    { name: 'Industrial Practical Training III(CS 332)', year: 4 },
    { name: 'Software Reverse Engineering(CS 411)', year: 4 },
    { name: 'Software Engineering Project I(CS 431)', year: 4 },
    { name: 'Computer Maintenance(CT 312)', year: 4 },
    { name: 'Human Computer Interaction(IM 411)', year: 4 },
    { name: 'Professional Ethics and Conduct Core(SI 311)', year: 4 },
    { name: 'Software Deployment and Management(CS 421)', year: 4 },
    { name: 'Big Data Analysis(CS 329)', year: 4 },
    { name: 'Software Engineering Project II(CS 432)', year: 4 },
    { name: 'Artificial Intelligence(CP 422)', year: 4 },
    { name: 'System Administration and Management(CP 423)', year: 4 },
    { name: 'Cloud Computing(CP 424)', year: 4 },
    { name: 'Foundations of Data Science(CG 222)', year: 4 }
  ]);
  

  console.log('Seeding(Initializing initial data) done.....');
  process.exit();
};

seed();
