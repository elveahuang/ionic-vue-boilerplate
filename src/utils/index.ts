import { App } from 'vue';
import router from '@/plugins/router';
import { IonicVue } from '@ionic/vue';
import { store } from '@/plugins/store';

export const setupApp = async (app: App): Promise<void> => {
    //
    app.use(IonicVue);
    app.use(store);
    app.use(router);
    //
    router.isReady().then(async (): Promise<void> => {
        app.mount('#app');
    });
};
