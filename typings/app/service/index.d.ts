// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportPublicPublic from '../../../app/service/public/public';
import ExportUsersUsers from '../../../app/service/users/users';

declare module 'egg' {
  interface IService {
    public: {
      public: AutoInstanceType<typeof ExportPublicPublic>;
    }
    users: {
      users: AutoInstanceType<typeof ExportUsersUsers>;
    }
  }
}
