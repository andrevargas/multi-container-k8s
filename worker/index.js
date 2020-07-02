const redis = require('redis');
const config = require('./config');

const client = redis.createClient({
  host: config.redisHost,
  port: config.redisPort,
  retry_strategy: () => 1000,
});

const subscription = client.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

subscription.on('message', (channel, message) => {
  client.hset('values', message, fib(parseInt(message)));
});

subscription.subscribe('insert');
