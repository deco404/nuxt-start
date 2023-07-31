import { defineStore } from "pinia";
export const useStore = defineStore('store ', () => {
  const navBar = ref('navBar')
  return { navBar }
})

