import { env } from './config/env';
import { createApp } from './app';

const app = createApp();

app.listen(env.port, () => {
  console.log(` API AbasteceMais rodando em http://localhost:${env.port}`);
  console.log(`   Health check: http://localhost:${env.port}/health`);
});
