# A MERN Test Project

This MERN project contains a server built with [Mongoose](https://mongoosejs.com/) and an app built with [React](https://reactjs.org/)/[Redux](https://redux.js.org/). I used an online [tutorial](https://www.robinwieruch.de/mongodb-express-setup-tutorial/) as a starting point to quickly scaffold some models and routes in Mongoose, and [Create React App](https://create-react-app.dev/) to configure the app's build tasks and initial structure.

The app lazyloads its page components and uses [hookrouter](https://github.com/Paratron/hookrouter) for client-side routing. Redux is currently only employed for app-wide status messages, but the size of its role will increase as the project evolves. Please see the [Changelog and Next Steps](#changelog-and-next-steps) section for a list of recent and future updates.

If you think it worthwhile to share the above with interested parties please feel free to do so. Thanks!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Changelog and Next Steps](#changelog-and-next-steps)

## Installation

The following instructions assume that you will be configuring the app and server on a computer running macOS.

First, open a shell and `cd` to where you cloned the repo.

```sh
cd /path/to/the/repo
```

### Set up the app

Run the following commands to install the app's dependencies.

```sh
cd app
npm install
```

### Set up the server

In the same shell, run the following commands to install the server's dependencies.

```sh
cd ..
cd server
npm install
```

## Usage

### Start the database

Open a new shell and run the following command:

```sh
mongod --config /usr/local/etc/mongod.conf
```

### Start the server

Open a second shell and run the following commands:

```sh
cd /path/to/the/repo/server
npm start
```

### Start the app

Finally, open a third shell and run the following commands:

```sh
cd /path/to/the/repo/app
npm start
```

The Create React App scripts will open the app in Chrome for you. Should that fail you can load the app in a browser at the following URL: http://localhost:3000/

## Changelog and Next Steps

- [ ] Add author deletion functionality.
- [ ] Add add/edit book functionality.
- [ ] Add Book deletion functionality.
- [ ] Add functionality to associate/reassociate/unassociate books with authors.
- [ ] Add author/book sorting controls.
- [ ] Add user accounts.
- [ ] Add user login/session functionality.
- [ ] Add user permissions functionality.
- [ ] Enable author portraits.
- [ ] Enable book covers.
- [ ] Add Book barcode scanning (with ISBN lookup) functionality.
- [x] Added Redux-based app-level status messages.
- [x] Added DELETE author route.
- [x] Added author sorting by last name.
- [x] Added author add/edit functionality.
- [x] Added book → author associations.
- [x] Added basic GET routing for authors and books.
