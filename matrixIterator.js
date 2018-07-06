// MATRIX
class Matrix{
    constructor(width, height, value = (x,y) => undefined){
        this.width = width;
        this.height = height;
        this.content = [];
        
        for (let y=0; y<height; y++){
            for (let x=0; x<width; x++){
                this.content[y * this.width +x] = value(y,x);
            }
        }
    }
    
    get(x,y){
        return this.content[y * this.width +x]
    }
    
    set(x,y){
        this.content[y * this.width + x] = value;
    }
}

// MATRIX ITERATOR
class MatrixIterator{
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    
    next(){
        if (this.y == this.matrix.height){
            return {done: true};
        }
        
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x,this.y)
        };
        
        this.x++
        
        if(this.x == this.matrix.width){
            this.x = 0;
            this.y++;
        }
        
        return {value, done: false};
    }
}

// define the symbol iterator to return the matrix iterator while using for loop
Matrix.prototype[Symbol.iterator] = function(){
    return new MatrixIterator(this);
}

// create a matrix instance and iterate and print to the console
let maxit = new Matrix(3, 3, (x,y) => `${x+y}`);

for (let element of maxit){
    console.log(`value at ${element.x},${element.y} is ${element.value}`);
}

console.log('--------------------------------------------------------------');

// SYMMETRIC MATRIX
// | 0  1   2 |
// | 1  0   3 |
// | 2  3   0 |
class SymmetricMatrix extends Matrix{
    constructor(size,value = (x,y) => undefined){
        super(size,size,(x,y) => {
            if (x<y){
                return value(y,x);
            }
            else if (x == y){
                return value(0,0);
            }
            else{
                return value(x,y);
            }
        })
    }
    
    set(x,y,value){
        if (x<y){
            super.set(y,x,value);
        }
        else{
            super.set(x,y,value);
        }
    }
}

let symmat = new SymmetricMatrix(3, (x,y) => `${x+y}`);
for (let element of symmat){
    console.log(`value at ${element.x},${element.y} is ${element.value}`);
}