var mySingleton = (function () {

	var instance;

	function init() {

		function privateMethod() {
			console.log( "I am private" );
		}

		var privateVariable = "Im also private";

		var privateRandomNumber = Math.random();

		return {

			publicMethod: function () {
				console.log( "The public can see me!");
			},

			publicProperty: "I am also public",

			getRandomNumber: function() {
				return privateRandomNumber;
			}
		};
	};

	return {

		getInstance: function () {

			if ( !instance ) {
				instance = init();
			}

			return instance;
		}
	};
}) ();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

console.log( singleA.getRandomNumber() === singleB.getRandomNumber() );