import logger from 'debug'
import Koa from 'koa';
import bodyParser from 'koa-better-body';
import favicon from 'koa-favicon';
import mount from 'koa-mount';
import serve from 'koa-static';
import convert from 'koa-convert';

import config from './config.jsx';
import context from './context.jsx';
import render from './render.jsx';
import greetings from './routes/greetings.jsx';

const app = new Koa();

app.use(context)

// app.use(greetings.routes());

config.http.static.forEach(staticRoute => {
  app.use(mount(staticRoute.url, convert(serve(staticRoute.path))));
});

app.use(render);

app.listen(config.http.port, function() {
  logger('app:start')('Listening on port ' + config.http.port);
});
