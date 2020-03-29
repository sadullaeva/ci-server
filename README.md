# School CI server

Project uses Node.js v12.16.1.

## Project structure

The repository includes both client and server parts.

Client part is in the `/client` directory, technology stack is React/Redux and CSS.

Server part is in the `/server` directory, technology stack is Node.js and Express.

## Run the app locally

To have an access to all the app features, copy `.env.template` file to a new `.env` file in both `/server` and `/client` directories and set all the variables there.

Run the server from the `/server` directory:

```
cd server
npm i
npm run server
```

Server will run on localhost:8080.

Open another Terminal tab and run the client from the `/client` directory:

```
cd client
npm i
npm start
```

Client will run on localhost:3000.

You can also run a storybook from the `/client` directory:

```
npm run storybook
```
