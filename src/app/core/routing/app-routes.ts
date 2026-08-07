const USER_PREFIX = 'u';

export const APP_ROUTE_PATHS = {
  home: '',
  productsTracker: `${USER_PREFIX}/products-tracker`,
  productManagement: `${USER_PREFIX}/product-management`,
  productsTrackerToday: `today`,
  productsTrackerHistory: `history`,
} as const;

export const APP_ROUTE_LINKS = {
  home: '/',
  productsTracker: `/${APP_ROUTE_PATHS.productsTracker}`,
  productManagement: `/${APP_ROUTE_PATHS.productManagement}`,
  productsTrackerToday: `/${APP_ROUTE_PATHS.productsTracker}/${APP_ROUTE_PATHS.productsTrackerToday}`,
  productsTrackerHistory: `/${APP_ROUTE_PATHS.productsTracker}/${APP_ROUTE_PATHS.productsTrackerHistory}`,
} as const;
