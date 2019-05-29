function createEmptyBoard() {
    let length = 9;
    let array1 = [];

    for (let i = 0; i < length; i++) {
        let array2 = [];
        for (let j = 0; j < length; j++) {
            array2.push(0);
        }
        array1.push(array2);
    }
    return array1;
}

function getColArray(array, rowNum, colNum) {
    let newArray = [];
    for (let i = 0; i <= rowNum; i++) {
        newArray.push(array[i][colNum]);
    }
    console.log('rowNum', rowNum, 'newArray', newArray);
    return newArray;
}

function getRowArray(array, rowNum, colNum) {
    let newArray = [];
    for (let i = 0; i <= colNum; i++) {
        newArray.push(array[rowNum][i])
    }
    console.log('array[rowNum]', array[rowNum], 'colNum', colNum, 'newArray', newArray);
    return newArray;
}

function digitArray(maxNum) {
    let array = [];
    for (let i = 0; i < maxNum; i++) {
        array.push(i + 1);
    }
    return array;
}

function getQuadrantArray(array, rowNum, colNum) {
    let quadrantArray = [];
    let rowR = rowNum % 3;
    let colR = colNum % 3;
    if (colR === 0) {
        if (rowR === 0) {
            // top-left
            // console.log('top-left')
            for (let i = 0; i < 3; i++) {
                quadrantArray.push(array[rowNum + i][colNum], array[rowNum + i][colNum + 1], array[rowNum + i][colNum + 2]);
            }
        }
        else if (rowR === 1) {
            // middle-left
            // console.log('middle-left')
            for (let i = 0; i < 3; i++) {
                quadrantArray.push(array[rowNum + i - 1][colNum], array[rowNum + i - 1][colNum + 1], array[rowNum + i - 1][colNum + 2]);
            }
        }
        else {
            // bottom-left
            // console.log('bottom-left')
            for (let i = 0; i < 3; i++) {
                quadrantArray.push(array[rowNum + i - 2][colNum], array[rowNum + i - 2][colNum + 1], array[rowNum + i - 2][colNum + 2]);
            }
        }
    }
    else if (colR === 1) {
        if (rowR === 0) {
            // top-middle
            // console.log('top-middle')
            for (let i = 0; i < 3; i++) {
                quadrantArray.push(array[rowNum + i][colNum - 1], array[rowNum + i][colNum], array[rowNum + i][colNum + 1]);
            }
        }
        else if (rowR === 1) {
            // middle-middle
            // console.log('middle-middle')
            for (let i = 0; i < 3; i++) {
                quadrantArray.push(array[rowNum + i - 1][colNum - 1], array[rowNum + i - 1][colNum], array[rowNum + i - 1][colNum + 1]);
            }
        }
        else {
            // bottom-middle
            // console.log('bottom-middle')
            for (let i = 0; i < 3; i++) {
                quadrantArray.push(array[rowNum + i - 2][colNum - 1], array[rowNum + i - 2][colNum], array[rowNum + i - 2][colNum + 1]);
            }
        }
    }
    else {
        if (rowR === 0) {
            // top-middle
            // console.log('top-right')
            for (let i = 0; i < 3; i++) {
                quadrantArray.push(array[rowNum + i][colNum - 2], array[rowNum + i][colNum - 1], array[rowNum + i][colNum]);
            }
        }
        else if (rowR === 1) {
            // middle-right
            // console.log('middle-right')
            for (let i = 0; i < 3; i++) {
                quadrantArray.push(array[rowNum + i - 1][colNum - 2], array[rowNum + i - 1][colNum - 1], array[rowNum + i - 1][colNum]);
            }
        }
        else {
            // bottom-right
            // console.log('bottom-right')
            for (let i = 0; i < 3; i++) {
                quadrantArray.push(array[rowNum + i - 2][colNum - 2], array[rowNum + i - 2][colNum - 1], array[rowNum + i - 2][colNum]);
            }
        }
    }
    return quadrantArray;
}

function getTakenDigits(colArray, rowArray, quadrantArray) {
    return new Set(colArray.concat(rowArray).concat(quadrantArray));
}

function getAvailDigits(digitsArray, takenSet) {
    let availArray = [];
    digitsArray.forEach(element => {
        if (!takenSet.has(element)) {
            availArray.push(element);
        }
    })
    return availArray;
}




function populateBoard() {
    let board = createEmptyBoard();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let colArray = getColArray(board, i, j);
            let rowArray = getRowArray(board, i, j);
            let quadrantArray = getQuadrantArray(board, i, j);
            let taken = getTakenDigits(colArray, rowArray, quadrantArray);

            let digits = digitArray(9);
            let avail = getAvailDigits(digits, taken);

            console.log('avail', avail);

            // console.log('colArray', colArray, 'rowArray', rowArray, 'quadrantArray', quadrantArray);
            // console.log('avail', avail);

            let randomAvail = avail[Math.floor(Math.random() * avail.length)];

            // console.log('randomAvail', randomAvail);
            board[i][j] = randomAvail;
            console.log('board' + '\n', board);
            console.log('')
        }
    
}
return board;
}

console.log(populateBoard());