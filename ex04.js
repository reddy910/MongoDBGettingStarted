// ex04.js

use testdb;

db.contacts.find({
	city: {
		$eq: "Chicago"
	}
}, {_id: 0}).pretty()