// import {ConnectionOptions, DatabaseType} from 'typeorm';

const otherSettings = {
  entities: ['src/entity/*.js'],
  subscribers: ['src/subscriber/*.js'],
  migrations: ['src/migration/*.js'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
};
const {
  DB_TYPE,
  DB_URL,
  DB_HOST,
  DB_USER,
  DB_NAME,
  DB_PASS,
  DB_PORT
} = process.env;
const {
  DB_TEST_TYPE,
  DB_TEST_HOST,
  DB_TEST_USER,
  DB_TEST_NAME,
  DB_TEST_PASS,
  DB_TEST_PORT
} = process.env;

module.exports = [
  {
    name: 'production',
    type: DB_TYPE || 'postgres',
    url: DB_URL || '',
    synchronize: true,
    logging: false,
    ...otherSettings
  },
  {
    name: 'development',
    type: DB_TYPE || 'postgres',
    host: DB_HOST || 'localhost',
    port: parseInt(DB_PORT, 10) || 5432,
    username: DB_USER || 'postgres',
    password: DB_PASS || 'postgres',
    database: DB_NAME || 'appDB',
    synchronize: true,
    logging: true,
    ...otherSettings
  },
  {
    name: 'test',
    type: DB_TEST_TYPE || 'postgres',
    host: DB_TEST_HOST || 'localhost',
    port: parseInt(DB_TEST_PORT, 10) || 5432,
    username: DB_TEST_USER || 'test',
    password: DB_TEST_PASS || 'test',
    database: DB_TEST_NAME || 'test',
    synchronize: true,
    logging: false,
    ...otherSettings
  }
];
