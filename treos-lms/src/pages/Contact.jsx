import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './Contact.css';
import { FaBuilding, FaPhoneAlt, FaShareAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '', // Added phone field
    subject: '' // Added subject field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new',
        archived: false
      });
      
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully!'
      });
      setFormData({ 
        name: '', 
        email: '', 
        message: '', 
        phone: '',
        subject: '' 
      });
      
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Error sending message. Please try again.'
      });
      console.error('Error sending message: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Let's Start a Conversation</h1>
          <p className="hero-subtitle">We're here to help bring your vision to life</p>
        </div>
      </section>

      <div className="contact-container">
        <section className="contact-info-section">
          <div className="contact-details">
            <div className="contact-card glass-effect">
              <div className="card-icon">
                <FaBuilding size={24} />
              </div>
              <h3>Visit Us</h3>
              <p>123 Business Street</p>
              <p>Suite 100</p>
              <p>City, State 12345</p>
            </div>

            <div className="contact-card glass-effect">
              <div className="card-icon">
                <FaPhoneAlt size={24} />
              </div>
              <h3>Get In Touch</h3>
              <p>(555) 123-4567</p>
              <p>info@sageconsolidated.com</p>
              <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
            </div>

            <div className="contact-card glass-effect">
              <div className="card-icon">
                <FaShareAlt size={24} />
              </div>
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaTwitter size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="map-container glass-effect">
            <iframe 
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1627309374797!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form glass-effect">
            <h2>Send Us a Message</h2>
            {submitStatus.message && (
              <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-error'}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="modern-input"
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="modern-input"
              />
            </div>
            <div className="form-group">
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="modern-input"
              />
            </div>
            <div className="form-group">
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="modern-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="modern-input"
                rows="5"
              ></textarea>
            </div>
            <button onClick={handleSubmit}
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;


