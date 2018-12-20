import mongoose from 'mongoose';
import '../models/Task';

const dbURI = "mongodb+srv://thiago:1LFQ8KkkGRlwOfeb@cluster0-tzate.mongodb.net/test?retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true
};

mongoose.connect(dbURI, options)
  .then(() => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
)