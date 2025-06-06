  /*
  FileName: ../models/users.js
  Name:Chunghyun Lee
  Student_number: 301000913
  Course: COMP229-401
  Date: 2025/06/06
  */
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
    type: Date,
    default: Date.now // default value that is automatically populated when no value is entered.
    },
    updated: {
    type: Date,
    default: Date.now 
    }
});

userSchema.pre('save', function(next) {
    this.updated = Date.now();  // updated information time
    next();
});

export default mongoose.model('Users', userSchema);