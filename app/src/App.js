import React, { Suspense } from 'react';
import { useRoutes } from 'hookrouter';
import './App.scss';

import Navigation from './components/Navigation';
import Spinner from './components/Spinner';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const MessagesPage = React.lazy(() => import('./pages/MessagesPage'));
const MessageDetailPage = React.lazy(() => import('./pages/MessageDetailPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const UsersPage = React.lazy(() => import('./pages/UsersPage'));
const UserDetailPage = React.lazy(() => import('./pages/UserDetailPage'));

const Pages = [
  {
    id: 0,
    href: '/',
    subtitle: "Welcome to my MERN project! 👋",
    text: 'Home',
    title: 'Home',
  },
  {
    id: 1,
    href: '/messages',
    subtitle: null,
    text: 'Messages',
    title: 'Messages',
  },
  {
    id: 2,
    href: '/users',
    subtitle: null,
    text: 'Users',
    title: 'Users',
  }
];

const routes = {
  '/': () => <HomePage title={Pages[0].title} subtitle={Pages[0].subtitle} />,
  '/messages': () => <MessagesPage title={Pages[1].title} />,
  '/messages/:slug': slug => <MessageDetailPage params={slug} title={Pages[1].title} />,
  '/users': () => <UsersPage title={Pages[2].title} />,
  '/users/:id': id => <UserDetailPage params={id} title={Pages[2].title} />,
};

function App(props) {
  const routeResult = useRoutes(routes);

  return <div className="App">
      <Navigation menuItems={Pages}/>
      <Suspense fallback={<Spinner />}>
        {routeResult || <NotFoundPage />}
      </Suspense>
    </div>;
}

export default App;
