<template>
  <div data-cy="activity-item" class="col-3">
    <div class="card rounded shadow mb-4" style="width: 15rem">
      <div class="card-body" @click="openDetail">
        <h5 data-cy="activity-title" class="card-title fw-bold" style="margin-bottom: 100px">{{ dataActivities.title }}</h5>
      </div>
      <div class="d-flex justify-content-between m-3">
        <span data-cy="activity-date">{{ changeFormatDate(dataActivities.created_at) }}</span>
        <i data-cy="activity-item-delete-button" class="fa-solid fa-trash-can" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#deleteModal"> </i>
      </div>
      <!-- modal delete -->
      <div class="modal" tabindex="-1" id="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center">Apakah anda yakin menghapus activity</h5>
            </div>
            <h5 class="fw-bold text-center">"{{ dataActivities.title }}"?</h5>

            <div class="modal-footer">
              <button data-cy="modal-delete-cancel-button" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
              <button data-cy="activity-item-delete-button" type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="deleteActivity(dataActivities.id)">Hapus</button>
            </div>
          </div>
        </div>
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
