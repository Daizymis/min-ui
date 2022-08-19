import { App, createApp, Plugin } from "vue";
import Search from './src/index.vue'

export const SearchPlugin:Plugin = {
    install(app: App) {
        app.component('m-search', Search);
    }
}
export {Search}
