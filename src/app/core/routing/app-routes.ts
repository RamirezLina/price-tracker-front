const USER_PREFIX = 'u';

export const APP_ROUTE_PATHS = {
  home: '',
  productsTracker: `${USER_PREFIX}/products-tracker`,
  productManagement: `${USER_PREFIX}/product-management`,
} as const;

export const APP_ROUTE_LINKS = {
  home: '/',
  productsTracker: `/${APP_ROUTE_PATHS.productsTracker}`,
  productManagement: `/${APP_ROUTE_PATHS.productManagement}`,
} as const;
