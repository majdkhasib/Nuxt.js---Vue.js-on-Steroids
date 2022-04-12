<template>
  <nav>
    <p><nuxt-link to="/">Upwork Posts</nuxt-link></p>
    <ul class="nav-list">
      <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
      <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  background: rgb(0, 105, 124);
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
.nav-item {
  margin-right: 1em;
}
a {
  text-decoration: none;
  color: white;
}
a:hover,
a:active {
  color: bisque;
}
@media screen and (max-width: 600px) {
  nav,
  .nav-list {
    flex-direction: column;
    align-items: center;
  }
  .nav-item {
    margin-top: 1em;
  }
}
</style>