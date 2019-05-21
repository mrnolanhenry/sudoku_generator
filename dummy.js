
function popBoard() {
    let length = 9;

    let board = [];

    for (let i = 0; i < length; i++) {
        let array2 = [];
        for (let j = 0; j < length; j++) {
            let colArray = getColArray(board, j);
            do {
                var randomNum = Math.ceil(Math.random() * length);
            } while (colArray.includes(randomNum) || array2.includes(randomNum));
            array2.push(randomNum);
        }
        board.push(array2);
    }
    return board;
}

// console.log(popBoard());


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

// console.log(createEmptyBoard());

let genericBoard = [
    [1, 8, 7, 3, 6, 9, 5, 4, 2],
    [7, 8, 4, 1, 5, 2, 3, 9, 6],
    [1, 0, 7, 3, 2, 5, 4, 8, 6],
    [6, 4, 9, 3, 2, 1, 8, 7, 5],
    [6, 2, 7, 9, 3, 4, 5, 1, 8],
    [7, 6, 8, 4, 1, 3, 5, 2, 9],
    [6, 5, 4, 9, 8, 1, 7, 2, 3],
    [4, 6, 3, 8, 2, 1, 9, 5, 7],
    [3, 8, 1, 4, 7, 9, 6, 5, 2]
];

// let genericColumn = getColArray(genericBoard, 1)
// let genericRow = genericBoard[2];

// console.log(genericColumn);
// console.log(genericRow);

// for (let i= 1; i < 10; i++) {
//     let bool = isValid(i,genericColumn,genericRow);
//     // console.log('i',i,genericColumn.includes(i));
//     console.log('i',i,bool)
// }

// for (let i= 0; i < 9; i++) {
//     for (let j= 0; j < 9; j++) {
//     let genericQuadrant = getQuadrantArray(genericBoard, j, i);
//     console.log(genericQuadrant);
//     }
// }

// console.log('')
// console.log(genericBoard);

function getColArray(array, colNum) {
    let colArray = [];
    for (let i = 0; i < array.length; i++) {
        colArray.push(array[i][colNum]);
    }
    return colArray;
}

function isValid(number, rowArray, colArray) {
    if (rowArray.includes(number) || colArray.includes(number)) {
        return false;
    }
    else {
        return true;
    }
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

function populateBoard() {
    let board = createEmptyBoard();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let colArray = getColArray(board, j);
            let quadrantArray = getQuadrantArray(board,i,j);
            // console.log('i', i, 'j', j);
            // console.log(colArray)
            let rowArray = board[i];
            do {
                var randomNum = Math.ceil(Math.random() * board.length);
                // console.log(i, 'i', i, 'j', j);
                // console.log('rowArray includes ' + randomNum, rowArray.includes(randomNum));
                // console.log('rowArray',rowArray);
                // console.log('colArray includes ' + randomNum, colArray.includes(randomNum));
                // console.log('colArray', colArray);
                // console.log('');
                // console.log(!isValid(randomNum, rowArray, colArray));

            } while (colArray.includes(randomNum) || rowArray.includes(randomNum) || quadrantArray.includes(randomNum));
            // console.log('colArray', colArray);
            // console.log('rowArray', rowArray);
            // console.log('randomNum', randomNum);
            board[i][j] = randomNum;
            console.log('board' + '\n', board);
            console.log('')
        }
    }
    return board;
}

console.log(populateBoard());