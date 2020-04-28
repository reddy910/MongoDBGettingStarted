// ex05.js

use testdb;

db.sales.find({
	sales_amount: {
		$gte: 10000
	}
}).pretty()