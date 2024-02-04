import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={true} controls={false}>
      {slides && slides.map((slide, index) => (
        <Carousel.Item className='carouselItem rounded-4' style={{ backgroundColor: slide.backgroundColor }} key={index}>
          <div className='row p-4 inheritHeight justify-content-center'>
            <div className='col-12 d-flex align-items-center justify-content-start'>
              <img src={slide.image} alt="" width={80} className='rounded-circle' />
              <p className='display-6 fs-3 mb-0 ms-3 text-dark fw-medium'>{slide.name}</p>
            </div>
            <div className='col-11 d-flex align-items-start justify-content-start'>
              <p className=' mb-0 carCardFS fw-medium' style={{ color: slide.textColor }}>{slide.message}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}

    </Carousel>
  );
}

export default ControlledCarousel;