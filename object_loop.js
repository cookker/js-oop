var memberAray = ['something', 'todo', 'foo'];

console.group('array loop')
var i = 0;
while(i < memberAray.length){
    console.log(i, memberAray[i]);
    i++;
}
console.groupEnd('array loop');

var memberObject = {
    manager: 'something',
    developer: 'todo',
    designer: 'foo'
}

console.group('object loop');
for(m in memberObject) {
    console.log(m, memberObject[m]);
}
console.groupEnd('object loop');