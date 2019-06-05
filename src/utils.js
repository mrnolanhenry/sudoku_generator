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
    return newArray;
}

function getRowArray(array, rowNum, colNum) {
    let newArray = [];
    for (let j = 0; j <= colNum; j++) {
        newArray.push(array[rowNum][j])
    }
    return newArray;
}

function digitArray(maxNum) {
    let array = [];
    for (let i = 0; i < maxNum; i++) {
        array.push(i + 1);
    }
    return array;
}

function getSquareArray(board, rowNum, colNum) {
    let array = [];
    let rowMod = rowNum % 3;
    let colMod = colNum % 3;
    switch (colMod) {
        case 0: {
            switch (rowMod) {
                case 0: {
                    // top-left
                    break;
                }
                case 1: {
                    // middle-left
                    array.push(board[rowNum - 1][colNum], board[rowNum - 1][colNum + 1], board[rowNum - 1][colNum + 2]);
                    break;
                }
                default: {
                    // bottom-left
                    for (let i = 0; i < 2; i++) {
                        array.push(board[rowNum + i - 2][colNum], board[rowNum + i - 2][colNum + 1], board[rowNum + i - 2][colNum + 2]);
                    }
                }
            }
            break;
        }
        case 1: {
            switch (rowMod) {
                case 0: {
                    // top-middle
                    array.push(board[rowNum][colNum - 1]);
                    break;
                }
                case 1: {
                    // middle-middle
                    array.push(board[rowNum - 1][colNum - 1], board[rowNum - 1][colNum], board[rowNum - 1][colNum + 1]);
                    array.push(board[rowNum][colNum - 1]);
                    break;
                }
                default: {
                    // bottom-middle
                    array.push(board[rowNum - 2][colNum - 1], board[rowNum - 2][colNum], board[rowNum - 2][colNum + 1]);
                    array.push(board[rowNum - 1][colNum - 1], board[rowNum - 1][colNum], board[rowNum - 1][colNum + 1]);
                    array.push(board[rowNum][colNum - 1]);
                }
            }
            break;
        }
        default: {
            switch (rowMod) {
                case 0: {
                    // top-right
                    array.push(board[rowNum][colNum - 2], board[rowNum][colNum - 1]);
                    break;
                }
                case 1: {
                    // middle-right
                    array.push(board[rowNum - 1][colNum - 2], board[rowNum - 1][colNum - 1], board[rowNum - 1][colNum]);
                    array.push(board[rowNum][colNum - 2], board[rowNum][colNum - 1]);
                    break;
                }
                default: {
                    // bottom-right
                    array.push(board[rowNum - 2][colNum - 2], board[rowNum - 2][colNum - 1], board[rowNum - 2][colNum]);
                    array.push(board[rowNum - 1][colNum - 2], board[rowNum - 1][colNum - 1], board[rowNum - 1][colNum]);
                    array.push(board[rowNum][colNum - 2], board[rowNum][colNum - 1]);
                }
            }
        }
    }
    return array;
}

function getTakenDigits(colArray, rowArray, squareArray) {
    return new Set(colArray.concat(rowArray).concat(squareArray));
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
    let squareArray = getSquareArray(board, i, j);
    let taken = getTakenDigits(colArray, rowArray, squareArray);
    let digits = digitArray(9);
    return getAvailDigits(digits, taken);
}

function getStepsForward(board, i, j) {
    return (board[0].length * (i)) + j;
}

export function populateBoard() {
    let board = createEmptyBoard();
    let stepsBack = 0;
    let maxNum = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = 0;

            let currentSteps = getStepsForward(board, i, j);
            if (currentSteps > maxNum) {
                maxNum = currentSteps;
                stepsBack = 0;
            }

            let avail = getAvail(board, i, j);
            let randomAvail = avail[Math.floor(Math.random() * avail.length)];

            if (randomAvail) {
                board[i][j] = randomAvail;
            } else {
                stepsBack++;
                if ((j - stepsBack) < -1) {
                    i--;
                    j = 0;
                    stepsBack = 0;
                }
                else {
                    j = j - stepsBack;
                }
            }
            // console.log('board' + '\n', board, '\n');
        }
    }
    return board;
}

// console.time();

// for (let i = 0; i < 100; i++) {
//     // console.log(i);
//     // console.log(populateBoard());
//     populateBoard()
// }

// console.timeEnd();