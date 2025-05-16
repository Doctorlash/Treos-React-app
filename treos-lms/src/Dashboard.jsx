import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { signOut } from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc, 
  deleteDoc,
  doc,
  onSnapshot,
  increment
} from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    published: false,
    likes: 0,
    shares: 0
  });
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { title, content, published } = formData;
  const postsCollection = collection(db, 'posts');

  useEffect(() => {
    const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      published: false,
      likes: 0,
      shares: 0
    });
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editId) {
        const postDoc = doc(db, 'posts', editId);
        await updateDoc(postDoc, {
          title,
          content,
          published,
          updatedAt: new Date().toISOString()
        });
      } else {
        await addDoc(postsCollection, {
          title,
          content, 
          published,
          likes: 0,
          shares: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          author: auth.currentUser.uid,
          authorName: auth.currentUser.displayName || 'Anonymous'
        });
        Navigate("./pages/Blog");
      }
      resetForm();
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (post) => {
    setFormData({
      title: post.title,
      content: post.content,
      published: post.published,
      likes: post.likes,
      shares: post.shares
    });
    setEditId(post.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const postDoc = doc(db, 'posts', id);
        await deleteDoc(postDoc);
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleLike = async (postId) => {
    try {
      const postDoc = doc(db, 'posts', postId);
      await updateDoc(postDoc, {
        likes: increment(1)
      });
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const handleShare = async (postId) => {
    try {
      const postDoc = doc(db, 'posts', postId);
      await updateDoc(postDoc, {
        shares: increment(1)
      });
    } catch (error) {
      console.error('Error updating shares:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button 
          onClick={handleLogout}
          className="logout-button"
        >
          Logout
        </button>
      </header>

      <form className="post-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleInputChange}
          required
          className="form-input"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={content}
          onChange={handleInputChange}
          required
          className="form-textarea"
        />
        <div className="form-checkbox">
          <input
            type="checkbox"
            name="published"
            checked={published}
            onChange={handleInputChange}
            id="published"
          />
          <label htmlFor="published">Publish to Blog</label>
        </div>
        <button 
          onClick={handleSubmit}
          type="submit"
          disabled={isLoading}
          className="submit-button"
        >
          {isLoading ? 'Saving...' : editId ? 'Update Post' : 'Create Post'}
        </button>
      </form>

      <div className="posts-container">
        {posts.length === 0 ? (
          <p>No posts yet</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="post-meta">
                <span>Likes: {post.likes}</span>
                <span>Shares: {post.shares}</span>
                <span>Status: {post.published ? 'Published' : 'Draft'}</span>
              </div>
              <div className="post-actions">
                <button 
                  onClick={() => handleEdit(post)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(post.id)}
                  className="delete-button"
                >
                  Delete
                </button>
                <button 
                  onClick={() => handleLike(post.id)}
                  className="like-button"
                >
                  Like
                </button>
                <button 
                  onClick={() => handleShare(post.id)}
                  className="share-button"
                >
                  Share
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
