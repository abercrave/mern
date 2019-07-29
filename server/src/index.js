import 'dotenv/config';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(async (req, res, next) => {
  req.context = {
    models,
    // me: await models.User.findByUsername(req.cookies.username),
    me: await models.User.findByUsername('rwieruch'),
  };

  next();
});

app.use('/session',  routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/example', routes.example);

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);

    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

async function createUsersWithMessages() {
  const user1 = await new models.User({
    username: 'rwieruch',
    messages: [],
  });

  const user2 = await new models.User({
    username: 'ddavids',
    messages: [],
  });

  const message1 = await new models.Message({
    slug: 'published-the-road-to-learn',
    text: 'Published the Road to learn...',
    user: user1.id,
  });

  const message2 = await new models.Message({
    slug: 'happy-to-release',
    text: 'Happy to release...',
    user: user2.id,
  });

  const message3 = await new models.Message({
    slug: 'published-a-complete',
    text: 'Published a complete...',
    user: user2.id,
  });

  message1.save();
  message2.save();
  message3.save();

  user1.messages.push(message1);
  user2.messages.push(message2);
  user2.messages.push(message3);

  user1.save();
  user2.save();
}
