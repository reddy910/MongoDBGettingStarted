// ex09.js

use testdb;

db.sales.find({
	$where: "this.sales_amount >= 5000 && this.sales_amount<=6000"
}).count()