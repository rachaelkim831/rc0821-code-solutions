var count = 4;
var countDown = setInterval(function () {
  var header = document.querySelector('h1');
  if (count === 0) {
    header.textContent = '~Earth Beeeelooowww Us~';
    return clearInterval(countDown);
  }
  header.textContent = count;
  count--;
}, 1000);
