import React, { useState, useEffect } from 'react';

import { CarouselProps, CarouselButton } from './Carousel.type';

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActive((active + 1) % data.length), 5000);
    return () => {
      clearInterval(interval);
    };
  });

  // methods to handle carousel's navigation
  const goto = (index: number): void => index >= 0 && index <= data.length-1 ? setActive(index) : undefined;
  const gotoPrevious = (): void => goto(active - 1);
  const gotoNext = (): void => goto(active + 1);

  // method to handle next and prev icon visibility
  const show = (type: CarouselButton) => (type === CarouselButton.Prev && active === 0) ||
    (type === CarouselButton.Next && active === data.length-1) ? 'invisible' : 'block';

  return (
    <div className="relative flex flex-col w-full overflow-x-hidden">
      <div 
        className="transition duration-500 ease-in-out transform flex flex-row items-center"
        style={{ transform: `translateX(calc(-${active} * 100%))` }}
      >
        {data.map(({ title, description, image }, index) => (
          <div 
            key={`#carousel-item-${title}-${index}`}
            className="w-full flex flex-col-reverse lg:flex-row items-center flex-shrink-0"
          >
            <img 
              alt="title"
              className="mt-8 lg:mt-0 w-7/12 lg:w-0 lg:flex-grow" 
              src={image} 
            />
            <div className="ml-0 lg:ml-16 w-full lg:w-0 lg:flex-grow text-center lg:text-left flex-shrink-0">
              <h1>{title}</h1>
              <p className="mt-4 lg:mt-0">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-row self-center">
        {data.map((d, index) => (
          <img 
            className="mx-4 w-4 cursor-pointer"
            alt="indicator"
            src={index === active ? require('../../assets/icon/active_indicator.svg') : require('../../assets/icon/indicator.svg')}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
      <img 
        className={`cursor-pointer absolute bottom-carousel lg:bottom-0 left-4 w-4 lg:w-6 ${show(CarouselButton.Prev)}`}
        src={require('../../assets/icon/left.svg')}
        onClick={gotoPrevious}
        alt="prev"
      />
      <img
        className={`cursor-pointer absolute bottom-carousel lg:bottom-0 right-4 w-4 lg:w-6 ${show(CarouselButton.Next)}`}
        src={require('../../assets/icon/right.svg')}
        onClick={gotoNext}
        alt="next"
      />
    </div>
  );
};

export default Carousel;
