
const chunk = (array) => {
    let resultArray = [];
    let chunkSize = array.length / 3;
    for (i = 0; i < chunkSize; i++) {
        resultArray.push(array.splice(0, 3));
    }
    return resultArray;
}

module.exports = {
    chunk
}