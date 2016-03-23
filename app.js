"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('MainController', [function(){
	this.user = {
		name:''
	};
	this.message = '';
	this.sayHello = function(){
		this.message = 'Aesop is hungry, what food will you give him?!';
	};
	this.bye = function(){
		if(!this.user.name || this.user.name.length == 0){
			this.message = 'Why don\'t you want to give him food?! Aesop doesn\'t like you anymore!';
		} else {
			this.message = 'That was tasty, but now he wants another one.';
		}
	}
}]);