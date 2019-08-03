import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  bio: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

authorSchema.statics.findByAuthorname = async function(login) {
  let author = await this.findOne({
      username: login,
    })
    .populate('books');

  return author;
};

authorSchema.pre('remove', function(next) {
  this.model('Book').deleteMany({ author: this._id }, next);
});

const Author = mongoose.model('Author', authorSchema);

export default Author;
