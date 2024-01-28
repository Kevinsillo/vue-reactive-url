import { defineStore } from "pinia"
import { reactive } from "vue"

export const useMainStore = defineStore("mainStore", () => {
    const query: any = reactive({})

    return {
        query,
    }
})
