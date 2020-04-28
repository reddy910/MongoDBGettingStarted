// ex12.js

use testdb;

// db.employees.aggregate({
// 	$group: {
// 		_id: "$department",
// 		emp_count: { $sum: 1}
// 	}
// })

db.employees.aggregate({
	$group: {
		_id: "$department",
		avg_salary: { $avg: "$salary"}
	}
}, {
	$match: {
		avg_salary: { $gte: 4000 }
	}
}, {
	$sort: {
		avg_salary: -1
	}
})