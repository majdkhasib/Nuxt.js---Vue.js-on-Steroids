<template>
  <base-card class="single-post-page">
    <h1>{{ post.title }}</h1>
    <p>{{ post.previewText }}</p>
  </base-card>
</template>
<script>
import PostPreview from "~/components/Posts/PostPreview.vue";
export default {
  components: { PostPreview },
  computed: {
    post() {
      const postId = this.$route.params.id;
      const posts = this.$store.getters.posts;
      const post = posts.find((post) => post.id == postId);

      return post;
    },
  },
};
</script>

<style scoped>
</style>

