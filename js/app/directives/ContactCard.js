function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username }}</span>',
			'</div>'
		].join(''),
		scope: {
			name: '=',
			username: '=',
			email: '=',
			phone: '='
		},
		controller: function($scope) {
			$scope.username = $scope.username.toLowerCase();
		},
		controllerAs: 'ctrl',
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
