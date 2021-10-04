
var index = 0;

function changeImg() {
  var image = document.getElementsByClassName('images');
  var progressDot = document.getElementsByClassName('circle');
  for (let i = 0; i < image.length; i++) {
    image[i].classList.add('hidden');
    progressDot[i].classList.replace('fas', 'far');
  }
  if (index === 5) {
    index = 0;
  }
  if (index === -1) {
    index = 4;
  }
  image[index].classList.remove('hidden');
  progressDot[index].classList.replace('far', 'fas');
}

changeImg();

var timer = setInterval(function () {
  index++;
  changeImg();
}, 3000);

function restart() {
  clearInterval(timer);
  timer = setInterval(function () {
    index++;
    changeImg();
  }, 3000);
}

var rightArrow = document.querySelector('.fa-angle-right');

rightArrow.addEventListener('click', function (event) {
  index++;
  changeImg();
  restart();
});

var leftArrow = document.querySelector('.fa-angle-left');

leftArrow.addEventListener('click', function (event) {
  index--;
  changeImg();
  restart();
});

// getElementsByClassName returns an array of elements; not the element itself.
var progressDots = document.getElementsByClassName('circle');
// you cannot add eventlistener on array; it has to be added to element(index) of an array.
for (let i = 0; i < progressDots.length; i++) {
  progressDots[i].addEventListener('click', function () {
    index = i;
    changeImg();
    restart();
  });
}
