export default {
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  type: "postgres",
  database: "envestapie",
  host: "localhost",
};
