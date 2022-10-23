
const chunk = (array) => {
    let resultArray = [];
    let chunkSize = array.length / 3;
    for (i = 0; i < chunkSize; i++) {
        resultArray.push(array.splice(0, 3));
    }
    return resultArray;
}


const isValid = board => {

    const playersPlay = (new String(board)).replace(/[^x]/g, "").length
    const computersPlay = (new String(board)).replace(/[^o]/g, "").length

    if (playersPlay > computersPlay + 1 || computersPlay > playersPlay || board.length !== 9)
        return false

    return true
}

module.exports = {
    chunk,
    isValid,
}