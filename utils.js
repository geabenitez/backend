module.exports = {
  knex: require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'vilca_user',
      password: 'super_complicated_password',
      database: 'vilca_database',
      port: 4002
    }
  })
}