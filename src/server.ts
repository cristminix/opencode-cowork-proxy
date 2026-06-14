import { serve } from '@hono/node-server';
import app from './index';

const port = 3000;

console.log(`Starting local server on http://localhost:${port}...`);

serve({
  fetch: app.fetch,
  port
});
