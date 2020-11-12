
const utility = require("utility")//密码加密
const Controller = require('egg').Controller;
export default class UsersController extends Controller {
    public async find() {
        const { ctx } = this;
        const query = this.ctx.query
        console.log(query.page )
        const page = query.page === undefined ? 0 : query.page
        const pagesize = query.pagesize ==undefined ? 10 : query.pagesize
        const result = await ctx.service.users.users.find(page,pagesize)
        ctx.body = result
    }
    public async create(){
        const { ctx } = this;
        let data ={
            username:"",
            password:"",
        }
        const { username, password } = ctx.request.body
        data.username = await  username
        data.password = await utility.md5(password)
        const result = await ctx.service.users.users.create(data)
        if(!result.id){   
            ctx.status = 401  
        }
        ctx.body = result  
    }
  }