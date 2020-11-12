import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1604262259337_815';

  // add your egg config in here

 // middleware
 config.middleware = ['errorHandler', 'authorization']

    // jwt 认证
    config.authorization = {
      whiteList: ['/login'],
      tokenHeaderKey: 'Authorization',
      authorizationPre: 'Bearer'
    }
  
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  // jwt
  config.jwt = {
    jwtSecret: 'eHVhbg==',
    jwtExpire: '24h'
  };


  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']//[]中放放出的白名单，*代表所有
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'xuan'
    },
    app: true,
    agent: false,
  }


  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
