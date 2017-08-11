(function () {
  angular.module("app")
    .factory('SurveyService', SurveyService);

  SurveyService.$inject = ['$http', '$q', '$filter'];

  function SurveyService($http, $q, $filter) {

    var service = {
      generateSurvey: generateSurvey,
      getSurveys: getSurveys
    }
    
    function generateSurvey(survey) {
    	survey.userId = 0;
			survey.creationDate = $filter('date')(new Date(), "yyyy-MM-dd'T'HH:mm:ss.sssZ");
    	var def = $q.defer();
        var req = {
          method: 'POST',
          url: "survey",
          data: survey
        }
        $http(req).success(function (data) {
          def.resolve(data);
        })
          .error(function () {
          def.reject("Failed to generate a new survey!");
        });
        return def.promise;
    }
    
    var surveysList = [];
    	
		function getSurveys() {
        var def = $q.defer();
        var req = {
            method: 'GET',
            url: "survey"
        }
        return $http(req).success(function (response) {
            return surveysList = response.data;
        }).error(function () {
            return def.reject("Failed to get surveys");
        });
    }
    return service;

    

    
    
  }
} ());