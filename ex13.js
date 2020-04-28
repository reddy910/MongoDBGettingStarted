// ex13.js

use testdb;

function map(){

	if(["Sales", "Support", "Services", "Training"].indexOf(this.department)>=0) return;
	
	if(this.salary<=4000) return;

	emit(this.department, this.salary);
}

function reduce(key, values){

	return Array.sum(values);

}

var options = {
	out: {
		inline: true
	}
};

db.employees.mapReduce(map, reduce, options);