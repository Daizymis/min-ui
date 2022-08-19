import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vant/es/search/style';
import Min from '../packages';
import router from './route'
import Search from 'vant';
createApp(App).use(router).use(Search).use(Min).mount('#app')
