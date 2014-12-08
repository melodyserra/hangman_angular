# #define my app
# app = angular.module "hangman", []


# #create my controller
# app.controller "IndexCtrl", [ '$scope', ($scope) ->

#   #sets up buttons on page
#   $scope.letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

#   #tracks letters clicked
#   $scope.guesses = []

#   $scope.words = []

#   $scope.point = 0

#   $scope.correct = false

#   #save word from first player
#   $scope.saveWord = (word) ->
#     #split string into characters
#     $scope.words.push(word.toLowerCase().split(""))
#     console.log "These are the words:", $scope.words[0]
#     #empty form in view
#     $scope.word = []

#   #set up method to remove buttons from page
#   $scope.remove = (letter) ->
#     $scope.letters.splice($scope.letters.indexOf(letter), 1)

#   $scope.playerEntry = (letter) ->
#     $scope.guesses.push(letter)
#     $scope.remove(letter)

#     i = 0
#     while i < $scope.words[0].length
#       $scope.point += 1  && $scope.correct = true if $scope.words[0][i] == letter
#       i++
# ]
