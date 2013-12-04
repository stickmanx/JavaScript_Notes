var view_miles = function viewMiles() {
	console.log("Function viewMiles");
	console.log(this.miles);
}

function Car() {
	this.miles = 0;
}

// Making viewMiles function available to all Objects
Object.prototype.viewMiles = view_miles; 


var myCar = new Car(); // instantiate a new car object.
console.log(myCar.miles); // :0
myCar.miles = 100;
console.log(myCar.miles); // :100

myCar.viewMiles(); // :100
// Without prototyping the viewMiles function, the above will throw an exception because myCar does not have the function.

// Output:
// [Log] 0 (main.js, line 15)
// [Log] 100 (main.js, line 17)
// [Log] Function viewMiles (main.js, line 2)
// [Log] 100 (main.js, line 3)