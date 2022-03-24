const awilix = require('awilix');
const MongoDbHandler = require('./infrastructure/storage/mongo/db-handler');
const GetAllAsteroids = require('./application/get_all_asteroids')
const MongoAsteroidRepository = require('./infrastructure/storage/mongo/repositories/mongo-asteroid-repository')
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
    mongoDbHandler: awilix.asClass(MongoDbHandler),
    getAllAsteroids: awilix.asClass(GetAllAsteroids),
    mongoAsteroidRepository: awilix.asClass(MongoAsteroidRepository),
});

module.exports = container;