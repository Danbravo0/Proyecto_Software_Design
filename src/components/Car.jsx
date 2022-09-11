import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import imagen_car_1 from "../resources/background.png";
import imagen_car_2 from "../resources/hamburguesa_resize.png";
import imagen_car_3 from "../resources/papas_resize.PNG";

export const Car = () => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (


      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Image rounded = "true" src={imagen_car_1} fluid="true" className="image" width = "100%"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
        <Image rounded = "true" src={imagen_car_2} fluid="true" className="image" width = "100%"/>
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image rounded = "true" src={imagen_car_3} fluid="true" className="image" width = "100%"/>
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  
  
}
