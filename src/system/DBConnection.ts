import { createConnection, ConnectionOptions } from "typeorm";

import { ExchangeRatesEntity } from "../core/entities/index";

async function getConfig() {
	return {
		dbName: process.env.DATABASE_NAME,
		dbUser: process.env.DATABASE_USER,
		dbPass: process.env.DATABASE_PWD,
		dbHostname: process.env.DATABASE_HOSTNAME
	};
}

export async function createConnectionPool() {
	const {
		dbName, dbPass, dbUser, dbHostname
	} = await getConfig();

	const connOptions: ConnectionOptions = {
		type: "postgres",
		host: dbHostname,
		username: dbUser,
		password: dbPass,
		database: process.env.NODE_ENV === "test" ? "test" : dbName,
		synchronize: true, // if this flag is set, every entity will be synced to the DB, this will only be used in lower environments
		entities: [ExchangeRatesEntity],
		migrations: []
	};

	const connection = await createConnection(connOptions);
	return connection;
}
