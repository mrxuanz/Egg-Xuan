// import { Service } from 'egg';
// export default class Test extends Service {

//   public async logins() {
//     let { app } = this;

//     // const strCountSql = `SELECT * FROM hb_admin WHERE username = '${name}'`
//     // const users = await this.app.mysql.get('user', { userName: name });
//     console.log(app.mysql)
//     const acfun =   "11"
//     return acfun
//   }
  
// }
import { Service } from 'egg';

export default class PublicService extends Service {
  public async logins(name?: string) {

    const strCountSql = `SELECT * FROM hb_admin WHERE username = '${name}'`
    // const users = await this.app.mysql.get('user', { userName: name });
    const acfun =    await this.app.mysql.query(strCountSql)
    return acfun[0]
  }
}



