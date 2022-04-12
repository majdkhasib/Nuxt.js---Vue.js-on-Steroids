<template>
  <base-card class="error-page">
    <h1>Oops, something went wrong!</h1>
    <p>Back to <a href="/">Home</a>!</p>
  </base-card>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: rgb(12, 93, 168);
}

.error-page a:hover,
.error-page a:active {
  color: rgb(0, 195, 255);
}
</style>
