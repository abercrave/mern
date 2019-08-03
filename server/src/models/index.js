import mongoose from 'mongoose';

import Author from './author';
import Book from './book';

const connectDb = () => {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);

  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Author, Book };

export { connectDb };

export default models;
