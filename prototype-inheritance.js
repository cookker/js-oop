var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;

var subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'changeVal';
console.log('superObj.superVal =>', superObj.superVal);


kim = {
    name: 'kim',
    first:10, second:20,
    sum:function(){return this.first + this.second}
}

lee = {
    name: 'lee',
    first:10, second:10,
    avg:function(){
        return (this.first + this.second)/2
    }
}
lee.__proto__ = kim;
console.log('lee.sum()', lee.sum());
console.log('lee.avg()', lee.avg());