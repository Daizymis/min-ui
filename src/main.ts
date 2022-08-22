import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vant/es/search/style';
import 'vant/es/popover/style';
import 'vant/es/picker/style';
import Min from '../packages';
import router from './route';
import Search from 'vant';
import MinPlugin from 'packages/index';
import { importVant } from "./plugin/index";
const app = createApp(App);
importVant(app);
app.use(router).use(MinPlugin).use(Search).use(Min).mount('#app')
