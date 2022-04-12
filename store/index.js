import Vuex from "vuex";
const creatStore = () => {
  return new Vuex.Store({
    state() {
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
    getters: {
      posts(state) {
        return state.posts;
      },
    },
  });
};
export default creatStore;
