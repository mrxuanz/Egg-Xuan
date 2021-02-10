// eslint-disable-next-line @typescript-eslint/no-var-requires
const Controller = require('egg').Controller;
import utility = require('utility');// 密码加密
import jwt = require('jsonwebtoken');// 令牌
export default class PublicController extends Controller {
  public async login() {
    let result = {};
    const config = this.config;
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const passwords = utility.md5(password);
    const user = await ctx.service.public.public.logins(username);
    if (user) {
      if (user.password !== passwords) {
        result = {
          code: 20001,
          error: '用户登录失败,用户名或密码错误',
        };
        ctx.status = 401;
      } else {
        result = {
          user: user.name,
          userName: user.username,
          role: user.role,
          roleName: user.role_name,
          token: jwt.sign({ uid: user.id }, config.jwt.jwtSecret, {
            expiresIn: config.jwt.jwtExpire,
          }),
        };
      }
    } else {
      result = {
        code: 20000,
        error: '用户不存在',
      };
      ctx.status = 401;
    }
    ctx.body = result;
  }


}
