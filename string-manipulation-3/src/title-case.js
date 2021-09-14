/* exported titleCase */
function titleCase(title) {
  // Split up each individual word
  title = title.toLowerCase().split(' ');
  // Iterate through each word
  for (let i = 0; i < title.length; i++) {
    // Implement the rules
    var word = title[i];
    if (word.length > 4) {
      title[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    if (i === 0) {
      title[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    if (word.includes('-')) {
      var words = word.split('-');  // ['king', 'kong'] // king-kong
      title[i] = words[0][0].toUpperCase() + words[0].slice(1).toLowerCase() + words[1][0].toUpperCase() + words[1].slice(1).toLowerCase();
    }

    // if (word.toLowerCase().includes('javascript')) {
    //   var indexOfJavascript = word.toLowerCase().indexOf('javascript');
    //   title[i] +
    // }

    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    if (title[i].toLowerCase().includes('javascript')) {
      title[i] = 'JavaScript';
    }
    if (title[i].toLowerCase().includes('api')) {
      title[i] = 'API';
    }
  }
  return title.join(' ');
}
