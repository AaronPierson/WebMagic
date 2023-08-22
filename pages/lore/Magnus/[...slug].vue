<template>
    <head>
    <title>Magnus</title>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lugrasimo">
  </head>
  <main class="parchment-background">
    <ContentDoc />
  </main>
</template>

<style>
.parchment-background {
  /* Other styles for your container */
  font-family: 'Lugrasimo';
  color: #5a442c; /* Adjust text color to match parchment look */
  color: #090903; /* Adjust text color to match parchment look */


  /* Add padding for content spacing */
  padding: 20px;

  /* Optionally, apply box-shadow or border to enhance the parchment effect */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adjust shadow properties */

  /* Set the background image to your parchment texture */
  background-image: url('/parchment-image.jpg'); /* Use the correct path to your image */
  background-size: cover;
  background-attachment: fixed; /* Ensures the background remains fixed */

  /* Add a background color to ensure readability */
  background-color: rgba(255, 255, 255, 0.95); /* Slightly lighter background color */

  /* Optionally, set a background blend mode for a more textured effect */
  background-blend-mode: overlay; /* Adjust blend mode to your preference */

  /* Add a soft border to mimic the appearance of paper */
  border: 1px solid #e7c877; /* Adjust the color to match parchment */
  border-radius: 5px; /* Soften the edges */
  box-sizing: border-box; /* Include the border in the element's dimensions */
}
</style>
