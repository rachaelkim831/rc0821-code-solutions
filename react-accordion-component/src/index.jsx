import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const languages = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum asperiores vel sint corrupti debitis delectus quis, reiciendis libero? Magnam officiis voluptates dolor omnis aspernatur molestiae perferendis iusto facere est repudiandae.'
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum asperiores vel sint corrupti debitis delectus quis, reiciendis libero? Magnam officiis voluptates dolor omnis aspernatur molestiae perferendis iusto facere est repudiandae.'
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum asperiores vel sint corrupti debitis delectus quis, reiciendis libero? Magnam officiis voluptates dolor omnis aspernatur molestiae perferendis iusto facere est repudiandae.'
  }
];

ReactDOM.render(
  <Accordion languages={languages} />,
  document.getElementById('root')
);
