.portfolio {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 20px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.portfolio-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.portfolio-card img {
  width: 100%;
  border-radius: 5px;
}

.portfolio-card h2 {
  font-size: 24px;
  margin: 0;
}

.portfolio-card p {
  margin-top: 10px;
}

.portfolio-card a {
  display: inline-block;
  margin-top: 10px;
  background-color: #007BFF;
  /* color: #fff; */
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.portfolio-card a:hover {
  background-color: #0056b3;
}

li {
  list-style-type: none;
}

/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}