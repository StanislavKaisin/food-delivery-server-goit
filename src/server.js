const http = require('http');
const router = require('./routes/router');
const url = require('url');

const requestHandler = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const func = router[parsedUrl.pathname] || router.default;
  func(request, response);
}

const server = http.createServer(requestHandler);

const startServer = port => {
  server.listen(port, (error) => {
    if (error) {
      console.log(`Error at: ${error}`);
    }
    console.log(`Server running at ${port} port`)
  })
}
module.exports = startServer;
