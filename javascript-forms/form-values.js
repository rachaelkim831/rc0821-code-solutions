var $submit = document.getElementById('contact-form');
function logSubmit(event) {
  event.preventDefault();
  var $name = $submit.elements.name.value;
  var $email = $submit.elements.name.email;
  var $text = $submit.elements.name.text;
  var $newobject = {
    name: $name,
    email: $email,
    message: $text
  };
  console.log($newobject);
  $submit.reset();
}
$submit.addEventListener('submit', logSubmit);
