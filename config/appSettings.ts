const appSettings = {
  // App setting
  app: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
  },

  // Database setting
  database: {
    url: process.env.DATABASE_URL,
  },

  // Elasticsearch setting
  elasticsearch: {
    url: `http://elastic:${process.env.ELASTIC_PASSWORD}@${process.env.DOMAIN}:9200`,
  },
};

export default appSettings;
