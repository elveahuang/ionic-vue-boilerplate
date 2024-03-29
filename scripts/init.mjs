import { resolve } from 'node:path';
import { initModule } from './utils.mjs';

const root = resolve(process.cwd());
console.log(`Current workspace - ${root}`);
// 初始化前端
await initModule(resolve(root));
