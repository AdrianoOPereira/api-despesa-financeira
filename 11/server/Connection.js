const pgp = require("pg-promise");

class Connection {
	
	constructor () {
		this.connection = pgp()("postgres://postgres:j@l8321bl@localhost:5433/app");
	}

	query (statement, params) {
		return this.connection.query(statement, params);
	}
}

module.exports = Connection;