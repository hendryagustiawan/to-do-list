import { defineStore } from "pinia";
import axios from "axios";
import { useRoute } from "vue-router";

export const useItemStore = defineStore("item", {
  state: () => {
    return {
      title: "",
      priority: "",
      item: [],
    };
  },
  actions: {
    handelAddItem(id) {
      axios
        .post("https://todo.api.devcode.gethired.id/todo-items", {
          title: this.title,
          priority: this.priority,
          activity_group_id: id,
        })
        .then(() => {
          this.router.push("/item-list/" + id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getItem(id) {
      axios
        .get("https://todo.api.devcode.gethired.id/todo-items?activity_group_id=" + id)
        .then(({ data }) => {
          this.item = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteItem(id, idParams) {
      axios
        .delete("https://todo.api.devcode.gethired.id/todo-items/" + id)
        .then(() => {
          this.getItem(idParams);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
