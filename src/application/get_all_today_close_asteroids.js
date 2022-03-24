// class MongoAsteroidRepository extends AsteroidRepository {
    class GetAllTodayCloseAsteroids {
        constructor({mongoAsteroidRepository}) {
          this.mongoAsteroidRepository = mongoAsteroidRepository;
        }
        
        async get() {
          const asteroids = await this.mongoAsteroidRepository.find();
          return asteroids;
        }
      }
      
      module.exports = GetAllTodayCloseAsteroids;