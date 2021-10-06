let count = 3;

const counter = setInterval(() => {
  console.log(count--);
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(counter);
  }
}, 1000);
