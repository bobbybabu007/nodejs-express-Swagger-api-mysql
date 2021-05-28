const env = process.env;

const config1 = {
  db: { /* Password and below sensitive info are exposed for demo, PROD launch needs app config and Cloud SQL instances */
    host: env.DB_HOST || '127.0.0.1',
    user: env.DB_USER || '${DB_USER}',
    password: env.DB_PASSWORD || '${DB_PASSWORD}',
    database: env.DB_NAME || 'titanic',
  },

  listPerPage: env.LIST_PER_PAGE || 10,
 
};

module.exports = config1;