# farbenmeer code challenge

This repository consists of two projects:

1. server by farbenmeer providing the API
2. React app by alexandra waligorski consuming the API

## Getting started

### Run the server

1. Go to `server` directory
2. Run `npm install`
3. Run `npm run start`
4. REST server should be ready at http://localhost:3001/rest
5. keep server running :)

### Run the App

1. Go to `blog` directory
2. Run `npm install`
3. Run `npm run start`
4. blog should be running at http://localhost:3000
5. if browser does not open automatically open url to see app: http://localhost:3000

## Description

### server

node.js server providing data API as REST and GraphQL endpoints

### app

React App. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Consumes data from provided server and renders website presenting blogposts.

#### Third party dependencies

- [React Router](https://reactrouter.com/en/main) for routing
- [swr](https://swr.vercel.app/) for client side fetching
