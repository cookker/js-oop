function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function(){
    return 'prototype: ' + (this.first + this.second);
}


var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this: ' + (this.first + this.second);
}


var lee = new Person('lee', 10, 20);

console.log('Date', Date);
console.log('Person()', Person());
console.log('new Person()', new Person());
console.log('kim', kim.sum());
console.log('lee', lee.sum());