import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const books = await req.context.models.Book.find()
    .populate({
      path: 'author',
      select: 'firstName lastName username',
    });

  return res.send(books);
});

router.get('/:bookSlug', async (req, res) => {
  const book = await req.context.models.Book.findBySlug(
    req.params.bookSlug,
  );

  return res.send(book);
});

router.post('/', async (req, res) => {
  const book = await req.context.models.Book.create({
    slug: req.body.text.trim().replace(/\W/g, '-'),
    text: req.body.text,
    author: req.context.me.id,
  });

  return res.send(book);
});

router.put('/:bookId', async (req, res) => {
  const book = await req.context.models.Book.findById(req.params.bookId);

  if (book.author.toString() !== req.context.me.id) {
    return res.sendStatus(403);
  }

  book.text = req.body.text;

  await book.save();

  return res.send(book);
});

router.delete('/:bookId', async (req, res) => {
  const book = await req.context.models.Book.findById(
    req.params.bookId,
  );

  let result = null;

  if (book) {
    result = await book.remove();
  }

  return res.send(result);
});

export default router;
