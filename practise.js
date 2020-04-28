use testdb;
mongo import --db testdb --collection sales sales-data.docs

db.contacts.findone();
var count = db.contacts.count();
print("There are "+count+"records available");


use testdb;
var p1 ={};
p1._id = 1; 
p1.name = "smith";
p1.city = "Tampa";
db.contacts.insert(p1);

db.contacts.save(p1);
db.contacts.find();
db.contacts.find({},{
	first_name:1,
	last_name:1,
	city:true
})
db.contacts.getIndexes()
