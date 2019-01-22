const otherSettings = {
  "entities": [
    "src/entity/*.js"
  ],
  "subscribers": [
    "src/subscriber/*.js"
  ],
  "migrations": [
    "src/migration/*.js"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
};

export default [{
  "name": "production",
  "type": process.env.DB_TYPE || 'postgres',
  "url": process.env.DB_URL || '',
  "synchronize": true,
  "logging": false,
  ...otherSettings,
},
{
  "name": "development",
  "type": process.env.DB_TYPE || 'postgres',
  "host": process.env.DB_HOST || 'localhost',
  "port": process.env.DB_PORT || 5432,
  "username": process.env.DB_USER || "postgre",
  "password": process.env.DB_PASS || "postgres",
  "database": process.env.DB_NAME || "appDB",
  "synchronize": true,
  "logging": false,
  ...otherSettings,
},
{
  "name": "test",
  "type": process.env.DB_TEST_TYPE || 'postgres',
  "host": process.env.DB_TEST_HOST || 'localhost',
  "port": process.env.DB_TEST_PORT || 5432,
  "username": process.env.DB_TEST_USER || "test",
  "password": process.env.DB_TEST_PASS || "test",
  "database": process.env.DB_TEST_NAME || "test",
  "synchronize": true,
  "logging": false,
  ...otherSettings,
}];

