// ex08.js

use testdb;

db.sales.find({
	category: "Beverages",
	quarter: {
		$in: [1, 3]
	},
	sales_amount: {
		$gte: 5000
	}
}).count()