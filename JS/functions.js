//FUNCTIONS
function add(num1, num2){
	return num1 + num2
};

console.log(add(3,1));

var substract = function(num1, callback){
	
	callback(num1);
};


substract(1, function(num){
	console.log(num);
})