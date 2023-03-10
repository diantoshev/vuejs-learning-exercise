import { createApp } from 'vue';
import App from './App.vue';
import BaseDialog from '@/components/UI/BaseDialog.vue';
import store from './store/index.js'

const app = createApp(App);
app.use(store)
app.component('base-dialog', BaseDialog);

app.mount('#app');
