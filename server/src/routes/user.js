import { Router } from 'express';
import isHexadecimal from '../utils/isHexadecimal';

const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const {
    userId
  } = req.params;
  let user;

  if (isHexadecimal(userId)) {
    user = await req.context.models.User.findById(
      userId,
    );
  } else {
    user = await req.context.models.User.findByUsername(
      userId,
    );
  }

  return res.send(user);
});

export default router;
