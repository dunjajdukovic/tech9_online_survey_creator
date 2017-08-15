(function () {
  angular.module("app")
    .factory('SurveyService', SurveyService);

  SurveyService.$inject = ['$http', '$q', '$filter'];

  function SurveyService($http, $q, $filter) {

    var service = {
      saveSurvey: saveSurvey,
      deleteSurvey: deleteSurvey,
      generateSurvey: generateSurvey,
      getSurveys: getSurveys,
      getCurrentSurvey: getCurrentSurvey
    }

    function saveSurvey(survey) {
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
        def.reject("Failed to save a survey!");
      });
      return def.promise;
    }
    
    function deleteSurvey(id) {
      var def = $q.defer();
      var req = {
        method: 'DELETE',
        url: "survey/" + id
      }
      $http(req).success(function (data) {
        def.resolve(data);
      })
        .error(function () {
        def.reject("Failed to delete a survey");
      });
      return def.promise;
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

    function getCurrentSurvey(hashedId) {
      var def = $q.defer();
      var req = {
        method: 'GET',
        url: "survey/" + hashedId
      }
      $http(req).success(function (data) {
        def.resolve(data);
      })
        .error(function () {
        def.reject("Failed to get current survey!");
      });
      return def.promise;
    }

    function getSurveys() {
      var def = $q.defer();
      var req = {
        method: 'GET',
        url: "survey"
      }
      $http(req).success(function (data) {
        def.resolve(data);
      })
        .error(function () {
        def.reject("Failed to get all surveys!");
      });
      return def.promise;
    }
    
    return service;

  }
} ());
