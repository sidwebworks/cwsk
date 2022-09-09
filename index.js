import express from 'express';
import nunjucks from 'nunjucks';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

nunjucks.configure(resolve(__dirname, 'templates'), {
  express: app,
  autoscape: true,
  noCache: false,
});

app.get('/', function (req, res) {
  console.log('A New request encoutered', req.ip);
  res.render('./pages/home.html');
});

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
