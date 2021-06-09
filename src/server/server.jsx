import Hapi from '@hapi/hapi';
import fs from 'fs';
import handlebars from 'handlebars';
import { setPath } from 'hookrouter';
import path from 'path';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDom from 'react-dom/server';
import App from '../App';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.js')),
  });
  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request, h) => {
      setPath(request.path);
      const pathIndexHTML = path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathIndexHTML, 'utf8'));
      const content = ReactDom.renderToString(<App />);
      return template({ content });
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
