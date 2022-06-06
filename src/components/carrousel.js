import React from 'react'
import Carousel from 'react-grid-carousel'
 
 const  Gallery = (props) => {
  return (
    <Carousel   loop
    mobileBreakpoint={300}
    responsiveLayout={[
        {
            breakpoint: 1024,
            cols: 3,
            rows: 2,
            gap: 10,
            loop: true,   
          },
        {
          breakpoint: 768,
          cols: 2,
          rows: 2,
          gap: 10,
          loop: true, 
        },
        {
            breakpoint: 480,
            cols: 1,
            rows: 2,
            gap: 10,
            loop: true, 
          },
      ]}
    >
         {props.dataApi && props.dataApi.map(item=>
      <Carousel.Item>
        <img width="100%" src={item.image} />
      </Carousel.Item>
       )}   
    </Carousel>
  )
}

export default Gallery
         
       
       
 