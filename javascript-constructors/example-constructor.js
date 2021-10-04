function ExampleConstructor() {

}

console.log('value of ExampleConstructor:', ExampleConstructor.prototype);
console.log('type of ExampleConstructor:', typeof ExampleConstructor.prototype);

var exConstructor = new ExampleConstructor();
console.log(exConstructor instanceof ExampleConstructor);
