<script setup>
import { RouterLink } from 'vue-router';
import BlogListing from './BlogListing.vue';
import { reactive, defineProps, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  blogs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('/blogs/blogs');
    state.blogs = response.data;
  } catch (error) {
    console.error('Error fetching blogs', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Blogs
      </h2>
      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Shoe blog listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BlogListing
          v-for="blog in state.blogs.slice(0, limit || state.blogs.length)"
          :key="blog.id"
          :blog="blog"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/blogs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Blog Posts</RouterLink
    >
  </section>
</template>
