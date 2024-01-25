<script setup lang="ts">
import { useMainStore } from "@/stores/mainStore.ts"
import { watchEffect, ref } from "vue"
import { useRoute } from "vue-router"

const mainStore = useMainStore()
const route = useRoute()
const message = ref("")

watchEffect(() => {
    if (route.query) {
        message.value = ""
        if (route.query.country === "spain") {
            message.value = "You are in Spain! 💃🏼"
        }
    }
})
</script>

<template>
    <h1 class="text-xl sm:text-2xl md:text-3xl">Reactive URL query 👆🏼🔗</h1>
    <span>Write something and watch the magic✨</span>
    <div class="w-full md:min-w-[450px] md:w-fit flex flex-col gap-3 mt-5">
        <pre class="w-full flex">
            <code>{{ mainStore.query }}</code>
        </pre>
        <div class="flex flex-col gap-3">
            <input
                type="number"
                v-model="mainStore.query.latitude"
                placeholder="Latitude..."
            />
            <input
                type="number"
                v-model="mainStore.query.longitude"
                placeholder="Longitude..."
            />
            <input
                type="text"
                v-model="mainStore.query.country"
                placeholder="Country..."
            />
        </div>
        <span
            v-if="message"
            class="font-bold"
        >
            {{ message }}
        </span>
    </div>
</template>
