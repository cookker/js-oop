var memberAray = ['something', 'todo', 'foo'];
console.log("memberAray[1]", memberAray[1]);

var memberObject = {
    manager: 'something',
    developer: 'todo',
    designer: 'foo'
}
memberObject.designer = 'bar'
console.log("memberObject.developer", memberObject.developer);
console.log("memberObject['designer']", memberObject['designer']);
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);