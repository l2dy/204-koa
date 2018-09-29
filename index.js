const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.status = 204;
});

app.listen(3000);
