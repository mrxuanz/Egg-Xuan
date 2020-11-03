// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPublicPublic from '../../../app/controller/public/public';

declare module 'egg' {
  interface IController {
    public: {
      public: ExportPublicPublic;
    }
  }
}
