# School CI server

Project uses Node.js v12.16.1.

## Project structure

The repository includes both client and server parts.

Client part is in the `/client` directory, technology stack is React/Redux and CSS.

Server part is in the `/server` directory, technology stack is Node.js and Express.

## Run the app locally

Create `server/.env` file as a copy of `server/.env.template` file and fill the variables:

* `AUTH_TOKEN` - you can get your token here: [hw.shri.yandex](https://hw.shri.yandex/)
* `API_URL` - leave it as is

Create `client/.env` file as a copy of `client/.env.template` file and fill the variables:

* `REACT_APP_API_URL` - leave it as is

Run the server from the `/server` directory:

```
cd server
npm ci
npm run server
```

Server will run on localhost:8080.

Open another Terminal tab and run the client from the `/client` directory:

```
cd client
npm ci
npm start
```

Client will run on localhost:3000.

## Storybook

You can also run a storybook from the `/client` directory:

```
npm run storybook
```
