const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/ishir',async (ctx, next)=>{
  var name=ctx.request.body.name;
  var password =ctx.request.body.password;
  console.log(name+password);
  var result ={
    data:"登录失败",
        name: name,
        password: password,
        title: 'koa2 json'
      }
  if(name=="ishir"&&password=="123"){
    result={
      data:"登录成功",
      name: name,
      password: password,
      title: 'koa2 json'
    }

  }
  ctx.body = result
})
module.exports = router
