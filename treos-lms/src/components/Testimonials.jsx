import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'Sageconsolidated transformed our social media presence!',
    image: '/images/testimonial1.jpg',
  },
  {
    name: 'John Smith',
    feedback: 'Their strategies boosted our engagement significantly.',
    image: '/images/testimonial2.jpg',
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
            <img src={testimonial.image} alt={testimonial.name} />
            <p>"{testimonial.feedback}"</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
