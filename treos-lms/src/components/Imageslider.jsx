import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import image1 from '../3.jpg';
import image2 from '../4.jpg';
import image3 from '../7.jpg';

import './imageslider.css';

const images = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
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
