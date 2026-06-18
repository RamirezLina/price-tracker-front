const USER_PREFIX = 'u';
const PRODUCTS_TRACKER_PREFIX = 'products-tracker';
const PRODUCTS_MANAGEMENT_PREFIX = 'product-management';

export const APP_ROUTE_PATHS = {
  home: '',
  productsTracker: `${USER_PREFIX}/${PRODUCTS_TRACKER_PREFIX}`,
  productManagement: `${USER_PREFIX}/${PRODUCTS_MANAGEMENT_PREFIX}`,
  productsTrackerToday: `${USER_PREFIX}/${PRODUCTS_TRACKER_PREFIX}/today`,
  productsTrackerHistory: `${USER_PREFIX}/${PRODUCTS_TRACKER_PREFIX}/history`,
} as const;

export const APP_ROUTE_LINKS = {
  home: '/',
  productsTracker: `/${APP_ROUTE_PATHS.productsTracker}`,
  productManagement: `/${APP_ROUTE_PATHS.productManagement}`,
  productsTrackerToday: `/${APP_ROUTE_PATHS.productsTrackerToday}`,
  productsTrackerHistory: `/${APP_ROUTE_PATHS.productsTrackerHistory}`,
} as const;
