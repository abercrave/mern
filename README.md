# A MERN Test Project

A demonstration of my current abilities in the MERN stack as well as a sandbox where I can learn more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

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

## Next Steps

- [ ] Author deletion functionality.
- [ ] Add/edit book functionality.
- [ ] Book deletion functionality.
- [ ] Functionality to associate/reassociate/unassociate books with authors.
- [ ] Author/book sorting controls.
- [ ] User accounts.
- [ ] User login/session functionality.
- [ ] User permissions functionality.
- [ ] Author portraits.
- [ ] Book covers.
- [ ] Book barcode scanning (with ISBN lookup) functionality.
- [x] Redux-based app-level status messages.
- [x] DELETE author route.
- [x] Sort authors by last name.
- [x] Author add/edit functionality.
