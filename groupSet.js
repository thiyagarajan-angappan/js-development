class Group{
    constructor(){
        this.group = [];
    }
    
    add(value){
        if(!this.group.includes(value)){
            this.group[this.group.length] = value;
            return true;
        }
        return false;
    }
    
    delete(value){
        let index = this.group.indexOf(value);
        if(index > 0){
            this.group = this.group.filter(x => x!= value);
            return true;
        }
        return false;
    }
    
    static from([from,to]){
        let array = new Group();
        for (let i=from; i<=to; i++){
            if (!array.group.includes(i)){
                array.group[array.group.length] = i;
            }
        }
        return array;
    }
}

let sample = Group.from([10,20]);
console.log(sample.add(21)); // true
console.log(sample.delete(34)); // false
console.log(sample.delete(15)); // true
console.log(sample); // [10,11,12,13,14,16,17,18,19,20,21]