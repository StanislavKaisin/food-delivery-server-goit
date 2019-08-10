const mainRoute = require('./main/main');
const productsRoute = require('./products/products');
const signUpRoute = require('./users/sign-up-route');

const router = {
  '/products': productsRoute,
  '/signup': signUpRoute,
  default: mainRoute
};

module.exports = router;
