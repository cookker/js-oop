class Person{
     constructor(name, first, second){
         console.log('constructor');
         this.name = name;
         this.first = first;
         this.second = second;
     }
     sum(){
         return this.first + this.second;
     }
}

var kim = new Person('kim', 10, 20);
console.log('kim', kim);