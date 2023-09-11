<template>
    <div class="portfolio">
    <h1 class="portfolio-header">My Achievements</h1>
    <section class="intro">
        <div class="intro-text">
        <!-- <h2>My Achievements</h2> -->
          <p>
            Prepare to embark on an epic journey through my quests and conquests, where each entry reveals a tale of valor and mastery. 
            This enchanted portfolio unveils the most legendary feats of my career, from heroic endeavors to enigmatic job experiences. 
            Each chapter is a testament to my unyielding pursuit of greatness and a testament to my unwavering quest for knowledge.
          </p>
        </div>
        <div class="intro-image">
        <!-- <nuxt-img src="/images/achievements.jpg" alt="Achievements Image" /> -->
        </div>
    </section>
      <section>
        <h2>
          Adventurous Projects
        </h2>
        <p>
          Peer into the mystical realms of my creative spells, where I've summoned captivating web applications and forged wondrous designs. 
          My projects, like ancient artifacts, hold the power to inspire and enchant. Discover the arcane technologies, face the enchanting challenges, and behold the magical results that my incantations have summoned.
        </p>
      <Projects />
      <h2>
          Occupational Guilds
        </h2>
          <p>
            Delve into the guilds of my professional endeavors, where I've honed my skills and forged alliances with distinguished guild members. These occupational quests have been instrumental in sharpening my talents and expanding my horizons. Within these scrolls, you'll uncover the quests I've embarked upon, the talents I've acquired, and the contributions I've made to various realms.
            I invite you to traverse the tales of my achievements, each a shining gem in the crown of my legend. Whether you seek inspiration, an alliance, or simply a glimpse into my saga, I hope my portfolio transports you to a realm where magic and mastery converge.
            Thank you for gracing these hallowed pages, and should you wish to forge a bond or unravel more mysteries of my journey, do not hesitate to send a raven to my citadel.
        </p>
      <Jobs />
    </section>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {

      };
    },
  };
  </script>
  
<style scoped >

.portfolio {
    margin: 2em 5%;
}

a{
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

a:hover {
  color: #884e19; /* Change color on hover */
}
</style>
