import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vant/es/search/style';
import Min from '../packages';
import router from './route'
import Search from 'vant';
import MinPlugin from 'packages/index'
console.log(MinPlugin);
createApp(App).use(router).use(MinPlugin).use(Search).use(Min).mount('#app')
