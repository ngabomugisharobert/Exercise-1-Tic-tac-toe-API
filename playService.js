const { chunk, isValid } = require("./utils");





const format = (board) =>
    board.split('')



const equals3 = (a, b, c) => {
    return a == b && b == c && a != "+";
};


const checkWinner = (board) => {
    let winner = null;

    // horizontal
    for (let i = 0; i < 3; i++) {
        if (equals3(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
        }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equals3(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
        }
    }

    // Diagonal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
        winner = board[2][0];
    }

    //Are still moves left
    let openSpots = 0;
    const openSpotsList = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == "+") {
                openSpots++;
                openSpotsList.push([i, j])
            }
        }
    }

    //Return winner
    if (winner == null && openSpots == 0) {
        return "tie";
    }
    else if (winner == null && openSpots != 0) {
        // get a random index from openSpotsList
        const randomIndex = Math.floor(Math.random() * openSpotsList.length)
        console.log("randomIndex =", randomIndex)

        // update the board with the random index
        board[openSpotsList[randomIndex][0]][openSpotsList[randomIndex][1]] = "o"

        const newBoard = board.flat()
        const newBoard2 = newBoard.map((item) => {
            if (item === "+") {
                return " "
            }
            return item
        })
        console.log("newBoard2 =", newBoard2)
        return newBoard2.join("")
    }
    else {
        if (winner == "x")
            return "Player Win"
        else
            return "Computer Win"
    }
};

const play = (board) => {

    if (!isValid(board)) return "Invalid Board"
    const formattedBoard = format(board)
    console.log("formattedBoard =", formattedBoard)
    const chunked = chunk(formattedBoard)
    console.log("Chunked board =", chunked)
    const res = checkWinner(chunked)
    console.log("res =", res)
    return res
}


module.exports = {
    play
}