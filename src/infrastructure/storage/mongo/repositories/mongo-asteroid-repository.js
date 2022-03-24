
// class MongoAsteroidRepository extends AsteroidRepository {
class MongoAsteroidRepository {
  constructor({mongoDbHandler}) {
    this.mongoDbHandler = mongoDbHandler;
  }
  
  async find() {
    const db = await this.mongoDbHandler.connect();
    const sessionDocument = await db.collection("asteroids").findOne({name: "Eros567"});
    console.log(sessionDocument);
    return sessionDocument;
  }

}

module.exports = MongoAsteroidRepository;