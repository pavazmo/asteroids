

// class MongoAsteroidRepository extends AsteroidRepository {
class GetAllAsteroids {
  constructor({mongoAsteroidRepository}) {
    this.mongoAsteroidRepository = mongoAsteroidRepository;
  }
  
  async get() {
    const asteroids = await this.mongoAsteroidRepository.find();
    return asteroids;
  }
}

module.exports = GetAllAsteroids;