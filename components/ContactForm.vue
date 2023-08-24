<template>
    <div class="contact-page">
      <form @submit.prevent="submitForm" class="contact-form">
        <h2>Send a Raven</h2>
        <!-- Form inputs (name, email, message) -->
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="formData.name" type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="formData.email" type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea v-model="formData.message" id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Raven</button>
      </form>
  
      <!-- Social links -->
      <div class="social-links">
        <h2>Connect with Us</h2>
        <a href="#" class="social-icon">
          <img src="~/assets/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="#" class="social-icon">
          <img src="~/assets/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="#" class="social-icon">
          <img src="~/assets/linkedin-icon.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact-page {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
  }
  
  .contact-form {
    flex: 1;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .contact-form h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: #333; /* Dark text color */
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333; /* Dark text color */
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3; /* Slightly darker blue on hover */
  }
  
  .social-links {
    flex: 1;
    margin-left: 20px;
    text-align: center;
  }
  
  .social-links h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333; /* Dark text color */
  }
  
  .social-icon {
    display: inline-block;
    margin: 10px;
  }
  
  .social-icon img {
    width: 40px; /* Adjust the size as needed */
    height: 40px; /* Adjust the size as needed */
    border-radius: 50%;
    border: 2px solid #007bff; /* Blue border for icons */
    transition: transform 0.3s;
  }
  
  .social-icon img:hover {
    transform: scale(1.2); /* Slightly enlarge the icons on hover */
  }
  </style>
  