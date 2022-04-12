<template>
  <div>
    <section class="featured-posts"><PostsList :posts="posts" /></section>
  </div>
</template>

<script>
import PostsList from "@/components/Posts/PostsList";
export default {
  components: {
    PostsList,
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
};
</script>
<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

