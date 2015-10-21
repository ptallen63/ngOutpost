var app = angular.module('ngOutpost', []);

app.constant('ngOutpostApp',{
	VERSION: '0.1.0',
	API_KEY: 'YOUR API KEY',
	APP_NAME: 'YOUR APP NAME'
});



app.factory('NgOutpostFactory', '$http','ngOutpostApp',function ($http) {
	var ngOutpostFactory = {};

	ngOutpostFactory.getMessages = function (message) {

		return $http.post('http://outpost.mulleravenue.com/api/get/message',{
			api_key:ngOutpostApp.API_KEY
		});

	};

	ngOutpostFactory.createMessage = function (message) {
		return $http.post('http://outpost.mulleravenue.com/api/create/message',{
			api_key:ngOutpostApp.API_KEY,
			source: message.source,
			app_name: ngOutpostApp.APP_NAME,
			from_name: message.from_name,
			from_email: message.from_email,
			subject: message.subject,
			body: message.body,
		});
	};


	ngOutpostFactory.deleteMessage = function (message) {
		return $http.post('http://outpost.mulleravenue.com/api/delete/message',{
			api_key:ngOutpostApp.API_KEY,
			mid:message.mid
		});
	};


	return ngOutpostFactory;
});
