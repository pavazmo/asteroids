const {MongoClient} = require('mongodb');
const {mongo: {mongoConnectionUri, dbName}} = require('../../../infrastructure/config/config');

class MongoDbHandler {
    async connect()
    {
        try {
            const client = new MongoClient(mongoConnectionUri);
            await client.connect();
            const db = await client.db(dbName);
            return db;
        } catch (e) {
            console.error(e);
        }
    }
}
module.exports = MongoDbHandler;