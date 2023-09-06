<script setup>
  import { defineProps } from 'vue';
  // import { calculateReadTime } from '~/assets/readTime'; // Import your read time utility
  // const { data } = await useAsyncData('blog', () => queryContent('blog').only(['title', 'date', 'image', 'tags', 'excerpt', '_path']).find());
  // const { data } = await useAsyncData('blog', () => queryContent('blog').find());
  // Define props within the same script block
  const props = defineProps({
    limit: Number,
  });

  const { data } = await useAsyncData('blog', () => queryContent('blog').only(['title', 'date', 'image', 'tags', 'excerpt', '_path']).limit(props.limit).find());
  // Calculate read time for each blog post
  // const blogsWithReadTime = data.map((blog) => ({
  //   ...blog,
  //   readTime: calculateReadTime(blog.content), // Assuming content contains your blog post text
  // }));
</script>


<template>
  <main>
    <div class="portfolio-grid">
      <div v-for="(blog, index) in data" :key="index" class="portfolio-card">
        <!-- <nuxt-img :src="blog.image" alt="Blog Image" sizes="sm:30vw md:50vw lg:300px" quality="75"/> -->
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.excerpt }}</p>
        <p>{{ blog.date }}</p>
        <!-- <p>Estimated read time: {{ readTime }} minute(s)</p> -->
        <NuxtLink :to="blog._path">Read More</NuxtLink>
        <div v-for="(tag, tagIndex) in blog.tags" :key="tagIndex" class="tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped src="@/assets/achievements.css">
</style>
