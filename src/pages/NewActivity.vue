<template>
  <div data-cy="dashboard-empty-state" class="container">
    <div class="top-header d-flex mt-5">
      <h1 data-cy="new-item-title" class="fw-bold">Activity</h1>
      <button data-cy="new-item-add-button" class="btn btn-primary ms-auto fw-bold rounded-pill">
        <i class="fa-solid fa-plus"></i>
        Tambah
      </button>
    </div>
    <div data-cy="img-add-new-item" class="mt-4">
      <div class="row justify-content-center">
        <img src="../img/activity.jpg" data-bs-toggle="modal" data-bs-target="#staticBackdrop" alt="newItem" style="width: 500px" />
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 fw-bold" id="staticBackdropLabel">Add Activity</h1>
          </div>
          <form @submit.prevent="handleActivity">
            <div class="modal-body">
              <label for="exampleInputEmail1" class="form-label fw-bold">NAMA Activity</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tambahkan nama activity" v-model="title" />
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
              <button type="submit" class="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useActivityStore } from "../store/activity";
import { mapActions, mapWritableState } from "pinia";
export default {
  name: "AddActivity",
  methods: {
    ...mapActions(useActivityStore, ["handleActivity"]),
  },
  computed: {
    ...mapWritableState(useActivityStore, ["title"]),
  },
};
</script>

<style></style>
