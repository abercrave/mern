import React, { Suspense } from 'react';
import { useRoutes } from 'hookrouter';
import './App.scss';

import MyInfo from './components/MyInfo';
import Navigation from './components/Navigation';
import Spinner from './components/Spinner';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const BookDetailPage = React.lazy(() => import('./pages/BookDetailPage'));
const BooksPage = React.lazy(() => import('./pages/BooksPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const AuthorDetailPage = React.lazy(() => import('./pages/AuthorDetailPage'));
const AuthorEditPage = React.lazy(() => import('./pages/AuthorEditPage'));
const AuthorsPage = React.lazy(() => import('./pages/AuthorsPage'));

const Pages = [
  {
    id: 0,
    href: '/',
    subtitle: "Welcome to my MERN book project! 👋",
    text: 'Home',
    title: 'Home',
  },
  {
    id: 1,
    href: '/books',
    subtitle: null,
    text: 'Books',
    title: 'Books',
  },
  {
    id: 2,
    href: '/authors',
    subtitle: null,
    text: 'Authors',
    title: 'Authors',
  }
];

const routes = {
  '/': () => <HomePage title={Pages[0].title} subtitle={Pages[0].subtitle} />,
  '/books': () => <BooksPage title={Pages[1].title} />,
  '/books/:slug': slug => <BookDetailPage params={slug} title={Pages[1].title} />,
  '/authors': () => <AuthorsPage title={Pages[2].title} />,
  '/authors/:username': username => <AuthorDetailPage params={username} title={Pages[2].title} />,
  '/authors/:username/edit': username => <AuthorEditPage params={username} title="Edit Author" />,
};

function App(props) {
  const routeResult = useRoutes(routes);

  return <div className="App">
      <MyInfo />
      <Navigation menuItems={Pages}/>
      <Suspense fallback={<Spinner />}>
        {routeResult || <NotFoundPage />}
      </Suspense>
    </div>;
}

export default App;
