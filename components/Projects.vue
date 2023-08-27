<template>
    <!-- <div class="portfolio-grid"> -->
    <!-- <h3>Adventurous Projects</h3> -->
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
       
      };
    },
  };
</script>
<style scoped src="@/assets/achievements.css">

</style>