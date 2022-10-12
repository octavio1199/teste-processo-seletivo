module.exports = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  logging: false,
  entities: [
      './src/models/**/*Entity.{js,ts}'
  ],
  migrations: ['./src/database/migrations/*.ts'],
  subscribers: ['./src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: './src/models',
    migrationsDir: './src/database/migrations',
    subscribersDir: './src/subscriber'
  }
};
