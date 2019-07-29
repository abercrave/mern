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

### Start the app

Open a new shell and run the following commands:

```sh
cd /path/to/the/repo/app
npm start
```

### Start the server

Open a second shell and run the following commands:

```sh
cd /path/to/the/repo/server
npm start
```

### Start the database

Finally, open a third shell and run the following command:

```sh
mongod --config /usr/local/etc/mongod.conf
```

You should now be able to access the project in a browser at the following URL: http://localhost:3000/
