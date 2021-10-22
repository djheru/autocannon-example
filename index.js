const dotenv = require('dotenv');
const autocannon = require('autocannon');
const { bodies, ids } = require('./bodies');

dotenv.config();

const { 
  BODY_TO_TEST: bodyToTest,
  NUM_CONNECTIONS: numConnections, 
  NUM_REQUESTS: numRequests,
  TOKEN: token, 
  URL: url, 
} = process.env;

(() => {
  // https://github.com/mcollina/autocannon
  const instance = autocannon({
    url,
    connections: +numConnections, 
    amount: +numRequests,
    method: 'POST',
    headers: {
      'x-api-key': token,
      'content-type': 'application/json'
    },
    body: bodies()[bodyToTest],
  });

  // Event handlers
  instance.on('done', handleResults);
  instance.on('response', handleResponse);

  autocannon.track(instance);

  // Display results
  function handleResults (res) {
    console.log('Running tests using the following IDs: ');
    console.log(ids);
    autocannon.printResult(res);
  }

  // Alternate between the different patients
  function handleResponse (client) {
    // We make `bodies` a function so that we a pick a new ID each time
    client.setBody(bodies()[bodyToTest]);
  }
})()
