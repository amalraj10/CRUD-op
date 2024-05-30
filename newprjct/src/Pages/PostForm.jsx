import React, { useState } from 'react';
import { uploadMessage } from '../service/allAPI';

function PostForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent default form submission behavior
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill out the form');
    } else {
      const response = await uploadMessage(formData);
      if (response.status >= 200 && response.status <= 300) {
        alert('Upload success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log(response);
        alert('Try again later');
      }
    }
  };

  const containerStyle = {
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="name">Name:</label>
          <input
            style={inputStyle}
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="email">Email:</label>
          <input
            style={inputStyle}
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="message">Message:</label>
          <textarea
            style={inputStyle}
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostForm;
