use testdb;

db.contacts.findOne();

var count = db.contacts.count()

print("There are " + count + " contacts!");

