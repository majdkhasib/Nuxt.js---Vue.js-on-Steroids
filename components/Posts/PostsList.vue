<template>
  <ul>
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    >
    </PostPreview>
  </ul>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview,
  },
  props: ["posts"],
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  padding: 1em;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>