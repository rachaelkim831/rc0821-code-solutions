/* exported titleCase */
 string-manipulation-3

function titleCase(title) {

  var specialCheck = {
    javascript: 'JavaScript',
    api: 'API',
    web: 'Web'
  };
  var splitArr = title.split(' ');
  if (splitArr[0].includes(':')) {
    splitArr[0] = splitArr[0].substr(0, splitArr[0].length - 1);
    if (splitArr[0].toLowerCase() in specialCheck) {
      splitArr[0] = specialCheck[splitArr[0].toLowerCase()] + ':';
    } else {
      splitArr[0] = splitArr[0][0].toUpperCase() + splitArr[0].slice(1) + ':';
    }
  }
  if (splitArr[0].toLowerCase() in specialCheck) {
    splitArr[0] = specialCheck[splitArr[0].toLowerCase()];
  }

  splitArr[0] = splitArr[0][0].toUpperCase() + splitArr[0].slice(1);
  for (let i = 1; i < splitArr.length; i++) {
    if (splitArr[i].length > 3) {
      splitArr[i] = splitArr[i][0].toUpperCase() + splitArr[i].slice(1);
    }
    if (splitArr[i].includes(':')) {
      splitArr[i] = splitArr[i].substr(0, splitArr[i].length - 1);
      if (splitArr[i].toLowerCase() in specialCheck) {
        splitArr[i] = specialCheck[splitArr[i].toLowerCase()] + ':';
      } else {
        splitArr[i] = splitArr[i][0].toUpperCase() + splitArr[i].slice(1) + ':';
      }
    }
    if (splitArr[i].toLowerCase() in specialCheck) {
      splitArr[i] = specialCheck[splitArr[i].toLowerCase()];
    }
  }
  var tempStr = splitArr.join(' ');
  if (tempStr.includes(':')) {
    var tempStrArr = tempStr.split(': ');
    tempStrArr[1] = tempStrArr[1][0].toUpperCase() + tempStrArr[1].slice(1);
    tempStr = tempStrArr.join(': ');
  }
  if (tempStr.includes('-')) {
    var tempStrArr2 = tempStr.split('-');
    tempStrArr2[1] = tempStrArr2[1][0].toUpperCase() + tempStrArr2[1].slice(1);
    tempStr = tempStrArr2.join('-');
  }
  return tempStr;
=======
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
