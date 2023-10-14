<template>
    <div class="landing-page">
      <!-- Mystical Cover Image -->
      <!-- Include a mystical cover image that sets the magical tone -->
      <h1>
        Aaron Pierson
      </h1>
      <!-- Introduction -->
    <div class="introduction">
      <h3><aniText text="Work, study, and ideas..."></aniText></h3>
      <h4>Greetings, Travelers of the Digital Realm!</h4>
      <Social/>
      <p>
        I am Aaron Pierson, known across the enchanted lands as the Web Enchanter 🌐🧙‍♂️.
      </p>
      <p>
        🔮🌠 My journey through the mystical realms of web development has been nothing short of magical. With a trusty staff in one hand and a keyboard in the other, I have ventured through the ever-evolving landscapes of code, harnessing the arcane powers of PHP, C#, and JavaScript.
      </p>
      <!-- Add a "Read More" link to direct users to the "About Me" page -->
      <NuxtLink to="/lore/aaron">Read More</NuxtLink>
    </div>
  
      <!-- Chapters -->
      <div class="chapters">
        <!-- Lore Chapter -->
        <div class="chapter">
          <NuxtLink to="/lore"><h2 class="chapter-title">Lore</h2></NuxtLink>
          <p class="chapter-description">
            Behold, the ancient chronicles penned by scholars and bards, recounting the tales of webs spun and codes written.
          </p>
          <NuxtLink to="/lore">Read More</NuxtLink>
        </div>
  
        <!-- Adventure Log Chapter -->
        <div class="chapter">
          <h2 class="chapter-title">Adventure's Log</h2>
          <p class="chapter-description">
            Dive into my web development journey through blog posts and tales from the digital realm.
          </p>
          <!-- You can change the limit value as needed -->
          <Blog :limit="3"/>
        </div>
  
        <!-- Scroll of Achievements Chapter -->
        <div class="chapter">
          <h2 class="chapter-title">Achievements</h2>
          <p class="chapter-description">
            Explore the magical artifacts I've crafted in the web development realm, each project a testament to my skills.
          </p>
          <Jobs />

        </div>
      </div>
    </div>
</template>
  
<script>
  import aniText from '../components/aniText.vue'
  
  export default {
    components: {
    aniText,
}
    // Add any data or methods as needed
}
</script>
  
<style scoped>
    .landing-page {
    margin: 2em 10%;
  }

  body{
      /* Add a soft border to mimic the appearance of paper */
  border-radius: 5px; /* Soften the edges */
  box-sizing: border-box; /* Include the border in the element's dimensions */
  }


  /* For screens with a maximum width of 768px, show the sidebar */
  @media screen and (max-width: 768px) {

    .landing-page {
      margin: 2em 5%;
    }

    .introduction{
      font-size: .8em;
    }

    .chapter-title{
      font-size: 1em;
    }

    .chapter-description{
      font-size: .8em;
    }

    a{
      font-size: .7em;
      font-weight: bold;
    }

    p{
      font-size: .8em;
    }

    /* Adjust header text size */
    h1, h2, h3 {
      font-size: 1em;
    }
  }

</style>
  