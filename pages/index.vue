<template>
    <div class="landing-page">
      <!-- Mystical Cover Image -->
      <!-- Include a mystical cover image that sets the magical tone -->
  
      <!-- Introduction -->
      <div class="introduction">
        <p class="deity-intro">
            <aniText text="I, the deity of web enchantment, welcome you to the Book of Web Magic, a portal to the arcane arts of web development.
          Here, the secrets of the web are woven into the very fabric of existence. Choose your path, adventurer." />
          <!-- I, the deity of web enchantment, welcome you to the <strong>Book of Web Magic</strong>, a portal to the arcane arts of web development.
          Here, the secrets of the web are woven into the very fabric of existence. Choose your path, adventurer. -->
        </p>
      </div>
  
      <!-- Chapters -->
      <div class="chapters">
        <!-- Lore Chapter -->
        <div class="chapter">
          <h2 class="chapter-title">Lore</h2>
          <p class="chapter-description">
            Behold, the ancient chronicles penned by scholars and bards, recounting the tales of webs spun and codes written.
          </p>
        </div>
  
        <!-- Adventure Log Chapter -->
        <div class="chapter">
          <h2 class="chapter-title">Adventure Log</h2>
          <p class="chapter-description">
            Embark on the journey of <em>Aaron's</em>, as the web unfolds its mysteries through a developer's eyes.
          </p>
        </div>
  
        <!-- Scroll of Achievements Chapter -->
        <div class="chapter">
          <h2 class="chapter-title">Scroll of Achievements</h2>
          <p class="chapter-description">
            Peer into the divine archive where the deities themselves inscribe the accomplishments of the chosen ones.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import aniText from '../components/aniText.vue'
  
  export default {
    components: {
      aniText
    }
    // Add any data or methods as needed
  }
  </script>
  
  <style scoped>
  /* Style your landing page components here */
  .landing-page {
    /* Set a background color or add a mystical cover image */
    /* Ensure good contrast for text readability */
    background-color: #0c0c0c;
    color: #fff;
    text-align: center;
    padding: 60px 0;
  }
  
  /* Style the deity introduction text */
  .deity-intro {
    font-size: 18px;
    line-height: 1.5;
    margin: 0 auto;
    max-width: 800px;
    padding: 0 20px;
  }
  
  .chapters {
    /* Style your chapter containers (Lore, Adventure Log, Scroll of Achievements) */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  
  .chapter {
    /* Style individual chapters */
    flex: 1;
    max-width: 300px;
    margin: 20px;
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: transform 0.2s;
  }
  
  .chapter:hover {
    /* Add a hover effect to chapters */
    transform: scale(1.05);
  }
  
  .chapter-title {
    /* Style chapter titles */
    font-size: 24px;
  }
  
  .chapter-description {
    /* Style chapter descriptions */
    font-size: 16px;
  }
  </style>
  