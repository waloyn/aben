"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    development: {
        dialect: 'sqlite',
        storage: 'database.sqlite'
    },
    test: {
        dialect: 'sqlite',
        storage: ':memory:'
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: process.env.DB_DIALECT,
    }
};
//# sourceMappingURL=database.js.map