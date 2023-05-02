const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const config = {
  logging: false
};

if(process.env.LOGGING === 'true'){
  delete config.logging
}

let connectionString;

if(process.env.DATABASE_URL){
  connectionString = process.env.DATABASE_URL;
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
} else {
  const dbUsername = 'grace_buster_pa7j_user';
  const dbPassword = 'WGxj6k7Ms3Lygmo0oUIuvKXdDClxsvrA';
  const dbHost = 'dpg-ch8krs9mbg54hi5tr03g-a';
  const dbName = 'grace_buster_pa7j';
  
  connectionString = `postgres://${dbUsername}:${dbPassword}@${dbHost}/${dbName}`;
}

const db = new Sequelize(connectionString, config);

module.exports = db;


