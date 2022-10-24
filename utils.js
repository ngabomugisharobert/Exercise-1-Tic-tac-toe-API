
const chunk = (array) => {
    array = array.split('')
    let resultArray = [];
    let chunkSize = array.length / 3;
    for (i = 0; i < chunkSize; i++) {
        resultArray.push(array.splice(0, 3));
    }
    return resultArray;
}


const isValid = board => {
    if ((board + '').length !== 9) {
        return false;
    }

    const playersPlay = (new String(board)).replace(/[^x]/g, "").length
    const computersPlay = (new String(board)).replace(/[^o]/g, "").length

    //check if it is plausibly o's turn
    if ((playersPlay > computersPlay + 1 || computersPlay > playersPlay))
        if (playersPlay + computersPlay !== 9)
            return false

    //check if board only contains only x, o and +
    const match = board.match(/[x+o]/g)
    if (match === null || match.length !== 9)
        return false

    return true
}

module.exports = {
    chunk,
    isValid,
}