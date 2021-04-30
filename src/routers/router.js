const controller = require('../controller');

const routers = (router) => {
  router.post('/champion', controller.champPost);
  router.get('/champions', controller.champsGet);
  router.delete('/champion/:name', controller.champDelete);
};

module.exports = routers;
