const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Gr4nd4m',
    host: 'localhost',
    port: 5432,
    database: 'fleaMarket'
});

module.exports = pool;