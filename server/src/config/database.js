module.exports = {
    database: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DATABASE || 'webguia',
        host: process.env.DB_HOST || 3306
    }
}