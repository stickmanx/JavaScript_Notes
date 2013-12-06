// Bubbling, Capturing, W3C Model

function test(new_text) {
		console.log(new_text);
	}
	
document.getElementById("paragraph").addEventListener("click", 
	function() { test("Test"); },
	false );

document.getElementById("test").addEventListener("click", function(e) {
	console.log(e.eventPhase + " : " + e.target.id + " : bubbling" );
	// e.stopPropagation();
}, false);


document.getElementById('out').addEventListener('click', function(){
    alert('bubble out');
}, false);
document.getElementById('in').addEventListener('click', function(){
    alert('bubble in');
}, false);
document.getElementById('out').addEventListener('click', function(e){
    alert('capture out');
    // use to stop propagation
    // e.stopPropagation();
}, true);
document.getElementById('in').addEventListener('click', function(){
    alert('capture in');
}, true);

// true : capturing phase
// false : bubbling phase

// "you'll see that the 'bubble in' and 'capture in' listeners 
// fire during the AT_TARGET phase. Event listeners invoked for 
// the same element during the same phase are invoked in the registration order."

// Reference
// http://www.quirksmode.org/js/events_order.html
// http://stackoverflow.com/questions/9044794/bubbling-and-capturing-with-addeventlistener