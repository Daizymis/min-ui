import { App, createApp, Plugin } from "vue";
import Popover from './src/index.vue'

export const PopoverPlugin:Plugin = {
    install(app: App) {
        app.component('m-popver', Popover);
    }
}
export {Popover}
