import { createRouter, createWebHashHistory } from "vue-router"
import { createApp } from "vue"
import { createPinia } from "pinia"
import Home from "@/views/Home.vue"
import App from "@/App.vue"
import "./style.css"

const pinia = createPinia()

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
    ],
})

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount("#app")
