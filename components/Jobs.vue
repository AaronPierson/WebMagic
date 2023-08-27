<template>
    <div>
        <!-- <h3>Occupational Guilds</h3> -->
        <div class="">
        <!-- <transition-group name="fade" tag="ul" appear> -->
        <ul class="portfolio-grid">
            <li v-for="(job, index) in jobs" :key="index">
                <div class="portfolio-card">
                <nuxt-img :src="job.image" alt="Job Image" sizes="sm:30vw md:50vw lg:300px" quality="75"/>
                <h3>{{ job.title }}</h3>
                <p>{{ job.description }}</p>
                <a v-if="job.link" :href="job.link" target="_blank" rel="noopener">Visit Site</a>
                </div>
            </li>
        </ul>
        <!-- </transition-group> -->
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          title: 'Sustalytics',
          description: 'Description of Job 1',
          image: '/img/OIP.jpg',
          link: 'https://sustalytics.com/',
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

<style scoped src="@/assets/achievements.css">

</style>