angular.module('fizzBuzz', []);

angular.module('fizzBuzz').controller('MainCtrl', function ($scope, FizzBuzzFactory) {
	
	$scope.list = function(limit){
		$scope.numbers = FizzBuzzFactory.getFizzBuzz(limit);
	}
	
}); 

angular.module('fizzBuzz').factory('FizzBuzzFactory', function(){
	
	return{
		getFizzBuzz: function(limit){
			return getFizzBuzz(limit);
		}
	};
	
	
	function getFizzBuzz(limit){
		
		var result = [];
		
		for(var i = 1; i <= limit; i++){
			
			var number = '';
			
			if(i % 3 === 0 && i % 5 === 0){
				number = 'Fizz Buzz';
			} else if (i % 3 === 0){
				number += 'Fizz';
			} else if (i % 5 === 0) {
				number += 'Buzz';
			} else {
				number += i;
			}
			result.push(number);
		}
		return result;
	}

});