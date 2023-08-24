<template>
    <div class="contact-page">
      <form @submit.prevent="" class="contact-form">
        <h2>Send a Raven</h2>
        <!-- Form inputs (name, email, message) -->
        <div class="form-group">
          <label >Name:</label>
          <input  type="text"   required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email"   required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea  required></textarea>
        </div>
        <button type="submit">Send Raven</button>
      </form>
  
      <!-- Social links -->
      <div class="social-links">
        <!-- <h2>Connect with Me</h2> -->
        <!-- <nuxt-picture src="/img/raven.webp" width="250" height="200" /> -->
        <div>
          <a href="#" class="social-icon">
            <Icon :name="'uil:github'" size="48"/>
          </a>
          <a href="#" class="social-icon">
            <Icon :name="'mdi:linkedin'" size="48" />
          </a>
        </div>
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
    margin: 25px;
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
    margin: 20px ;
    padding: 25px;
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


  .social-icon img:hover {
    transform: scale(1.2); /* Slightly enlarge the icons on hover */
  }
  </style>
  