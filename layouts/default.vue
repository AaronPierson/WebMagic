<template>
  <head>
    <!-- <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"> -->
     <link href="https://fonts.googleapis.com/css?family=Lugrasimo" rel="stylesheet">
  </head>

  <header class="navbar">

    <!-- Desktop Navigation Bar -->
    <div class="desktop-navbar">
      <nav class="nav-container">
        <select v-model="$colorMode.preference"  >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <!-- <option value="sepia">Sepia</option> -->
        </select>
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
      </nav>
    </div>

    <!-- Mobile Sidebar Navigation Bar (as you already have) -->
    <div class="navbar-mobile">
        <nav class="nav-container">
        <!-- Sidebar container -->
        <div class="nav-sidebar" :class="{ 'open': sidebarOpen }">
          <!-- <button class="close-menu-button" @click="closeSidebar"> -->
            <!-- Add your close button icon elements here -->
            <!-- <span>&times;</span> -->
            <!-- <span>Close</span>
          </button> -->
          <select v-model="$colorMode.preference" class="color-mode" >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <!-- <option value="sepia">Sepia</option> -->
        </select>
          <!-- Close button for mobile -->

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
        <div class="SideBarBackdrop" @click="closeSidebar" :class="{ 'open': sidebarOpen }">
        </div>
        <!-- Burger menu -->
        <button class="menu-button" @click="toggleSidebar" :class="{ active: sidebarOpen }">
            <!-- Add your burger icon elements here -->
            <div class="ham-line"></div>
            <div class="ham-line"></div>
            <div class="ham-line"></div>
        </button>
        </nav>
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

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

a:hover {
  color: #884e19; /* Change color on hover */
}

a:visited {
  color: #57351f;
  /* Other styles for visited links */
}

a:visited:hover {
  color: #884e19;
  /* Other styles for visited links */
}

.dark-mode a:visited {
  color: #FFD700;
  /* Other styles for visited links */
}

.dark-mode a:visited:hover {
  color: #884e19;
  /* Other styles for visited links */
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


/* Add these styles to your existing styles */
.menu-button {
  /* Your existing styles for the button */
  cursor: pointer;
}

.ham-line {
  width: 30px;
  height: 3px;
  background-color: #000; /* Color of the lines */
  margin: 6px 0;
  transition: 0.4s; /* Animation duration and easing */
}

/* Styles for the animated "X" shape when the menu is open */
.menu-button.active .ham-line:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.menu-button.active .ham-line:nth-child(2) {
  opacity: 0;
}

.menu-button.active .ham-line:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
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
.nav-sidebar {
  position: fixed;
  top: 0;
  right: -300px; /* Adjust the initial position */
  width: 300px; /* Adjust the sidebar width */
  height: 100%;
  background-color: #f1e7d0; /* Set the background color of the sidebar */
  transition: right 0.3s ease; /* Add a smooth transition for opening and closing */
}

/* Sidebar Container */
.dark-mode .nav-sidebar {
  position: fixed;
  top: 0;
  right: -300px; /* Adjust the initial position */
  width: 300px; /* Adjust the sidebar width */
  height: 100%;
  background-color: #433422; /* Set the background color of the sidebar */
  transition: right 0.3s ease; /* Add a smooth transition for opening and closing */
}

/* Sidebar Opened State */
.nav-sidebar.open {
  right: 0; /* When open, the sidebar should be fully visible */
}

.close-menu-button{
  /* center the button */
  margin: 0 auto;
  display: block;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  transition: color 0.3s ease;
  line-height: 48px; /* Adjust the line-height to vertically center the text */

}

/*
Sidebar Backdrop
.SideBarBackdrop {
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
.SideBarBackdrop .open {
  opacity: 1; /* When the sidebar is open, make the backdrop fully visible */
}


/* Sidebar Navigation Links */
.nav-sidebar .nav-menu {
  /*make link center vertically*/
  display: flex;
  flex-direction: column; /* Arrange links vertically */
  align-items: center; /* Center the links vertically */
  margin: 50% 0;

}

.nav-sidebar .nav-menu a {
  display: block;
  padding: 10px 0; /* Adjust the padding to control the spacing between items */
  text-align: center; /* Align text to the left within each block */
  margin: 5px 0; /* Add margin to space the links vertically */

}

/* Burger Menu Icon */
.menu-button {
  cursor: pointer;
  padding: 10px;
}

/* For screens with a maximum width of 768px, show the sidebar */
@media screen and (max-width: 768px) {
  /* Sidebar styles */
  .navbar-mobile {
    display: block; /* Show the sidebar */
  }

  .color-mode{
    margin: 25px;
  }

  .nav-container{
    margin: 0px 50px 0 50px;
  }

  body{
    margin: 0px;
  }

  /* Hide the horizontal navigation menu */
  .desktop-navbar  {
    display: none;
  }
}


  /* Show it on screens wider than a certain width (adjust max-width as needed) */
  @media screen and (min-width: 769px) {
    .desktop-navbar {
      display: block;
    }
    .navbar-mobile {
      display: none;
    }
  }
</style>