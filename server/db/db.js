const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const config = {
  logging: false
};

if(process.env.LOGGING === 'true'){
  delete config.logging
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if(process.env.DATABASE_URL){
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}

const db = new Sequelize('postgres://grace_buster_pa7j_user:WGxj6k7Ms3Lygmo0oUIuvKXdDClxsvrA@dpg-ch8krs9mbg54hi5tr03g-a/grace_buster_pa7j', config);
module.exports = db;

