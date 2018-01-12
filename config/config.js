export default {
    development: {
        dialect: "sqlite",
        storage: "db.development.sqlite"
    },
    test: {
        dialect: "sqlite",
        storage: ":memory:"
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DV_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql'
    }
}