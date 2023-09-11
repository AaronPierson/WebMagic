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
                <NuxtLink v-if="job.link" :href="job.link">More Info</NuxtLink >
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
          description: 'Bulit a Shopify app, Enhanced clients sites, implemented APIs for workflow optimization.',
          image: '/img/OIP.jpg',
          link: '/achievements/sustalytics',
        },
        {
          title: 'Freelance Web Developer',
          description: 'Building interactive websites, maintaining, and enhancing user experiences.',
          image: '/img/clement-h-95YRwf6CNw8-unsplash.webp',
          link: '/achievements/freelance',
        },
        // Add more jobs
      ],
    };
  },
};
</script>

<style scoped src="@/assets/card.css"/>