var $modal = document.querySelector('.modal');
var $openButton = document.querySelector('.open');
var $noButton = document.querySelector('.no');
var $background = document.querySelector('.wrapcontent');

$openButton.addEventListener('click', function () {
  $modal.style.display = 'block';
  $background.className = 'modal-overlay';
});

$noButton.addEventListener('click', function () {
  $modal.style.display = 'none';
  $background.className = 'wrapcontent';

});
