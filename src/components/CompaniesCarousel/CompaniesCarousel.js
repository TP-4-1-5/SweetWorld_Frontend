import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
import './CompaniesCarousel.css';
import { API_URL } from "../../http";

const CompaniesCarousel = ({items}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        items.map(item => {
          return <Carousel.Item key={item.id}>
            <img className="w-100"
                 src={`${API_URL}media/${item.image}`}
                 alt={item.name}/>
          </Carousel.Item>
        }

      )}
    </Carousel>
  );
};

export default CompaniesCarousel;