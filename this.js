var kim = {
    name: 'kim',
    first:10,
    second:20,
    // sum: function(f, s){
    //     return f + s;
    // }
    // sum: function(){
    //     return kim.first + kim.second;
    // }
    sum: function(){
        return this.first + this.second;
    }
}

// console.log('kim.first, kim.second', kim.sum(kim.first, kim.second));
console.log('kim.first, kim.second', kim.sum());