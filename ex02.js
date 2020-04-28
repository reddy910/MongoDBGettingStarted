// ex02.js

use testdb;

var p1 = {};
p1._id = 1;
p1.name = "Martin";
p1.city = "Dallas";

db.contacts.save(p1);
