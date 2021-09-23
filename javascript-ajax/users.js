var userList = document.getElementById('user-list');
console.log(userList);
function getusers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      var li = document.createElement('li');
      li.textContent = xhr.response[i].username;
      userList.appendChild(li);
    }
  });
  xhr.send();
}

getusers();
