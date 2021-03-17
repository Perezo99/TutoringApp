import { createApp } from 'vue';

import router from './router';
import store from './store/index';
import App from './App';
import BaseCard from './component/ui/BaseCard';
import BaseButton from './component/ui/BaseButton';
import BaseBadge from './component/ui/BaseBadge';
import BaseSpinner from './component/ui/BaseSpinner';
import BaseDialog from './component/ui/BaseDialog';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
