<template>
  <head>
    <!-- <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"> -->
     <link href="https://fonts.googleapis.com/css?family=Lugrasimo" rel="stylesheet">
  </head>

  <header class="navbar">
        <nav class="nav-container">
                  <!-- <h1>Color mode: {{ $colorMode.value }}</h1> -->
        <select v-model="$colorMode.preference"  >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <!-- <option value="sepia">Sepia</option> -->
        </select>
      <!-- Burger menu -->
      <button class="style-module--Burger--1ab74" @click="toggleSidebar">
          <!-- Add your burger icon elements here -->
          <span>---</span>
          <span>---</span>
          <span>---</span>

      </button>
        <div class="style-module--SideBarWrapper--e7152" :class="{ 'open': sidebarOpen }">>
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
              <NuxtLink to="/blog">Adventure Log</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/achievements">Scroll of Achievements</NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Sidebar backdrop -->
        <div class="style-module--SideBarBackdrop--fb470" @click="closeSidebar" :class="{ 'open': sidebarOpen }">
        </div>

        </nav>
        <div>
      </div>
  </header>
  <main class="parchment-background">
    <slot />
  </main>
  <!-- <CookieControl locale="en" /> -->

</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}
  
</script>

<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

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
  /* Use a unique and creative font */
  /* font-family: 'YourUniqueFont', cursive;  */
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
  /* font-family: 'Marck Script', cursive; */
  font-family: 'Lugrasimo', cursive;

  /* Adjust text color to match parchment look */
  color: #090903;
  /* color: #5a442c; */
  font-size: large;

  /* Add padding for content spacing */
  padding: 20px;
  margin: 2em;

  /* Set the background image to your parchment texture */
  /* Use the correct path to your image */
  background-size: cover;
  background-image: url('/parchment-image.jpg'); 
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
.dark-mode body{
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode .parchment-background{
  /* background-color: #D3D3D3; */
  /* background-color: #696969; */
  background-color: transparent;
  color: #ebf4f1;
  box-shadow: none;
  background-image: none;
  border: none;
}
/* .sepia-mode body, .parchment-background {
  background-color: #f1e7d0;
  color: #433422;
} */

.parchment-background {
  background-color: #f1e7d0;
  margin: 0% 5% 0% 5%;
  padding: 1%;
  color: #433422;
}

/* Sidebar Container */
.style-module--SideBarWrapper--e7152 {
  position: fixed;
  top: 0;
  right: -300px; /* Adjust the initial position */
  width: 300px; /* Adjust the sidebar width */
  height: 100%;
  background-color: #fff; /* Set the background color of the sidebar */
  transition: right 0.3s ease; /* Add a smooth transition for opening and closing */
}

/* Sidebar Opened State */
.style-module--SideBarWrapper--e7152.open {
  right: 0; /* When open, the sidebar should be fully visible */
}

/*
Sidebar Backdrop
.style-module--SideBarBackdrop--fb470 {
  position: fixed;
  top: 0;
  right: 0; 
  /* Position the backdrop on the right side */
  /* width: 100%;  */
  /* Cover the full width of the viewport */
  /* height: 100%;  */
  /* Cover the full height of the viewport */
  /* background-color: rgba(0, 0, 0, 0.5);  */
  /* Semi-transparent black background color */
  /* transition: opacity 0.3s ease;  */
  /* Add a smooth transition for opening and closing */
  /* opacity: 0;  */
  /* Initially set to transparent */
/* } */

/* Sidebar Opened State (Backdrop) */
.style-module--SideBarBackdrop--fb470.open {
  opacity: 1; /* When the sidebar is open, make the backdrop fully visible */
}


/* Sidebar Navigation Links */
.style-module--SideBarWrapper--e7152 .nav-menu {
  display: flex;
  flex-direction: column; /* Arrange links vertically */
}

.style-module--SideBarWrapper--e7152 .nav-menu a {
  display: block;
  padding: 10px 0; /* Adjust the padding to control the spacing between items */
  text-align: center; /* Align text to the left within each block */
}

/* Burger Menu Icon */
.style-module--Burger--1ab74 {
  cursor: pointer;
  padding: 10px;
}



</style>