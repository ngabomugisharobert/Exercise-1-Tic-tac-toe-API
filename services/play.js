const play = (board) => {
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
    if (openSpotsList.length > 0) {
        // update the board with the random index
        const randomIndex = Math.floor(Math.random() * openSpotsList.length)
        board[openSpotsList[randomIndex][0]][openSpotsList[randomIndex][1]] = "o"

        const newBoard = board.flat()
        const newBoard2 = newBoard.map((item) => {
            if (item === "+") {
                return " "
            }
            return item
        })

        return newBoard2.join("")
    }
    return board.flat().join("")
}

module.exports = {
    play
}