<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :thumbnail="post.thumbnail"
        :title="post.title"
        :previewText="post.previewText"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview,
  },
  data() {
    return {
      posts: [
        {
          id: "1",
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
          title: "Hello there!",
          previewText: "This my first post!",
        },
        {
          id: "2",
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
          title: "Hello there - the second time!",
          previewText: "This my second post!",
        },
        {
          id: "3",
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
          title: "Hello there - the third time!",
          previewText: "This my third post!",
        },
      ],
    };
  },
};
</script>
<style scoped>
.intro {
  padding: 1em;
  background: rgb(136, 221, 203);
  text-align: center;
}

.featured-posts {
  display: flex;
  padding: 1em;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
