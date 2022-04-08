import linereader from 'readline';
import { stdin as input, stdout as output } from 'process';

const reader = linereader.createInterface({input, output});

let rows = 0, cols = 0;

/**
 * generate random set of co-ordinates on a grid
 * and stores it in an object
 * @param {int} count
 * @return {object} randomCoordinates
 */
function generateRandomCoordinates(count){
    let randomCoordinates = {};
    let curr = 0;

    while (curr < count){
        let x = Math.floor(Math.random()*rows) + '';
        let y = Math.floor(Math.random()*cols) + '';
        
        if (!randomCoordinates[x]){
            randomCoordinates[x] = [y];
            curr++;
        } else if (!randomCoordinates[x].includes(y)){
            randomCoordinates[x] = [...randomCoordinates[x], y];
            curr++;
        }
    }

    console.log(`\nrandom co-ordinates... `);
    console.log(randomCoordinates);
    return randomCoordinates;
}

/**
 * creates a grid with co-ordinates system (x,y)
 * @param {int} rows 
 * @param {int} cols
 * @param {object} randomCoordinates
 * @returns {string} grid
 */
function printGridCoordinates(rows, cols, randomCoordinates){
    let grid = '';

    for (let x=0; x<rows; x++){
        for (let y=0; y<cols; y++){
            if (randomCoordinates[x] && randomCoordinates[x].includes(y+'')){
                grid = grid + '[*]';
            } else{
                grid = grid + '| |';
            }
            
        }
        grid = grid + '\n';
    }

    console.log(`printing a ${rows} by ${cols} grid in co-rdinate system...\n`)
    return grid;
}

/**
 * generate random positions on a grid
 * and stores it in an array
 * @param {int} count 
 * @return {array} randomPositions
 */
function generateRandomPositions(count){
    let randomPositions = [];
    while (randomPositions.length < count){
        const num = Math.floor(Math.random() * (rows*cols)) + 1;
        if (!randomPositions.includes(num)){
            randomPositions.push(num);
        }
    }

    console.log(`random positions... ${randomPositions}`)
    return randomPositions;
}

/**
 * create a grid with position system
 * @param {int} rows 
 * @param {int} cols
 * @param {array} randomPositions
 * @returns {string} grid
 */
function printGridPositions(rows, cols, randomPositions){
    let grid = '';

    const totalSpots = rows * cols;
    
    for (let i=1; i<=totalSpots; i++){
        if (randomPositions.includes(i)){
            grid = grid + '[*]';
        } else {
            grid = grid + '[ ]';
        }

        if (i % cols === 0){
            grid = grid + '\n';
        }
    }

    console.log(`printing a ${rows} by ${cols} grid in position system...\n`)
    return grid;
}

function generateRandomPositionYates(total, count){
    let positions = [];

    for (let i=0; i<total; i++){
        positions.push(i);
    }

    for (let i=0; i<total/2; i++){
        let randNum = Math.floor(Math.random()*total);
        let temp = positions[i];
        positions[i] = positions[randNum];
        positions[randNum] = temp;
    }
    
    positions = positions.slice(0,count);
    console.log(`random positions (fisher-yates)...\n${positions}` )
    return positions;
}

reader.question('Enter rows and columns (x,y):', values => {
    reader.question('Enter number of spots (s):', s =>{
        const [r, c] = values.split(',');
        rows = r; cols = c;

        if (s > (rows*cols)){
            console.error(`cannot generate ${s} random spots on a grid of ${rows} x ${cols}`);
        } else {
            // using co-rdinate system for random spots
            console.log(printGridCoordinates(rows, cols, generateRandomCoordinates(s)));

            // using position number for random spots
            console.log(printGridPositions(rows, cols, generateRandomPositions(s)));
            
            // Fisher-Yates : guaranteed termination
            console.log(printGridPositions(rows, cols, generateRandomPositionYates(rows*cols, s)));
            
            reader.close();
        }        
    });
});