var $input = document.querySelector('input');
$input.addEventListener('focus', function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
});

$input.addEventListener('blur', function handleBlur(evet) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
});

$input.addEventListener('input', function handleInput(event) {
  console.log('value of', event.target.name, event.target.value);
});
// if ($spans[index].textContent === eventkey)
