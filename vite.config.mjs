import { defineConfig, loadEnv } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'path';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { IonicResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}.`);
    return {
        base: env.VITE_APP_BASE ?? '/',
        server: {
            host: '0.0.0.0',
            port: 8081,
        },
        build: {
            outDir: env.VITE_APP_DIST ?? 'www',
        },
        plugins: [
            vue(),
            legacy(),
            tsconfigPaths(),
            AutoImport({
                imports: ['vue'],
                resolvers: [
                    IonicResolver(),
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
                dts: resolve(__dirname, 'src/types/auto-imports.d.ts'),
            }),
            Components({
                resolvers: [
                    IonicResolver(),
                    IconsResolver({
                        enabledCollections: ['ep', 'mdi', 'ant-design', 'ion'],
                    }),
                ],
                dts: resolve(__dirname, 'src/types/components.d.ts'),
            }),
            Icons({
                autoInstall: true,
            }),
        ],
    };
});
