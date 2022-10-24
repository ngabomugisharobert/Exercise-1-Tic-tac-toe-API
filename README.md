# **Exercise 1: Tic-tac-toe-API**

**Link** :🔗 https://tic-tac-toe-api-exercise.herokuapp.com

⚠️⚠️⚠️⚠️⚠️
this API access GET method only as required


### ***example of valid board***

* https://tic-tac-toe-api-exercise.herokuapp.com/?board=+++ox++++
* etc..

### ***example of invalid board***

* https://tic-tac-toe-api-exercise.herokuapp.com/?board=+++ox+
* https://tic-tac-toe-api-exercise.herokuapp.com/?board=+++ox+o++
* https://tic-tac-toe-api-exercise.herokuapp.com/?board=+++ox+o+7
* https://tic-tac-toe-api-exercise.herokuapp.com/?board=+++oxoooo
* etc..


## **Specifications**

* Your server will be provided the current board in a GET request, using the ‘board’ parameter in the query string. ✅
* If the board string doesn't represent a valid tic-tac-toe board, or it’s not plausibly o’s turn, your server should return an HTTP response code 400 (Bad Request) ✅
* Your server always plays as o. ✅
* Either player can go first. ✅
* If the board is a valid tic-tac-toe board and it is plausibly o's turn, your server should return a string representation of the same board with one ‘o’ added. ✅
* If possible and time permits, your tic-tac-toe api should play optimally (i.e. never lose when it is possible to force a tie, or tie when it is possible to win). 
  * The best strategy is probably to search the game tree for winning moves. 


