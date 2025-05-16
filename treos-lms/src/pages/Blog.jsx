
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaSearch } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Assuming firebase config is in parent directory
import './Blog.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedPostId, setExpandedPostId] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const posts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts: ", error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div className="blog-container">Loading...</div>;
  }

  const togglePost = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <div className="blog-container">
      <header className="blog-header">
        <div className="header-content">
          <h1>Insights & Perspectives</h1>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search articles..." />
          </div>
        </div>
        <div className="header-categories">
          <button className="category-pill active">All</button>
          <button className="category-pill">Cybersecurity</button>
          <button className="category-pill">Marketing</button>
          <button className="category-pill">Strategy</button>
        </div>
      </header>

      <main className="blog-grid">
        {blogPosts.map((post, index) => (
          <article key={post.id} className="blog-card">
            <div className="card-content">
              <span className="category-tag">{post.category}</span>
              <div className="post-meta">
                <span className="author">{post.author}</span>
                <span className="date">{post.date}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              {expandedPostId === post.id ? (
                <div>
                  <p>{post.content}</p>
                  <button onClick={() => togglePost(post.id)} className="read-more">
                    Show Less
                  </button>
                </div>
              ) : (
                <div>
                  <p className="excerpt">{post.excerpt}</p>
                  <button onClick={() => togglePost(post.id)} className="read-more">
                    Read More
                  </button>
                </div>
              )}
              <div className="card-footer">
                <div className="social-share">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="share-icon" />
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="share-icon" />
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="share-icon" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </main>

      <aside className="blog-sidebar">
        <div className="trending-posts">
          <h3>Trending Articles</h3>
          {blogPosts.slice(0, 3).map((post, index) => (
            <div key={post.id} className="trending-item">
              <span className="trending-number">{index + 1}</span>
              <div className="trending-content">
                <h4>{post.title}</h4>
                <span className="trending-meta">{post.date} · {post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Blog;
