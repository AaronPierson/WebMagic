<script setup>
const { data } = await useAsyncData('blog', () => queryContent('blog').only(['title', 'date', 'image', 'tags', 'excerpt']).find())
</script>

<template>
  <main>
    <div class="portfolio-grid">
      <div v-for="(blog, index) in data" :key="index" class="portfolio-card">
        <!-- <nuxt-img :src="blog.image" alt="Blog Image" sizes="sm:30vw md:50vw lg:300px" quality="75"/> -->
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.excerpt }}</p>
        <p>{{ blog.date }}</p>
        <div v-for="(tag, tagIndex) in blog.tags" :key="tagIndex" class="tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped src="@/assets/achievements.css">
</style>
