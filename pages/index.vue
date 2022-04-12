<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
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
.intro {
  padding: 1em;
  background: rgb(136, 221, 203);
  text-align: center;
}
</style>
