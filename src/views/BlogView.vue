<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const blogId = route.params.id;

const state = reactive({
  blog: {},
  isLoading: true,
});

const deleteBlog = async () => {
  try {
    const confirm = window.confirm('Are you sure you want to delete this blog?');
    if (confirm) {
      await axios.delete(`/blogs/blogs/${blogId}`);
      toast.success('Blog Deleted Successfully');
      router.push('/blogs');
    }
  } catch (error) {
    console.error('Error deleting blog', error);
    toast.error('Blog Not Deleted');
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/blogs/blogs/${blogId}`);
    state.blog = response.data;
  } catch (error) {
    console.error('Error fetching blog', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/blogs"
        class="text-green-500 hover:text-green-600 flex items-center"
      >
        <i class="pi pi-arrow-circle-left mr-3"></i> Back to Blog Listings
      </RouterLink>
    </div>
  </section>
  <section v-if="!state.isLoading" class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">{{ state.blog.category }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.blog.title }}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i class="pi pi-map-marker text-xl text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.blog.date }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Blog Description
            </h3>

            <p class="mb-4">
              {{ state.blog.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Author</h3>

            <p class="mb-4">{{ state.blog.author }} </p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">{{ state.blog.company.name }}</h2>

            <p class="my-2">
              {{ state.blog.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ state.blog.company.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ state.blog.company.contactPhone }}
            </p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Blog</h3>
            <RouterLink
              :to="`/blogs/edit/${state.blog.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Blog</RouterLink
            >
            <button
              @click="deleteBlog"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Blog
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
</template>
