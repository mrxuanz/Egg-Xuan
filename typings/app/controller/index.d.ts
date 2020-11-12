// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPublicPublic from '../../../app/controller/public/public';
import ExportUsersUsers from '../../../app/controller/users/users';

declare module 'egg' {
  interface IController {
    public: {
      public: ExportPublicPublic;
    }
    users: {
      users: ExportUsersUsers;
    }
  }
}
