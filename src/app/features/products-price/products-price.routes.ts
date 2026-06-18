import { Routes } from '@angular/router'; import { APP_ROUTE_PATHS } from '../../core/routing/app-routes';
import { HistoryPricePage } from './pages/history-price-page/history-price-page';
import { TodayPricePage } from './pages/today-price-page/today-price-page';
;

export const productsRoutes: Routes = [
  {
    path: APP_ROUTE_PATHS.productsTrackerToday,
    component: TodayPricePage
  },
  {
    path: APP_ROUTE_PATHS.productsTrackerHistory,
    component: HistoryPricePage,
  }

];