
var app = angular.module("hangman", []);

app.controller("IndexCtrl", [
  '$scope', function($scope) {
    // added by Elie to show and hide the form and letters
    $scope.hideForm = false;
    $scope.showLetters = false;

    // added by Elie for debugging (type in scope in chrome console and you have all your scope variables)
    window.scope = $scope;
    $scope.letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    $scope.guesses = [];
    $scope.words = [];
    $scope.point = 0;
    $scope.incorrect = 0;
    //$scope.correct = false;
    $scope.saveWord = function(word) {
      $scope.hideForm = true;
      $scope.showLetters = true;
      $scope.answer = word;
      return $scope.words.push(word.toLowerCase().split(""));
      // console.log("These are the words:", $scope.words[0]);
      // return $scope.word = [];
    };

    $scope.newGame = function(){
      console.log("Im here");
      $scope.hideForm = false;
      $scope.showLetters = false;
      $scope.guesses = [];
      $scope.words = [];
      $scope.point = 0;
      $scope.incorrect = 0;
      $scope.word = '';
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
      // var numIncorrect = $scope.guesses.length - $scope.point;
      return $scope.incorrect >= cutoff;
    };

    $scope.endGame = function(){
      // added by Elie for determining when you lose (location.reload() is a semi-janky way to force refresh the page)
      if ($scope.incorrect >= 6){
        alert("You Lose!");
        location.reload();
      }
    };

    // $scope.wonGame = function(){
    //   if ($scope.incorrect < 6) && $scope.answer=
    //     alert("You Win!");
    //   location.reload();
    //   }
    // };


    $scope.remove = function(letter) {
      return $scope.letters.splice($scope.letters.indexOf(letter), 1);
    };
    $scope.playerEntry = function(letter) {
      console.log("clicked");
      var i, _results;
      $scope.guesses.push(letter);
      $scope.remove(letter);
      i = 0;
      _results = [];
        // while (i < $scope.words[0].length) {
        // added by Elie to see if the letter is in the the words array
        if ($scope.words[0].indexOf(letter) !== -1) {
          $scope.point ++;
        }
        else {
         $scope.incorrect++;
         // added by Elie to see if the user has lost
         $scope.endGame();
        }
        _results.push(i++);
      // }
      return _results;
    };
  }
]);