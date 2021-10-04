var string = 'Hello World';
console.log(string);

var title = document.querySelector('.title');
console.log(title);
title.addEventListener('mouseover', function changeColor() {
  title.style.color = 'blue';
  title.style.fontSize = '36px';
});
var paragraph = document.querySelector('.count');
var button = document.querySelector('.counter');
var count = 0;
button.addEventListener('dblclick', function increment() {
  count++;
  paragraph.innerHTML = count;
});

var text = document.querySelector('#text');
var text1 = document.getElementById('text');

var h1 = document.createElement('h1');
h1.textContent = 'hi';
document.querySelector('body').appendChild(h1);
for (let i = 0; i < 10; i++) {
  var h1 = document.createElement('h1');
  h1.textContent = i;
  document.querySelector('body').appendChild(h1);
}
