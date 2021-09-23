import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    password: "hani123"
});

export default db;
