// ex06.js

use testdb;

db.sales.find({
	$and: [
		{ sales_amount : { $gte: 5000 }},
		{ sales_amount : { $lte: 6000 }}
	]
}).pretty()