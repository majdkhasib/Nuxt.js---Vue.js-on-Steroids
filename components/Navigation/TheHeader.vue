<template>
  <nav>
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
}
.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
a {
  text-decoration: none;
  color: white;
}
a:hover,
a:active {
  color: bisque;
}
</style>