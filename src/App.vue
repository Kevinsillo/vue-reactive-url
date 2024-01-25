<script setup lang="ts">
import { useMainStore } from "@/stores/mainStore.ts"
import { watch } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const mainStore = useMainStore()

watch(
    () => router.currentRoute.value.query,
    newQuery => {
        mainStore.query = { ...newQuery }
    },
    { deep: true },
)

watch(
    () => mainStore.query,
    newQuery => {
        router.push({ path: "/", query: { ...newQuery } })
    },
    { deep: true },
)
</script>

<template>
    <main class="px-14 py-10">
        <router-view />
    </main>
</template>
