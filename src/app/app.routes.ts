import { Routes } from '@angular/router';
import { ScrapProductPage } from './features/product-management/pages/scrap-product-page/scrap-product-page';
import { ProductsLayout } from './features/products-price/components/products-layout/products-layout';
import { APP_ROUTE_PATHS } from './core/routing/app-routes';
import { productsRoutes } from './features/products-price/products-price.routes';

export const routes: Routes = [
  {
    path: APP_ROUTE_PATHS.home,
    component: ProductsLayout,
    title: 'Rastreador de precios'
  },
  {
    path: APP_ROUTE_PATHS.productsTracker,
    component: ProductsLayout,
    title: 'Rastreador de precios',
    children: [...productsRoutes]
  },
  {
    path: APP_ROUTE_PATHS.productManagement,
    component: ScrapProductPage,
    title: 'Gestión de productos'
  }

];
