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
    author = await req.context.models.Author.findByUsername(
      authorId,
    );
  }

  return res.send(author);
});

router.post('/', async (req, res) => {
  const author = await req.context.models.Author.create({
    bio: req.body.bio,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
  });

  return res.send(author);
});

router.put('/:username', async (req, res) => {
  try {
    const author = await req.context.models.Author.findByUsername(req.params.username);

    author.bio = req.body.bio;
    author.firstName = req.body.firstName;
    author.lastName = req.body.lastName;

    await author.save();

    return res.send(author);
  } catch (e) {
    res.status(503).send({ error: 'Internal server error.' });
  }
});

export default router;
