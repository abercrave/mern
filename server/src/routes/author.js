import { Router } from 'express';
import isHexadecimal from '../utils/isHexadecimal';

const router = Router();

router.get('/', async (req, res) => {
  const authors = await req.context.models.Author.find();
  return res.send(authors);
});

router.get('/:authorId', async (req, res) => {
  const {
    authorId
  } = req.params;
  let author;

  if (isHexadecimal(authorId)) {
    author = await req.context.models.Author.findById(
      authorId,
    );
  } else {
    author = await req.context.models.Author.findByAuthorname(
      authorId,
    );
  }

  return res.send(author);
});

export default router;
