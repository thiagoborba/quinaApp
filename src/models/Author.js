import mongoose from '../database/index'
import argon2 from 'argon2'

const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

AuthorSchema.pre('save', async function (next) {
  try {
    const hash = await argon2.hash(this.password)
    this.password = hash
  } catch (err) {
    console.log(err)
  }
  next()
})

const Author = mongoose.model('Author', AuthorSchema)

export default Author
