import React from 'react';
import './Testimonial.css';
import testimonial1Image from '../6.jpg';
import testimonial2Image from '../8.jpg';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'Sageconsolidated transformed our social media presence!',
    image: testimonial1Image,
  },
  {
    name: 'John Smith',
    feedback: 'Their strategies boosted our engagement significantly.',
    image: testimonial2Image,
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
            <p>"{testimonial.feedback}"</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
