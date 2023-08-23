<template>
    <div>
      <h1>Lore</h1>
      <p>Here is where you can find the lore of the world. Books collected over the years.</p>
  
      <!-- Magnus book of lore -->
      <div class="chapter">
        <h2 class="chapter-title"><NuxtLink to="/lore/magnus">Magnus</NuxtLink></h2>
        <p class="chapter-description">
          Behold, a scholarly tapestry woven through ages, where knowledge is the guiding star and code is the ancient language. In Magnus's Chronicles, delve into the meticulous accounts of web development's history, its evolution, and the secrets buried deep within its virtual realm.
        </p>
      </div>
  
      <!-- Raelin book of lore -->
      <div class="chapter">
        <h2 class="chapter-title"><NuxtLink to="/lore/raelin">Raelin</NuxtLink></h2>
        <p class="chapter-description">
          Join Raelin on an epic journey where the web is a canvas, and developers, modern bards. In Raelin's Ballads, stories of heroics are spun from code, and the digital world comes alive with creativity. These are tales of the web's magic, where innovation and artistry meet in a harmonious symphony.
        </p>
      </div>
    </div>
  </template>
  
  <style scoped>
    .chapter {
      background: #f6ead4; /* Parchment-like background color */
      border: 2px solid #d4a35a; /* Subtle border */
      border-radius: 10px;
      padding: 20px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      text-align: left;
      color: #333; /* Adjust text color for readability */
      margin-bottom: 20px; /* Space between book descriptions */
    }
  
    .chapter-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    .chapter-description {
      font-size: 18px;
      line-height: 1.4;
      margin: 0;
    }
</style>
  