import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  jwtSecret: process.env.JWT_SECRET || 'develop',
  redisPassword: process.env.REDIS_HOST_PASSWORD || 'qwerty2H',
  redisPort: process.env.REDIS_PORT || 6379,
  redisHost: process.env.REDIS_HOST || 'localhost',
};

export default config;
