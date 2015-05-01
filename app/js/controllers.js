var stageclapControllers = angular.module('stageclapControllers', []);

stageclapControllers.controller('SplashCtrl', ['$scope',
	function($scope){
		$scope.user = {};

		$scope.insertDocument = function(db, callback) {
   			db.collection('restaurants').insertOne(user, function(err, result){
	   			assert.equal(err, null);
			    console.log("Inserted a document into the restaurants collection.");
			    callback(result);
		  	});
   		};

		$scope.save = function(user){
			MongoClient.connect(url, function(err, db) {
				assert.equal(null, err);
				insertDocument(db, function() {
				    db.close();
				});
			});
		};
	}]);

stageclapControllers.controller('LoginCtrl', ['$scope',
	function($scope){
		$scope.master = {};

		$scope.save = function(user){
			$scope.master = angular.copy($scope.user);
		};
		
		$scope.user = angular.copy($scope.master);
	}]);