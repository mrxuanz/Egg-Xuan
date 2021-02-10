
import { Service } from 'egg';

export default class UsersService extends Service {
  public async find(page, pagesize) {
    page = page <= 0 ? 1 : page;
    const strSql = `
        SELECT id,username,role_name,tel,place,name FROM user LIMIT ${(page - 1) * pagesize},${pagesize}
    `;
    const strCountSql = 'SELECT COUNT(*) AS count FROM user';
    const result = await this.app.mysql.query(strSql);
    const count = await this.app.mysql.query(strCountSql);
    return {
      counts: count[0].count,
      list: result,
    };
  }
  public async create(data) {
    const strSql = `
    SELECT username FROM user Where  username='${data.username}'
`;
    const panduan = await this.app.mysql.query(strSql);
    if (!panduan.length) {
      const sqlnow = this.app.mysql.literals.now;
      data.creat_time = sqlnow;
      const result = await this.app.mysql.insert('user', data);
      const id = result.affectedRows === 1 ? result.insertId : -1;
      return {
        id,
      };
    }
    return {
      msg: '用户已存在',
    };

  }
  public async deletuser(data) {
    const strSqls = `SELECT * FROM user Where  id='${data}'`;
    const acfun = await this.app.mysql.query(strSqls);
    console.log(acfun.length);
    if (acfun.length !== 0) {
      const strSql = `DELETE  FROM user Where  id='${data}'`;
      const panduan = await this.app.mysql.query(strSql);
      console.log(panduan);
      return { msg: '删除' };
    }
    return { msg: '没有当前数据' };


  }

}
