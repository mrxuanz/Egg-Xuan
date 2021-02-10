
import utility = require('utility');// 密码加密
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Controller = require('egg').Controller;
export default class UsersController extends Controller {
  public async find() {
    const { ctx } = this;
    const query = this.ctx.query;
    const page = query.page === undefined ? 0 : query.page;
    const pagesize = query.pagesize === undefined ? 10 : query.pagesize;
    const result = await ctx.service.users.users.find(page, pagesize);
    ctx.body = result;
  }
  public async create() {
    const { ctx } = this;
    const data = {
      username: '',
      password: '',
    };
    const { username, password } = ctx.request.body;
    data.username = await username;
    data.password = await utility.md5(password);
    const result = await ctx.service.users.users.create(data);
    if (!result.id) {
      ctx.status = 401;
    }
    ctx.body = result;
  }
  public async deletuser() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const result = await ctx.service.users.users.deletuser(id);
    ctx.body = result;
  }
}
