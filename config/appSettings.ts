import dotenv from "dotenv";
dotenv.config();

const appSettings = {
  // App setting
  app: {
    version: process.env.API_VERSION || "v1",
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
  },

  // Database setting
  database: {
    url: process.env.DATABASE_URL,
  },

  // middleware setting
  middleware: {
    auth: {
      secret: process.env.JWT_SECRET,
    },
  },

  // Elasticsearch setting
  elasticsearch: {
    url: `http://elastic:${process.env.ELASTIC_PASSWORD}@${process.env.DOMAIN}:9200`,
  },
};

export default appSettings;
