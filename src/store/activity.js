import { defineStore } from "pinia";
import axios from "axios";

export const useActivityStore = defineStore("activity", {
  state: () => {
    return {
      activities: [],
      title: "",
      activity: {},
    };
  },
  actions: {
    getActivities() {
      axios
        .get("https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io")
        .then(({ data }) => {
          this.activities = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleActivity() {
      axios
        .post("https://todo.api.devcode.gethired.id/activity-groups", {
          title: this.title,
          email: "yoga+1@skyshi.io",
        })
        .then(() => {
          this.router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDetailActivity(id) {
      axios
        .get(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
        .then(({ data }) => {
          // console.log(data);
          this.activity = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteActivity(id) {
      axios
        .delete(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
        .then(() => {
          this.getActivities();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
