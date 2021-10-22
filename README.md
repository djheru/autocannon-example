# Autocannon Example

https://github.com/mcollina/autocannon
## Description

Runs autocannon tests against an AppSync API using API_KEY auth

## Getting Started

- Run `npm install` from the root
- Copy `.env.example` to `.env`
- Update the `TOKEN` and `URL` fields to the values in the AppSync config
- If necessary, update the `NUM_CONNECTIONS` and `NUM_REQUESTS` values for the tests
- If necessary, update or replace the HTTP body in the ./bodies.js with a GraphQL query/variables pair to your liking
- Run `npm start` to run the tests

## TODO

1. Implement Authorization header auth with JWTs
2. Find a way to have a nicely-formatted GraphQL query and variables for the body
3. That's it, really just an example/boilerplate for you to customize
