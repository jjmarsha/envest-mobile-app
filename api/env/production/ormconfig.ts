export default {
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  type: "sqlite",
  database: "envestapie",
};
