var $submit = document.getElementById('contact-form');
function logSubmit(event) {
  event.preventDefault();
  var $name = $submit.elements[0];
  var $email = $submit.elements[1];
  var $text = $submit.elements[2];
  var $newobject = {
    name: $name,
    email: $email,
    message: $text
  };
  console.log($newobject);
  $submit.reset();
}
$submit.addEventListener('submit', logSubmit);
