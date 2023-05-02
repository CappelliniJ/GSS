const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const config = {
  logging: false
};

if(process.env.LOGGING === 'true'){
  delete config.logging
}

if(process.env.DATABASE_URL){
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}

const db = new Sequelize(
  'postgres://grace_buster_user:G5lyb7C97MWexfS5xxtHad75DiUcEipn@dpg-cgvuco1euhlhlbi4nhkg-a/grace_buster',
  config
)

module.exports = db
