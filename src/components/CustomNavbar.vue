<template>
  <div data-cy="navbar">
    <nav class="navbar navbar-expand-lg" style="background-color: #16abf8; height: 105px; width: 1440px">
      <div class="container">
        <router-link to="/" class="text-decoration-none">
          <a data-cy="header-title" class="navbar-brand fw-bold" href="#" style="color: #ffff; size: 24px">TO DO LIST APP</a>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "CustomNavbar",
};
</script>

<style></style>
