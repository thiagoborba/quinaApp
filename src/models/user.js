import mongoose from '../database/index';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
  }
},
{ autoIndex: false });

const User = mongoose.model('User', UserSchema);

export default User;