<template>
  <div data-cy="item-list-empty-state" class="container">
    <div class="top-header d-flex my-5">
      <h1 data-cy="item-list-title" class="fw-bold">
        <router-link to="/">
          <i class="fa-solid fa-chevron-left me-2" style="color: black"></i>
        </router-link>
        {{ activity.title }}
      </h1>
      <div class="d-flex align-items-center ms-auto">
        <select data-cy="todo-sort-button" class="form-select me-3 p-2 rounded-pill" aria-label="Default select example">
          <option selected>Sort</option>
          <option value="terbaru">Terbaru</option>
          <option data-cy="sort-selection" value="terlama">Terlama</option>
          <option data-cy="todo-sort-button" value="A-Z">A-Z</option>
          <option data-cy="todo-sort-button" value="Z-A">Z-A</option>
          <option value="Belum Selesai">Belum Selesai</option>
        </select>

        <button data-cy="todo-add-button" class="btn btn-primary fw-bold rounded-pill px-3 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i class="fa-solid fa-plus me-2"></i>
          Tambah
        </button>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <form class="d-flex align-items-center justify-content-center mt-5" @submit="handelAddItem(this.$route.params.id)">
                  <div style="width: 830px; height: 403px; background-color: #ffffff">
                    <div class="d-flex top-title my-5">
                      <h3 class="fw-bold ms-5" style="font-size: 18px">Tambah List Item</h3>
                      <span class="ms-auto me-5"><i @click.prevent="closeWindows" data-bs-dismiss="modal" class="fa-solid fa-xmark" style="cursor: pointer"></i></span>
                    </div>

                    <div class="mb-5 me-5 ms-5">
                      <label for="exampleInputEmail1" class="form-label fw-bold">NAMA LIST ITEM</label>
                      <input data-cy="modal-add-name-input" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tambahkan nama list item" v-model="title" />
                    </div>

                    <div class="mb-3 me-5 ms-5">
                      <span for="exampleInputEmail1" class="form-label fw-bold">PRORITY</span>
                      <select data-cy="modal-add-priority-dropdown" v-model="priority" class="form-select" aria-label="Default select example">
                        <option value="very-high">Very High</option>
                        <option value="high">High</option>
                        <option value="normal">Normal</option>
                        <option value="low">Low</option>
                        <option value="very-low">Very Low</option>
                      </select>
                      <div class="d-grid gap-2 d-md-flex justify-content-end mt-3">
                        <button data-cy="modal-add-save-button" type="submit" class="btn btn-primary rounded-pill">Simpan</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-cy="check-box">
      <div v-if="item.length == 0" data-cy="img-add-new-item" class="mt-4">
        <div class="row justify-content-center">
          <img src="../img/item.jpg" alt="newItem" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="width: 550px" />
        </div>
      </div>
      <ul class="list-group mb-0" v-for="dataItem in item" :key="dataItem.id">
        <li v-if="dataItem" class="list-group-item d-flex align-items-center border-0 mb-3 rounded shadow" style="background-color: #f4f6f7; height: 60px">
          <input class="form-check-input me-2" type="checkbox" />
          <span class="me-2">{{ dataItem.priority }}</span>
          <!-- <s>{{ dataItem.title }}</s> -->
          <span>{{ dataItem.title }}</span>
          <span data-cy="todo-item-delete-button" class="ms-auto" style="cursor: pointer"><i class="fa-regular fa-trash-can" data-bs-toggle="modal" data-bs-target="#deleteModal"></i></span>
        </li>
        <!-- modal delete -->
        <div class="modal" tabindex="-1" id="deleteModal" data-cy="todo-item-delete-button">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-center">Apakah anda yakin menghapus List Item</h5>
              </div>
              <h5 class="fw-bold text-center">"{{ dataItem.title }}"?</h5>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button data-cy="modal-delete-confirm-button" type="button" class="btn btn-primary" @click.prevent="deleteItem(dataItem.id, this.$route.params.id)">Hapus</button>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useItemStore } from "../store/item";
import { useActivityStore } from "../store/activity";
export default {
  name: "ItemList",
  methods: {
    ...mapActions(useActivityStore, ["getDetailActivity"]),
    ...mapActions(useItemStore, ["handelAddItem", "getItem", "deleteItem"]),
    // untuk close tab
    closeWindows() {
      router.push({ path: `/` });
    },
  },
  computed: {
    ...mapState(useActivityStore, ["activity"]),
    ...mapState(useItemStore, ["item"]),
    ...mapWritableState(useItemStore, ["title", "priority"]),
  },
  created() {
    this.getDetailActivity(this.$route.params.id);
    this.getItem(this.$route.params.id);
  },
};
</script>

<style></style>
