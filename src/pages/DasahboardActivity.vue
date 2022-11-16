<template>
  <div data-cy="dashboard-activity" class="container mt-5">
    <div class="top-header d-flex">
      <h1 data-cy="header-title" class="fw-bold">Activity</h1>
      <router-link to="/add-activity" class="ms-auto">
        <button data-cy="activity-add-button" class="btn btn-primary fw-bold rounded-pill">
          <i class="fa-solid fa-plus"></i>
          Tambah
        </button>
      </router-link>
    </div>
    <div class="my-4" data-cy="activity-item">
      <div class="row">
        <card-activity data-cy="activity-item" v-for="dataActivities in activities" :key="dataActivities.id" :dataActivities="dataActivities" />
      </div>
    </div>
  </div>
</template>

<script>
import { useActivityStore } from "../store/activity.js";
import { mapState, mapActions } from "pinia";
import CardActivity from "../components/CardActivity.vue";

export default {
  name: "DashboardActivity",
  computed: {
    ...mapState(useActivityStore, ["activities"]),
  },
  methods: {
    ...mapActions(useActivityStore, ["getActivities"]),
  },
  components: {
    CardActivity,
  },
  created() {
    this.getActivities();
  },
};
</script>

<style></style>
