const checkHorizontal = (list) => {
    console.log(list)
    const size = list.length;  // calculating the length of the array
    for (let i = 1; i < size; i++) {
        if (list[i] !== list[i - 1]) {  // checking if the current element is equal to the previous element
            return '+' // returning -1 if the current element is not equal to the previous element
        }
    }
    return (list[0] == '+') ? '+' : list[0]; // returning -1 if the current element is not equal to the previous element
}


const checkVertical = (board) => {
    const loops = board.length;
    const len = board[0].length;
    for (let i = 0; i < loops; i++) {
        let curr_ver = []
        for (let j = 0; j < len; j++) {
            curr_ver.push(board[j][i])
        }
        const winner = checkHorizontal(curr_ver)
        if (winner != '+') {
            return winner
        }
    }
    return '+'; // returning winner if all the elements are equal
}

const checkDiagonal = (board) => {
    const loops = board.length;
    const len = board[0].length;
    let diag1 = []
    let diag2 = []
    for (let i = 0; i < loops; i++) {
        for (let j = 0; j < len; j++) {
            if (i == j) {
                diag1.push(board[i][j])
                diag2.push(board[i][len - 1 - i])
            }
        }
    }
    const winner1 = checkHorizontal(diag1)
    if (winner1 != '+') {
        return winner1
    }
    const winner2 = checkHorizontal(diag2)
    if (winner2 != '+') {
        return winner2
    }

    return '+'; // returning winner if all the elements are equal
}

const checkWinner = (board) => {

    for (let i = 0; i < board.length; i++) {
        const winner = checkHorizontal(board[i])
        if (winner != '+') {
            return winner
        }
    }

    const winner2 = checkVertical(board)
    if (winner2 != '+') {
        return winner2
    }
    const winner3 = checkDiagonal(board)
    if (winner3 != '+') {
        return winner3
    }

    //check if there is no + in the board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == '+')
                return '+'
        }
    }
    return 'tie'

}

module.exports = {
    checkWinner
}