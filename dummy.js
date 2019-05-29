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
    // console.log('rowNum', rowNum, 'newArray', newArray);
    return newArray;
}

function getRowArray(array, rowNum, colNum) {
    let newArray = [];
    for (let j = 0; j <= colNum; j++) {
        newArray.push(array[rowNum][j])
    }
    // console.log('array[rowNum]', array[rowNum], 'colNum', colNum, 'newArray', newArray);
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

function getAvail(board, i, j) {
    let colArray = getColArray(board, i, j);
    let rowArray = getRowArray(board, i, j);
    let quadrantArray = getQuadrantArray(board, i, j);
    let taken = getTakenDigits(colArray, rowArray, quadrantArray);
    let digits = digitArray(9);
    return getAvailDigits(digits, taken);
}

function getStepsForward(board, i, j) {
    return (board[0].length * (i)) + j;
}

function setToZero(board, rowNum, colNum) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (rowNum <= i && colNum <= j) {
                board[i][j] = 0;
            }
        }
    }
    return board;
}

function populateBoard() {
    let board = createEmptyBoard();
    let stepsBack = 0;
    let maxNum = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            
            board = setToZero(board, i, j);

            // console.log('stepsBack', stepsBack);
            let currentSteps = getStepsForward(board, i, j);
            if (currentSteps > maxNum) {
                maxNum = currentSteps;
                stepsBack = 0;
            }

            // console.log('maxNum', maxNum);

            let avail = getAvail(board, i, j);
            let randomAvail = avail[Math.floor(Math.random() * avail.length)];

            if (randomAvail) {
                board[i][j] = randomAvail;
            } else {
                stepsBack++;
                if (j - stepsBack < 0) {
                    i--;
                    j = board[i].length;
                }
                else {
                    j = j - stepsBack;
                }
            }
            // console.log('board' + '\n', board + '\n');

        }

    }
    // console.log('board' + '\n', board + '\n');
    return board;
}

console.time();

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     console.log(populateBoard());
// }

console.log(populateBoard());

console.timeEnd();