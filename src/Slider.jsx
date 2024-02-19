import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img src="https://source.unsplash.com/random?mountain" alt="Image 1" style={{ maxWidth: '100%', maxHeight: '500px', width: 'auto', height: 'auto' }} />
          <p className="legend">Caption 1</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/random?mountain" alt="Image 2" style={{ maxWidth: '100%', maxHeight: '500px', width: 'auto', height: 'auto' }} />
          <p className="legend">Caption 2</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/random?mountain" alt="Image 3" style={{ maxWidth: '100%', maxHeight: '500px', width: 'auto', height: 'auto' }} />
          <p className="legend">Caption 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
