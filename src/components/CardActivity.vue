<template>
  <div class="col-3">
    <div data-cy="card-activity" class="card rounded shadow mb-4" style="width: 15rem">
      <div class="card-body" @click="openDetail">
        <h5 class="card-title fw-bold" style="margin-bottom: 100px">{{ dataActivities.title }}</h5>
      </div>
      <div class="d-flex justify-content-between m-3">
        <span>{{ changeFormatDate(dataActivities.created_at) }}</span>
        <i @click.prevent="deleteActivity(dataActivities.id)" class="fa-solid fa-trash-can" style="cursor: pointer"> </i>
      </div>
    </div>
  </div>
</template>

<script>
import { useActivityStore } from "../store/activity";
import { mapActions } from "pinia";
import router from "../router/index";
export default {
  name: "CardActivity",
  methods: {
    ...mapActions(useActivityStore, ["deleteActivity"]),
    openDetail() {
      router.push({
        name: "itemList",
        params: {
          // id dari props
          id: this.dataActivities.id,
        },
      });
    },
    changeFormatDate(date) {
      const event = new Date(date);
      const options = { year: "numeric", month: "long", day: "numeric" };

      return event.toLocaleDateString("id-ID", options);
    },
  },
  props: { dataActivities: Object },
};
</script>

<style></style>
