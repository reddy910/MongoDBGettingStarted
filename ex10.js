// ex10.js

use testdb;

db.products.update({_id: 100},
{
	name: "Test product",
	unitPrice: 100.0,
	description: "Test description"
}, {
	upsert: true
});
