<template>
  <!-- <head>
    <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
  </head> -->
  <header class="navbar">
        <nav class="nav-container">
          <div class="logo">
            <NuxtLink to="/"></NuxtLink>
          </div>
          <ul class="nav-menu">
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/lore">Lore</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/log">Adventure Log</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink to="/Achievements">Scroll of Achievements</NuxtLink>
            </li> -->
            <li>
              <NuxtLink to="/raven">Send a raven</NuxtLink>
            </li>
          </ul>
        </nav>
        <div>
        <!-- <h1>Color mode: {{ $colorMode.value }}</h1> -->
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <!-- <option value="sepia">Sepia</option> -->
        </select>
      </div>
      </header>
  <main>
    <slot />
  </main>
</template>

<script setup>
  const colorMode = useColorMode()
  console.log(colorMode.preference)
</script>

<style>
@media screen and (min-width: 1600px) {
  header.navbar{
    margin-right: 10%;
    margin-left: 10%;
  }
}

/* Navbar Styles */
.navbar {
  background-image: url('/parchment-navbar.jpg'); /* Use a parchment-like background image */
  background-size: cover;
  font-family: 'YourUniqueFont', cursive; /* Use a unique and creative font */
  /* color: #5a442c; */
   /* Dark text color for readability */
  margin: 1%;
  padding: 10px 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
}

.nav-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-menu li {
  margin-right: 20px;
}

.nav-menu a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #884e19; /* Change color on hover */
}

body {
  /* Other styles for your container */
  font-family: 'Marck Script', cursive;
  /* Adjust text color to match parchment look */
  color: #090903;
  /* color: #5a442c; */
  font-size: large;

  /* Add padding for content spacing */
  padding: 20px;
  margin: 2em;

  /* Set the background image to your parchment texture */
  background-image: url('/parchment-image.jpg'); /* Use the correct path to your image */
  background-size: cover;
  background-attachment: fixed; /* Ensures the background remains fixed */

  /* Add a background color to ensure readability */
  background-color: rgba(255, 255, 255, 0.95); /* Slightly lighter background color */

  /* Optionally, set a background blend mode for a more textured effect */
  background-blend-mode: multiply; /* Adjust blend mode to your preference */

  /* Add a soft border to mimic the appearance of paper */
  border-radius: 5px; /* Soften the edges */
  box-sizing: border-box; /* Include the border in the element's dimensions */
}

/* Add styles for color modes */
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body{
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode .parchment-background{
  background-color: #54544b;
}
/* .sepia-mode body, .parchment-background {
  background-color: #f1e7d0;
  color: #433422;
} */

.parchment-background {
  background-color: #f1e7d0;
  color: #433422;
}
</style>