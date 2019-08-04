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
    // me: await models.Author.findByAuthorname(req.cookies.username),
    me: await models.Author.findByAuthorname('ibanks'),
  };

  next();
});

app.use('/session',  routes.session);
app.use('/authors', routes.author);
app.use('/books', routes.book);
app.use('/example', routes.example);

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Author.deleteMany({}),
      models.Book.deleteMany({}),
    ]);

    createAuthorsWithBooks();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

async function createAuthorsWithBooks() {
  const author1 = await new models.Author({
    bio: 'Iain Banks (16 February 1954 – 9 June 2013) was a Scottish author. He wrote mainstream fiction under the name Iain Banks and science fiction as Iain M. Banks, including the initial of his adopted middle name Menzies',
    books: [],
    firstName: 'Iain M.',
    lastName: 'Banks',
    username: 'ibanks',
  });

  const author2 = await new models.Author({
    bio: 'Mark Lawrence (born 1966) is an American-British novelist and scientist who wrote The Broken Empire trilogy of fantasy books. In 2014, Lawrence won the David Gemmell Legend Awards for best novel for Emperor of Thorns.',
    books: [],
    firstName: 'Mark',
    lastName: 'Lawrence',
    username: 'mlawrence',
  });

  const book1 = await new models.Book({
    author: author1.id,
    slug: 'consider-phlebas',
    title: 'Consider Phlebas',
  });

  const book2 = await new models.Book({
    author: author1.id,
    slug: 'use-of-weapons',
    title: 'Use of Weapons',
  });

  const book3 = await new models.Book({
    author: author2.id,
    slug: 'prince-of-thorns',
    title: 'Prince of Thorns',
  });

  author1.books.push(book1);
  author1.books.push(book2);
  author2.books.push(book3);

  author1.save();
  author2.save();

  book1.save();
  book2.save();
  book3.save();
}
