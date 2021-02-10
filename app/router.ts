import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/login', controller.public.public.login);
  router.get('/users', controller.users.users.find);
  router.post('/create', controller.users.users.create);
  router.post('/deletuser', controller.users.users.deletuser);
};
