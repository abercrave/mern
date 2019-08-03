import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  },
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

bookSchema.statics.findBySlug = async function(slug) {
  let book = await this.findOne({
      slug,
    })
    .populate({
      path: 'author',
      select: 'name username',
    });

  return book;
};

const Book = mongoose.model('Book', bookSchema);

export default Book;
