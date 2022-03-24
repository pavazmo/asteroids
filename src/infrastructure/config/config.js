const env = process.env.NODE_ENV;
const keepAliveTimeout = process.env.KEEP_ALIVE_TIMEOUT || 1000;
const mongoConnectionUri = process.env.MONGO_CONNECTION_URI || "mongodb+srv://pavazmo:mongotest2@cluster0.exe0r.mongodb.net/asteroids?retryWrites=true&w=majority";
const dbName = 'asteroids';
const mongoTimeout = 1000;

const run = {
  server: {
    port: 3000,
    keepAliveTimeout,
  },
  mongo: {
    mongoConnectionUri,
    dbName,
    timeout: mongoTimeout,
  },
};

const test = {
  server: {
    port: 3333,
    keepAliveTimeout,
  },
  mongo: {
    mongoConnectionUri,
    dbName,
    timeout: mongoTimeout,
  },
};

const config = {
  run,
  test,
};

module.exports = config[env];