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
    
    static fromInt([from,to]){
        let array = new Group();
        for (let i=from; i<=to; i++){
            if (!array.group.includes(i)){
                array.group[array.group.length] = i;
            }
        }
        return array;
    }
    
    static fromAlpha(elements){
        let array = new Group();
        for (let i=0; i<elements.length; i++){
            if (!array.group.includes(elements[i])){
                array.group[array.group.length] = elements[i];
            }
        }
        return array;
    }
}

// ITERATOR
class GroupIterator{
    constructor(groupProto){
        this.index = 0;
        this.array = groupProto.group;
    }
    
    next(){
        if(this.index == this.array.length){
            return {done: true};
        }
        
        let value = this.array[this.index];
        
        if(this.index < this.array.length){
            this.index++;
        }
        
        return {value, done: false};
    }
}

// ADD CUSTOM ITERATOR
Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this);
}

let intGroup = Group.fromInt([10,20]);
let alphaGroup = Group.fromAlpha(['a','b','c']);
/*console.log(sample.add(21)); // true
console.log(sample.delete(34)); // false
console.log(sample.delete(15)); // true*/
console.log(intGroup); // [10,11,12,13,14,16,17,18,19,20,21]
console.log(alphaGroup); // ['a','b','c']

for (let element of intGroup){
    console.log(element);
}

for (let element of alphaGroup){
    console.log(element);
}