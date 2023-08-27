<template>
    <div class="portfolio">
    <h1 class="portfolio-header">My Achievements</h1>
    <section class="intro">
        <div class="intro-text">
        <h2>My Achievements</h2>
          <p>
            Prepare to embark on an epic journey through my quests and conquests, where each entry reveals a tale of valor and mastery. 
            This enchanted portfolio unveils the most legendary feats of my career, from heroic endeavors to enigmatic job experiences. 
            Each chapter is a testament to my unyielding pursuit of greatness and a testament to my unwavering quest for knowledge.
          </p>
        <h2>
          Adventurous Projects
        </h2>
          <p>
            Peer into the mystical realms of my creative spells, where I've summoned captivating web applications and forged wondrous designs. 
            My projects, like ancient artifacts, hold the power to inspire and enchant. Discover the arcane technologies, face the enchanting challenges, and behold the magical results that my incantations have summoned.
          </p>
        <h2>
          Occupational Guilds
        </h2>
          <p>
            Delve into the guilds of my professional endeavors, where I've honed my skills and forged alliances with distinguished guild members. These occupational quests have been instrumental in sharpening my talents and expanding my horizons. Within these scrolls, you'll uncover the quests I've embarked upon, the talents I've acquired, and the contributions I've made to various realms.
            I invite you to traverse the tales of my achievements, each a shining gem in the crown of my legend. Whether you seek inspiration, an alliance, or simply a glimpse into my saga, I hope my portfolio transports you to a realm where magic and mastery converge.
            Thank you for gracing these hallowed pages, and should you wish to forge a bond or unravel more mysteries of my journey, do not hesitate to send a raven to my citadel.
          </p>
        </div>
        <div class="intro-image">
        <!-- <nuxt-img src="/images/achievements.jpg" alt="Achievements Image" /> -->
        </div>
    </section>
    <section>
        <!-- <div class="portfolio-grid"> -->
        <h3>Adventurous Projects</h3>
        <div class="">
        <!-- <transition-group name="fade" tag="ul"> -->
        <ul class="portfolio-grid">
                <li v-for="(project, index) in projects" :key="index">
                <div class="portfolio-card">
                <nuxt-img :src="project.image" alt="Project Image" sizes="sm:100vw md:50vw lg:400px" />
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                </div>
                </li>
        </ul>
        <!-- </transition-group> -->
        </div>
        <h3>Occupational Guilds</h3>
        <div class="">
        <!-- <transition-group name="fade" tag="ul" appear> -->
        <ul class="portfolio-grid">
            <li v-for="(job, index) in jobs" :key="index">
                <div class="portfolio-card">
                <nuxt-img :src="job.image" alt="Job Image" sizes="sm:30vw md:50vw lg:300px" quality="75"/>
                <h3>{{ job.title }}</h3>
                <p>{{ job.description }}</p>
                </div>
            </li>
        </ul>
        <!-- </transition-group> -->
        </div>
        <!-- </div> -->
      </section>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        projects: [
          {
            title: 'Project 1',
            description: 'Description of Project 1',
            image: '/images/project1.jpg', // Replace with the path to your image
          },
          {
            title: 'Project 2',
            description: 'Description of Project 2',
            image: '/images/project2.jpg',
          },
          {
            title: 'Project 2',
            description: 'Description of Project 2',
            image: '/images/project2.jpg',
          },
          {
            title: 'Project 2',
            description: 'Description of Project 2',
            image: '/images/project2.jpg',
          },
          // Add more projects
        ],
        jobs: [
          {
            title: 'Job 1',
            description: 'Description of Job 1',
            image: '/img/OIP.jpg',
          },
          {
            title: 'Job 2',
            description: 'Description of Job 2',
            image: '/images/job2.jpg',
          },
          // Add more jobs
        ],
      };
    },
  };
  </script>
  
  
  <!-- src="@/assets/achievements.css" -->
<style scoped >
.portfolio {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 20px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.portfolio-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.portfolio-card img {
  width: 100%;
  border-radius: 5px;
}

.portfolio-card h2 {
  font-size: 24px;
  margin: 0;
}

.portfolio-card p {
  margin-top: 10px;
}

.portfolio-card a {
  display: inline-block;
  margin-top: 10px;
  background-color: #007BFF;
  /* color: #fff; */
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.portfolio-card a:hover {
  background-color: #0056b3;
}

li {
  list-style-type: none;
}

/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
