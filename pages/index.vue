<template>
    <div class="landing-page">
      <!-- Mystical Cover Image -->
      <!-- Include a mystical cover image that sets the magical tone -->
      <h1>
        Aaron Pierson
      </h1>
      <!-- Introduction -->
      <div class="introduction">
          <p>
            <!-- <strong><aniText text="Greetings, Travelers of the Digital Realm!"></aniText></strong> -->
            <strong>Greetings, Travelers of the Digital Realm!</strong>
          </p>
          <Social/>
          <p>
            🌐 I am Aaron Pierson, known across the enchanted lands as the Web Enchanter.
          </p>
          <P>
            🔮🌠 My journey through the mystical realms of web development has been nothing short of magical. 
            With a trusty staff in one hand and a keyboard in the other, I have ventured through the ever-evolving landscapes of code, 
            harnessing the arcane powers of PHP, C#, and JavaScript.
            <p>
            📖✨In my enchanted grimoire, 
            I have inscribed the secrets of crafting both the front-end and back-end realms.
            But my journey doesn't end there! 
            I've explored the lands of Android, wielding the Kotlin language to craft powerful mobile incantations. 
            I've ventured into the world of C#, conjuring desktop enchantments for your devices.
            </p>

            <p>
              🏰🔐Along this quest, I've ventured into the treacherous territories of database design, conquering MySQL, PostgreSQL. 
              I've forged alliances with DevOps and embraced the sacred rituals of CI/CD with old man jenkins for deployment.
              And as a guardian of knowledge, I've delved into the secrets of server sorcery, 
              mastering the art of deploying and securing web realms. 
              I've even built my own fortress of digital solitude to protect my creations.
            </p>

            💫 So, fellow adventurers, 
            whether you seek to embark on a new web journey or are in need of a seasoned web enchanter to breathe life into your digital dreams,
            know that I stand ready to cast the spells of web enchantment upon your quest. 
            Together, we shall forge a legacy in the digital tapestry of existence! 💫
            </P>
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
          <h2 class="chapter-title">Adventure's Log</h2>
          <p class="chapter-description">
            Dive into my web development journey through blog posts and tales from the digital realm.
          </p>
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
    margin: 0 5%;
  }

  .introduction {
    /* padding: 20px; */
    /* background-color: rgba(0, 0, 0, 0.7); */
    /* Semi-transparent black background */
  }

</style>
  