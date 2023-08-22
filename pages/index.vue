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

        <!-- Scroll of Mystical Text -->
      <div class="scroll-of-text">
        <!-- Place your long, mystical text here -->
        <!-- Make most of the text have low opacity -->
        <!-- Highlight specific sections with higher opacity -->
        <!-- You can use multiple <p> or <div> elements to structure your text -->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit gravida rutrum. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Arcu risus quis varius quam quisque. Semper eget duis at tellus. Augue lacus viverra vitae congue eu consequat ac felis. Ultrices mi tempus imperdiet nulla. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Dictum sit amet justo donec enim diam vulputate ut. Ac turpis egestas maecenas pharetra convallis posuere morbi. Quam elementum pulvinar etiam non. Ultricies leo integer malesuada nunc vel risus commodo. Vitae semper quis lectus nulla. Nunc id cursus metus aliquam eleifend. Aliquam malesuada bibendum arcu vitae elementum.
        </p>

        <p>
          Quis hendrerit dolor magna eget est lorem ipsum dolor. Arcu non odio euismod lacinia. Dictum non consectetur a erat nam at lectus. Morbi enim nunc faucibus a pellentesque. Nec feugiat nisl pretium fusce. Sed nisi lacus sed viverra tellus in hac habitasse platea. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Lectus proin nibh nisl condimentum id venenatis. Magna eget est lorem ipsum. Enim tortor at auctor urna nunc id cursus. Enim nunc faucibus a pellentesque sit amet. Non odio euismod lacinia at quis risus sed vulputate. Risus nec feugiat in fermentum posuere urna nec. Dictum sit amet justo donec enim. Ut sem viverra aliquet eget sit amet tellus. Nisi lacus sed viverra tellus in.
        </p>

        <p>
          Vel orci porta non pulvinar neque. Sed tempus urna et pharetra pharetra massa. Molestie ac feugiat sed lectus vestibulum mattis. Netus et malesuada fames ac turpis egestas. Nibh praesent tristique magna sit amet purus gravida quis. Mauris pellentesque pulvinar pellentesque habitant. Enim praesent elementum facilisis leo vel. Adipiscing diam donec adipiscing tristique risus. Interdum varius sit amet mattis vulputate enim nulla. At elementum eu facilisis sed. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Natoque penatibus et magnis dis parturient montes nascetur. Lectus mauris ultrices eros in cursus turpis massa.
        </p>

        <p>
          In vitae turpis massa sed elementum tempus egestas. Nulla pellentesque dignissim enim sit amet. Dictum sit amet justo donec enim. In tellus integer feugiat scelerisque varius morbi enim nunc. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Faucibus interdum posuere lorem ipsum dolor sit amet. Feugiat scelerisque varius morbi enim nunc faucibus a. Quis vel eros donec ac odio tempor orci. Pellentesque massa placerat duis ultricies.
        </p>

        <p>
          Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Neque aliquam vestibulum morbi blandit cursus. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Quam elementum pulvinar etiam non quam lacus. Fames ac turpis egestas maecenas pharetra convallis. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Eget lorem dolor sed viverra ipsum nunc aliquet. In hac habitasse platea dictumst quisque. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Scelerisque purus semper eget duis at tellus at. Nunc lobortis mattis aliquam faucibus. Risus sed vulputate odio ut enim blandit volutpat. Arcu vitae elementum curabitur vitae nunc sed. Dictum fusce ut placerat orci nulla pellentesque. Duis tristique sollicitudin nibh sit amet commodo.
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
  .landing-page {
  /* background-color: black;  */
  /* Black background */
  /* color: white;  */
  /* White text color */
  position: relative;
  overflow: hidden;
}

.introduction {
  position: relative;
  z-index: 1;
  padding: 20px;
  opacity: 0.7; /* Adjust the opacity to make the introduction text slightly transparent */
  /* background-color: rgba(0, 0, 0, 0.7); */
   /* Semi-transparent black background */
}

.scroll-of-text {
  position: relative;
  z-index: 1;
  padding: 20px;
}

/* Style for the fading text */
.scroll-of-text p {
  opacity: 0.2; /* Adjust the opacity to make most of the text faded */
  margin: 10px 0; /* Add spacing between paragraphs */
  line-height: 1.5; /* Adjust line height for readability */
}

/* Style for the highlighted text */
.scroll-of-text .highlighted-text {
  opacity: 1; /* Higher opacity for highlighted text */
  font-weight: bold; /* Make it bold to stand out */
  font-size: 18px; /* Adjust font size as needed */
}

  </style>
  