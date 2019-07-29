import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const messages = await req.context.models.Message.find()
    .populate({
      path: 'user',
      select: 'username',
    });

  return res.send(messages);
});

router.get('/:messageSlug', async (req, res) => {
  const message = await req.context.models.Message.findBySlug(
    req.params.messageSlug,
  );

  return res.send(message);
});

router.post('/', async (req, res) => {
  const message = await req.context.models.Message.create({
    slug: req.body.text.trim().replace(/\W/g, '-'),
    text: req.body.text,
    user: req.context.me.id,
  });

  return res.send(message);
});

router.put('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(req.params.messageId);

  if (message.user.toString() !== req.context.me.id) {
    return res.sendStatus(403);
  }

  message.text = req.body.text;

  await message.save();

  return res.send(message);
});

router.delete('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findById(
    req.params.messageId,
  );

  let result = null;

  if (message) {
    result = await message.remove();
  }

  return res.send(result);
});

export default router;
