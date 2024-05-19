import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'cn.elvea.app.capacitor',
    appName: 'App',
    webDir: 'www',
    bundledWebRuntime: false,
    server: {
        url: 'http://192.168.0.5:8081',
        cleartext: true,
    },
};

export default config;
