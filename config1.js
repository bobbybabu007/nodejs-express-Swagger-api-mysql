const env = process.env;

const config1 = {
  db: { /* Password and below sensitive info are exposed for demo, PROD launch needs app config and Cloud SQL instances */
    host: env.DB_HOST || 'us-cdbr-east-03.cleardb.com',
    user: env.DB_USER || '$$',
    password: env.DB_PASSWORD || '$$',
    database: env.DB_NAME || '$$',
  },

  listPerPage: env.LIST_PER_PAGE || 10,
 
};

module.exports = config1;