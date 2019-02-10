import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useCreateIndex: true })

mongoose.Promise = global.Promise

export default mongoose
