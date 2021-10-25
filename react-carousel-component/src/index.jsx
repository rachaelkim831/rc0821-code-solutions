import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';
import img1 from './images/039.png';
import img2 from './images/025.png';
import img3 from './images/001.png';
import img4 from './images/004.png';
import img5 from './images/007.png';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5
];

ReactDOM.render(
  <Carousel images={images} />,
  document.getElementById('root')
);
