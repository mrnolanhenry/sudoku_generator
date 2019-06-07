function createEmptyBoardArray() {
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

function getSquareArray(boardArray, rowNum, colNum) {
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
                    array.push(boardArray[rowNum - 1][colNum], boardArray[rowNum - 1][colNum + 1], boardArray[rowNum - 1][colNum + 2]);
                    break;
                }
                default: {
                    // bottom-left
                    for (let i = 0; i < 2; i++) {
                        array.push(boardArray[rowNum + i - 2][colNum], boardArray[rowNum + i - 2][colNum + 1], boardArray[rowNum + i - 2][colNum + 2]);
                    }
                }
            }
            break;
        }
        case 1: {
            switch (rowMod) {
                case 0: {
                    // top-middle
                    array.push(boardArray[rowNum][colNum - 1]);
                    break;
                }
                case 1: {
                    // middle-middle
                    array.push(boardArray[rowNum - 1][colNum - 1], boardArray[rowNum - 1][colNum], boardArray[rowNum - 1][colNum + 1]);
                    array.push(boardArray[rowNum][colNum - 1]);
                    break;
                }
                default: {
                    // bottom-middle
                    array.push(boardArray[rowNum - 2][colNum - 1], boardArray[rowNum - 2][colNum], boardArray[rowNum - 2][colNum + 1]);
                    array.push(boardArray[rowNum - 1][colNum - 1], boardArray[rowNum - 1][colNum], boardArray[rowNum - 1][colNum + 1]);
                    array.push(boardArray[rowNum][colNum - 1]);
                }
            }
            break;
        }
        default: {
            switch (rowMod) {
                case 0: {
                    // top-right
                    array.push(boardArray[rowNum][colNum - 2], boardArray[rowNum][colNum - 1]);
                    break;
                }
                case 1: {
                    // middle-right
                    array.push(boardArray[rowNum - 1][colNum - 2], boardArray[rowNum - 1][colNum - 1], boardArray[rowNum - 1][colNum]);
                    array.push(boardArray[rowNum][colNum - 2], boardArray[rowNum][colNum - 1]);
                    break;
                }
                default: {
                    // bottom-right
                    array.push(boardArray[rowNum - 2][colNum - 2], boardArray[rowNum - 2][colNum - 1], boardArray[rowNum - 2][colNum]);
                    array.push(boardArray[rowNum - 1][colNum - 2], boardArray[rowNum - 1][colNum - 1], boardArray[rowNum - 1][colNum]);
                    array.push(boardArray[rowNum][colNum - 2], boardArray[rowNum][colNum - 1]);
                }
            }
        }
    }
    return array;
}

function getFullSquareArray(boardArray, rowNum, colNum) {
    let array = [];
    let rowMod = rowNum % 3;
    let colMod = colNum % 3;
    switch (colMod) {
        case 0: {
            switch (rowMod) {
                case 0: {
                    // top-left
                    array.push(boardArray[rowNum][colNum], boardArray[rowNum][colNum + 1], boardArray[rowNum][colNum + 2]);
                    array.push(boardArray[rowNum + 1][colNum], boardArray[rowNum + 1][colNum + 1], boardArray[rowNum + 1][colNum + 2]);
                    array.push(boardArray[rowNum + 2][colNum], boardArray[rowNum + 2][colNum + 1], boardArray[rowNum + 2][colNum + 2]);
                    break;
                }
                case 1: {
                    // middle-left
                    array.push(boardArray[rowNum - 1][colNum], boardArray[rowNum - 1][colNum + 1], boardArray[rowNum - 1][colNum + 2]);
                    array.push(boardArray[rowNum][colNum], boardArray[rowNum][colNum + 1], boardArray[rowNum][colNum + 2]);
                    array.push(boardArray[rowNum + 1][colNum], boardArray[rowNum + 1][colNum + 1], boardArray[rowNum + 1][colNum + 2]);
                    break;
                }
                default: {
                    // bottom-left
                    array.push(boardArray[rowNum - 2][colNum], boardArray[rowNum - 2][colNum + 1], boardArray[rowNum - 2][colNum + 2]);
                    array.push(boardArray[rowNum - 1][colNum], boardArray[rowNum - 1][colNum + 1], boardArray[rowNum - 1][colNum + 2]);
                    array.push(boardArray[rowNum][colNum], boardArray[rowNum][colNum + 1], boardArray[rowNum][colNum + 2]);
                }
            }
            break;
        }
        case 1: {
            switch (rowMod) {
                case 0: {
                    // top-middle
                    array.push(boardArray[rowNum][colNum - 1], boardArray[rowNum][colNum], boardArray[rowNum][colNum + 1]);
                    array.push(boardArray[rowNum + 1][colNum - 1], boardArray[rowNum + 1][colNum], boardArray[rowNum + 1][colNum + 1]);
                    array.push(boardArray[rowNum + 2][colNum - 1], boardArray[rowNum + 2][colNum], boardArray[rowNum + 2][colNum + 1]);
                    break;
                }
                case 1: {
                    // middle-middle
                    array.push(boardArray[rowNum - 1][colNum - 1], boardArray[rowNum - 1][colNum], boardArray[rowNum - 1][colNum + 1]);
                    array.push(boardArray[rowNum][colNum - 1], boardArray[rowNum][colNum], boardArray[rowNum][colNum + 1]);
                    array.push(boardArray[rowNum + 1][colNum - 1], boardArray[rowNum + 1][colNum], boardArray[rowNum + 1][colNum + 1]);
                    break;
                }
                default: {
                    // bottom-middle
                    array.push(boardArray[rowNum - 2][colNum - 1], boardArray[rowNum - 2][colNum], boardArray[rowNum - 2][colNum + 1]);
                    array.push(boardArray[rowNum - 1][colNum - 1], boardArray[rowNum - 1][colNum], boardArray[rowNum - 1][colNum + 1]);
                    array.push(boardArray[rowNum][colNum - 1], boardArray[rowNum][colNum], boardArray[rowNum][colNum + 1]);
                }
            }
            break;
        }
        default: {
            switch (rowMod) {
                case 0: {
                    // top-right
                    array.push(boardArray[rowNum][colNum - 2], boardArray[rowNum][colNum - 1], boardArray[rowNum][colNum]);
                    array.push(boardArray[rowNum + 1][colNum - 2], boardArray[rowNum + 1][colNum - 1], boardArray[rowNum + 1][colNum]);
                    array.push(boardArray[rowNum + 2][colNum - 2], boardArray[rowNum + 2][colNum - 1], boardArray[rowNum + 2][colNum]);
                    break;
                }
                case 1: {
                    // middle-right
                    array.push(boardArray[rowNum - 1][colNum - 2], boardArray[rowNum - 1][colNum - 1], boardArray[rowNum - 1][colNum]);
                    array.push(boardArray[rowNum][colNum - 2], boardArray[rowNum][colNum - 1], boardArray[rowNum][colNum]);
                    array.push(boardArray[rowNum + 1][colNum - 2], boardArray[rowNum + 1][colNum - 1], boardArray[rowNum + 1][colNum]);
                    break;
                }
                default: {
                    // bottom-right
                    array.push(boardArray[rowNum - 2][colNum - 2], boardArray[rowNum - 2][colNum - 1], boardArray[rowNum - 2][colNum]);
                    array.push(boardArray[rowNum - 1][colNum - 2], boardArray[rowNum - 1][colNum - 1], boardArray[rowNum - 1][colNum]);
                    array.push(boardArray[rowNum][colNum - 2], boardArray[rowNum][colNum - 1], boardArray[rowNum][colNum]);
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

function getAvail(boardArray, i, j) {
    let colArray = getColArray(boardArray, i, j);
    let rowArray = getRowArray(boardArray, i, j);
    let squareArray = getSquareArray(boardArray, i, j);
    let taken = getTakenDigits(colArray, rowArray, squareArray);
    let digits = digitArray(9);
    return getAvailDigits(digits, taken);
}

function getStepsForward(boardArray, i, j) {
    return (boardArray[0].length * (i)) + j;
}

function populateBoardArray() {
    let boardArray = createEmptyBoardArray();
    let stepsBack = 0;
    let maxNum = 0;
    for (let i = 0; i < boardArray.length; i++) {
        for (let j = 0; j < boardArray[i].length; j++) {
            boardArray[i][j] = 0;

            let currentSteps = getStepsForward(boardArray, i, j);
            if (currentSteps > maxNum) {
                maxNum = currentSteps;
                stepsBack = 0;
            }

            let avail = getAvail(boardArray, i, j);
            let randomAvail = avail[Math.floor(Math.random() * avail.length)];

            if (randomAvail) {
                boardArray[i][j] = randomAvail;
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
        }
    }
    return boardArray;
}

function getRevealNum(difficulty) {
    switch (difficulty) {
        case "beginner":
            return 45;
        case "easy":
            return 36;
        case "medium":
            return 33;
        case "hard":
            return 30;
        case "expert":
            return 26;
        default:
            return 33;
    }
}

function createBoard(difficulty) {
    let boardArray = populateBoardArray();
    let board = [];
    let revealNum = getRevealNum(difficulty);
    boardArray.forEach(row => {
        let rowObjArray = [];
        row.forEach(element => {
            let obj = {
                number: element,
                shown: Math.floor(Math.random() * boardArray.length * boardArray.length) <= revealNum
            }
            rowObjArray.push(obj);
        })
        board.push(rowObjArray);
    })
    return board;
}

function getShown(board, boolean = true) {
    let shown = [];
    for (let i = 0; i < board.length; i++) {
        let shownRow = [];
        board[i].forEach(element => {
            if (element.shown === boolean) {
                shownRow.push(element.number);
            } else {
                shownRow.push(0);
            }
        })
        shown.push(shownRow)
    }
    return shown;
}

function isCorrect(boardArray) {
    var boolean = true;
    iLoop:
    for (let i = 0; i < boardArray.length; i++) {
        for (let j = 0; j < boardArray[i].length; j++) {
            let colArray = getColArray(boardArray, 8, j);
            let rowArray = getRowArray(boardArray, i, 8);
            let squareArray = getFullSquareArray(boardArray, i, j);
            let taken = getTakenDigits(colArray, rowArray, squareArray);

            if (taken.size !== 9) {
                boolean = false;
                break iLoop;
            }
        }
    }
    return boolean;
}