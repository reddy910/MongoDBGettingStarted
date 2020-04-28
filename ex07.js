// ex07.js

use testdb;

// db.sales.find({
// 	$or: [
// 		{ quarter: 1 },
// 		{ quarter: 3 }
// 	]
// }).pretty();

db.sales.find({
	quarter: {
		$in: [1, 3]
	}
}).pretty()