const {createServer} = require('../../lib');
const { APPLICATION_LOG_LEVEL } = process.env;

const config = {
  serverConfig: {
    server: {　port: 8123 }
  },
  loggerConfig: {
    level: APPLICATION_LOG_LEVEL,
  }
};

createServer(config)
.then(server => server.start());
