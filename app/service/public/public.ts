
import { Service } from 'egg';

export default class PublicService extends Service {
  public async logins(name?: string) {

    const strCountSql = `SELECT * FROM hb_admin WHERE username = '${name}'`
    const acfun =    await this.app.mysql.query(strCountSql)
    return acfun[0]
  }
}



