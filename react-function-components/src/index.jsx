import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return (
    <div>
      <button>Click Me!</button>
    </div>
  );
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
