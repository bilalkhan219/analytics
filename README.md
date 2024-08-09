
# Project Analytics Backend

## Prerequisites

Ensure you have the following versions installed:

- **Node.js**: `20.13.1`
- **npm**: `10.5.2`

You can check your versions by running:
```sh
node -v
npm -v
```
## Technologies

- nest js
- postgresql

## Installation

```sh
npm install
npm run migration:run

```

## Setup Instructions

```sh
Ensure postgresql@14 is installed and running on your system.
create a new db named 'analytics' on your system.
update the DB_USERNAME and DB_PASSWORD env variables accordingly.
To use an existing database update the DB_DATABASE env variable with the name of existing db.
```

## Running the app

```bash
$ npm run start
```


# Project Analytics Frontend

## Prerequisites

Ensure you have the following versions installed:

- **Node.js**: `20.13.1`
- **npm**: `10.5.2`

You can check your versions by running:
```sh
node -v
npm -v
```

## Install Dependencies
```sh
npm install
```

## Run server
```sh
npm start
```

## Connect to backend
```sh
Run your backend server on port 3000 to connect successfully.
To use another port for the backend you will need to change the `REACT_APP_API_URL` env variable.
```

## Usage Instructions
```sh
Go to localhost:3000/signup and create a new user
Go to localhost:3000/login and login to the app with the created user. This will take you to the analytics dashboard.
There are 2 dummy pages created in the app i.e. Home, Contact.
You can navigate between these pages, navigating between these pages will create an analytics record on the backend.
on the dashboard, you can select the option to see analytics record for individual pages as well as all pages combined.

```


