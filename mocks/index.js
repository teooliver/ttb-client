if (typeof window === 'undefined') {
  const { server } = require('./server');
  server.listen();
  console.log('SERVER ====>');
} else {
  const { worker } = require('./browser');
  worker.start();
  console.log('BROWSER ====>');
}
