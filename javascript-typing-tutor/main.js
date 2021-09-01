var $spans = document.querySelectorAll('span');
var index = 0;
document.addEventListener('keydown', function (event) {
  // if the user is done, do not do any checking.
  if ($spans.length === index) {
    return null;
  }
  // determine what key user is pressing
  var eventkey = event.key;
  // compare what the user is typing vs the chracter that they're currently on.
  if ($spans[index].textContent === eventkey) {
    // add green color to current character.
    $spans[index].classList.add('limegreen');
    $spans[index].classList.remove('blackBorder');
    $spans[index].classList.remove('red');
    $spans[index].classList.remove('redBorder');
    // increment by one to add black border to the next index
    index++;
    if ($spans.length === index) {
      return null;
    }
    $spans[index].classList.add('blackBorder');

  } else {
    $spans[index].classList.add('red');
    $spans[index].classList.add('redBorder');
  }
});
