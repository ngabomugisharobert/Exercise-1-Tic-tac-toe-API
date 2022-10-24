
const chunk = (string) => {
    //replace " " with "+" in string
    temp_board = string.replace(/ /g, "+")


    array = temp_board.split('')
    let resultArray = [];
    let chunkSize = array.length / 3;
    for (i = 0; i < chunkSize; i++) {
        resultArray.push(array.splice(0, 3));
    }
    return resultArray;
}


const isValid = board => {
    // check if the board length is valid
    if ((board + '').length !== 9) {
        return false;
    }

    // check if the board contains only x, o, ' '
    const validChars = ['x', 'o', ' '];
    for (let i = 0; i < board.length; i++) {
        if (!validChars.includes(board[i])) {
            return false;
        }
    }


    const playersPlay = (new String(board)).replace(/[^x]/g, "").length
    const computersPlay = (new String(board)).replace(/[^o]/g, "").length

    //check if it is plausibly o's turn
    if ((playersPlay > computersPlay + 1 || computersPlay > playersPlay))
        if (playersPlay + computersPlay !== 9)
            return false



    return true
}

module.exports = {
    chunk,
    isValid,
}