// chess board

// declare variables
let gridSize = prompt('Enter grid size'),
    black = prompt('Enter character for black'),
    white = prompt('Enter character for white');

const printBoard = function(gridSize = 8, black = '#', white = ' '){
    
        let totalSquares = gridSize*gridSize,
            prevChar = '', currentChar = '', line = '';
    
        for (let length=1;length<=totalSquares;length++){
        if (prevChar == white){
            currentChar = black;
        }
        else{
            currentChar = white;
        }

        line = line + currentChar;

        if(length%gridSize != 0){
            prevChar = currentChar;
        }
        else{
            line = line + '\n';
            if(gridSize%2 != 0){
                prevChar = currentChar;
            }
        }

    }
    return line;
};

console.log(printBoard(gridSize,black));