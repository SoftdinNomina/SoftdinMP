import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import PrimeVue from 'primevue/config';
import { VueRecaptchaPlugin } from 'vue-recaptcha/head';
import 'primevue/resources/themes/saga-green/theme.css'
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue)
            .use(VueRecaptchaPlugin, {
                v2SiteKey: '6Lf2L8QUAAAAALJM0R42HdSvMY6x_sS24vDBkHhV'
              })
            .mount(el);

    },
    progress: {
        color: '#4B5563',
    },
});
