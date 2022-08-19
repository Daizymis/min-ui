import { App, Plugin } from "vue";
import { SearchPlugin } from "./search";
import {CardPlugin} from './card';
import { PopoverPlugin } from "./BtnPopver";
const MinPlugin:Plugin = {
    install(app: App) {
        SearchPlugin.install?.(app);
        CardPlugin.install?.(app);
        PopoverPlugin.install?.(app);
    }
}

export default MinPlugin;

export * from './search'
export * from './card'
export * from './BtnPopver'