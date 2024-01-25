import { defineStore } from "pinia"
import { reactive } from "vue"

export const useMainStore = defineStore("mainStore", () => {
    const query: any = reactive({})

    function addQuery(newQuery: any) {
        Object.entries(newQuery).forEach(([key, value]) => {
            if (!query.hasOwnProperty(key) || query[key] !== value) {
                query[key] = value
            }
        })
    }

    return {
        query,
        addQuery,
    }
})
