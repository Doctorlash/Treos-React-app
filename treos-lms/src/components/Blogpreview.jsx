import React from 'react';
import { Link } from 'react-router-dom';
import './Blogpreview.css';
import image1 from '../4.jpg';
import image2 from '../2.jpg'; 
import image3 from '../7.jpg';

const blogPosts = [
{
  title: 'The Importance of Cybersecurity in Social Media',
  excerpt: 'Understanding the risks and how to protect your brand online...',
  image: image1,
  id: 1,
},
{
  title: 'Top 5 Social Media Strategies for 2025',
  excerpt: 'Stay ahead with these proven tactics...',
  image: image2,
  id: 2,
},

{
  title: 'Top Media Strategies for 2025',
  excerpt: 'Stay ahead with these proven knowledge...',
  image: image3,
  id: 3,
},
// Add more blog posts as needed
];

const BlogPreview = () => (
<section className="blog-preview">
  <h2>From Our Blog</h2>
  <div className="blog-grid">
    {blogPosts.map((post) => (
      <div key={post.id} className="blog-card">
        <img src={post.image || "/placeholder.svg"} alt={post.title} />
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog`}>Read More</Link>
      </div>
    ))}
  </div>
</section>
);

export default BlogPreview;
