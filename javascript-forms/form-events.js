var $input = document.querySelectorAll('input')[0];
$input.addEventListener('focus', function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
});

$input.addEventListener('blur', function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
});

$input.addEventListener('input', function handleInput(event) {
  console.log('value of', event.target.name, event.target.value);
});

var $input2 = document.querySelectorAll('input')[1];
$input2.addEventListener('focus', function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
});

$input2.addEventListener('blur', function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
});

$input2.addEventListener('input', function handleInput(event) {
  console.log('value of', event.target.name, event.target.value);
});

var $text = document.querySelector('textarea');
$text.addEventListener('focus', function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
});

$text.addEventListener('blur', function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
});

$text.addEventListener('input', function handleInput(event) {
  console.log('value of', event.target.name, event.target.value);
});
