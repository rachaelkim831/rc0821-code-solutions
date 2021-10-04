var $task = document.querySelector('.task-list');

$task.addEventListener('click', function () {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  var $button = document.querySelector('button');
  if (event.target === $button) {
    var $parent = event.target.closest('.task-list-item');
    console.log('parent:', $parent);
    var $taskList = document.querySelector('.task-list-item');
    $taskList.remove();
  }
});
