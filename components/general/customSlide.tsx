import React from 'react';

const CustomSlide = ({ children }) => (
  <div className="testimonial-slide">
    <div className="testimonial_box">
      <div className="testimonial_box-inner">
        {children}
      </div>
    </div>
  </div>
);

export default CustomSlide;