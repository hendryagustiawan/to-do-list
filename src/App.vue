<template>
  <div>
    <custom-navbar />
    <router-view />
  </div>
</template>

<script>
import CustomNavbar from "./components/CustomNavbar.vue";
export default {
  name: "APP",
  components: {
    CustomNavbar,
  },
};
</script>

<style></style>
