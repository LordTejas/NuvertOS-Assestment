module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Tejas_5225',
    DB: 'nevert_os_chemicals_api',
    dialect:'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}