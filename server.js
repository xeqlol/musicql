import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';

import Schema from './schema';

const APP_PORT = 3000;

const app = new koa();
const router = new koaRouter();

router.post('/graphql', koaBody(), graphqlKoa({ schema: Schema }));
router.get('/graphql', graphqlKoa({ schema: Schema }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(APP_PORT, '0.0.0.0', () => {
    console.log(`App is running on http://localhost:${APP_PORT}`);
});