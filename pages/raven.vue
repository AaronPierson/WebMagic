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
      <Social/>
    </div>
  </template>

<script>
  
</script>
  
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
  

  </style>
  