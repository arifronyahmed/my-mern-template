import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Todo from './models/todoModel.mjs';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

dotenv.config();
const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/todo', async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTodo = new Todo({
      title,
      description,
    });

    const savedTodo = await newTodo.save();

    res.status(201).json({
      status: 'success',
      data: savedTodo,
    });
  } catch (error) {
    console.error('Error creating Todo:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
});

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
