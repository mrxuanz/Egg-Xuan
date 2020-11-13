
import { Service } from 'egg';

export default class UsersService extends Service {
  public async find(page, pagesize) {
    page = page <= 0 ? 1 : page
    let strSql = `
        SELECT id,username,role_name,tel,place,name FROM user LIMIT ${(page-1)*pagesize},${pagesize}
    `
    let strCountSql = `SELECT COUNT(*) AS count FROM user`
    const result = await this.app.mysql.query(strSql)
    const count = await this.app.mysql.query(strCountSql)
    console.log(count[0].count)
    return {
      counts: count[0].count,
      list: result
    }
  }
  public async create(data) {
    let strSql = `
    SELECT username FROM user Where  username='${data.username}'
`
    const panduan = await this.app.mysql.query(strSql)
    if (!panduan.length) {
      const sqlnow = this.app.mysql.literals.now
      data.creat_time = sqlnow
      const result = await this.app.mysql.insert('user', data)
      const id = result.affectedRows === 1 ? result.insertId : -1
      return {
        id
      }
    } else {
      return {
        msg: "用户已存在"
      }
    }
  }
  
}