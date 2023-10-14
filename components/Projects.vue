<template>
    <!-- <div class="portfolio-grid"> -->
    <!-- <h3>Adventurous Projects</h3> -->
    <div class="">
        <!-- <transition-group name="fade" tag="ul"> -->
        <ul class="portfolio-grid">
            <li v-for="(project, index) in projects" :key="index">
                <div class="portfolio-card">
                    <!-- <nuxt-img :src="project.image" alt="Project Image" sizes="sm:100vw md:50vw lg:400px" /> -->
                    <h3>{{ project.title }}</h3>
                    <h3>{{ project.type }}</h3>
                    <p>{{ project.description }}</p>
                    <NuxtLink v-if="project.link" target="blank" :href="project.link">More Info</NuxtLink >
                </div>
            </li>
        </ul>
        <!-- </transition-group> -->
    </div>
</template>

 <script>
  export default {
    data() {
      return {
        projects: [
        {
            title: 'Shinobi-Sprint',
            type: 'Video Game',
            description: '2D platformer game made in Godot.',
            image: '/images/project1.jpg', // Replace with the path to your image
            link: 'https://github.com/AaronPierson/Shinobi-Sprint',
          },
          {
            title: 'FitOtaku',
            type: 'Web Application',
            description: 'Fitness application for anime fans and gamers.',
            image: '/images/project1.jpg', // Replace with the path to your image
            link: 'https://github.com/AaronPierson/FitOtaku',
          },
          {
            title: 'Gaming-Hub',
            type: 'Xamarin Application',
            description: 'Moblie application for gamers to find games and stats.',
            image: '/images/project2.jpg',
            link: 'https://github.com/AaronPierson/Gaming-Hub'
          },
          {
            title: 'TCGLibrary',
            type: 'UWP Application',
            description: 'Application for managing your TCG collection.',
            image: '/images/project2.jpg',
            link: 'https://github.com/AaronPierson/TCGLibrary',
          },
          {
            title: 'Password Manger',
            type: 'Python Application',
            description: 'Application for managing your passwords.',
            image: '/images/project2.jpg',
            link: 'https://github.com/AaronPierson/PasswordManger',
          },
          {
            title: 'Name Generator',
            type: 'UWP Application',
            description: 'Random name generator for D&D and other games.',
            image: '/images/project2.jpg',
            link: 'https://github.com/AaronPierson/NameGenerator',
          },
          // Add more projects
        ],
       
      };
    },
  };
</script>
<style scoped src="@/assets/card.css"/>