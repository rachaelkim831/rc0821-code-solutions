
var $circle = document.querySelector('span');
var $background = document.querySelector('*');
var $div = document.querySelector('div');
var count = 0;

$circle.addEventListener('click', function () {
  count++;
  if (count % 2 === 0) {
    $circle.className = 'Darkcircle';
    $background.className = 'background';
    $div.className = 'circleDiv';
  } else {
    $circle.className = '';
    $background.className = '';
    $div.className = '';
  }
});
