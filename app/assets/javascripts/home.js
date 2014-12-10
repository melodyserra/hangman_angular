
var app = angular.module("hangman", []);

app.controller("IndexCtrl", [
  '$scope', function($scope) {
    $scope.letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    $scope.guesses = [];
    $scope.words = [];
    $scope.point = 0;
    //$scope.correct = false;
    $scope.saveWord = function(word) {
      $scope.words.push(word.toLowerCase().split(""));
      console.log("These are the words:", $scope.words[0]);
      return $scope.word = [];
    };

    $scope.revealLetter = function(letter){
      if ($scope.guesses.indexOf(letter) != -1) {
        return letter;
      }
      else {
        return " ";
      }
    };

    $scope.revealImage = function(cutoff){
      var numIncorrect = $scope.guesses.length - $scope.point;
      return numIncorrect >= cutoff;
    };

    $scope.remove = function(letter) {
      return $scope.letters.splice($scope.letters.indexOf(letter), 1);
    };
    return $scope.playerEntry = function(letter) {
      var i, _results;
      $scope.guesses.push(letter);
      $scope.remove(letter);
      i = 0;
      _results = [];
      while (i < $scope.words[0].length) {
        if ($scope.words[0][i] === letter) {
          $scope.point += 1;
        }
        _results.push(i++);
      }
      return _results;
    };
  }
]);