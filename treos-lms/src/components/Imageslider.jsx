import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import './imageslider.css';

const images = [
  { url: 'src/3.jpg' },
  { url: 'src/4.jpg' },
  { url: 'src/7.jpg' },
  // Add more images as needed
];

const ImageSlider = () => {
  return (
    <div className="image-slider">
      <SimpleImageSlider
        width={window.innerWidth}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3.0}
      />
    </div>
  );
};

export default ImageSlider;
