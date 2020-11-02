// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportPublicPublic from '../../../app/controller/public/public';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    public: {
      public: ExportPublicPublic;
    }
  }
}
