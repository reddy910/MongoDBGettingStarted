// ex03.js

use testdb;

db.contacts.find({}, {
	_id: false,
	first_name: 1,
	last_name: 1,
	city: false
})