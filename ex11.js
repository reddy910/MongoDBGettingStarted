// ex11.js

use testdb;

db.products.update({
	brand:"Fresho"
}, {
	$inc: {
		unit_price: 5
	}
}, {
	multi: true
})