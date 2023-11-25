import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  jwtSecret: process.env.JWT_SECRET || 'develop',
  redisPassword: process.env.REDIS_PASSWORD || 'password',
  redisPort: process.env.REDIS_PORT || 6379,
  redisHost: process.env.REDIS_HOST || 'localhost',
};

export default config;
