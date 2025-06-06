  /*
  FileName: server.js
  Name:Chunghyun Lee
  Student_number: 301000913
  Course: COMP229-401
  Date: 2025/06/06
  */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ContactsRouter from './routes/contacts.js';
import UsersRouter from './routes/users.js';

dotenv.config();
// MongoDB connection
mongoose.connect('mongodb+srv://ven160004:Hexlbh345!@cluster0.vzi8nql.mongodb.net/?retryWrites=true&w=majority')
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.once('open', () => {
    console.log('Connected to MongoDB');
});

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to the ChunghyunLees application' }));
app.use('/api/contacts', ContactsRouter);
app.use('/api/users', UsersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});