class Vector{
    constructor(x,y){
        this.x = x,
        this.y = y
    }
    
    plus(vec){
        return new Vector(this.x + vec.x, this.y + vec.y);
    }
    
    minus(vec){
        return new Vector(this.x - vec.x, this.y - vec.y);
    }
    
    get length(){
        return Math.sqrt(`${this.x*this.x + this.y*this.y}`);
    }
}

console.log(new Vector(3,2).plus(new Vector(-1,-1)));
console.log(new Vector(1,2).minus(new Vector(2,3)));
console.log(new Vector(3,4).length);