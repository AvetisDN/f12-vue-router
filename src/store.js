import { reactive } from "vue";

export const store = reactive({
  count: 0,
  incr() {
    this.count++;
  },
  decr() {
    if (this.count > 0) this.count--;
  },
});
