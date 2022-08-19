import { App, createApp, Plugin } from "vue";
import Card from './src/index.vue'

export const CardPlugin:Plugin = {
    install(app: App) {
        app.component('m-popver', Card);
    }
}
export {Card}
