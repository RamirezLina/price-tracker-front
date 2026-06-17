import { Routes } from '@angular/router';
import { ScrapProductPage } from './features/product-management/pages/scrap-product-page/scrap-product-page';
import { ProductsLayout } from './features/products-price/components/products-layout/products-layout';

export const routes: Routes = [
  {
    path: '',
    component: ProductsLayout,
    title: 'Rastreador de precios'
  },
  {
    path: 'u/products-tracker',
    component: ProductsLayout,
    title: 'Rastreador de precios'
  },
  {
    path: 'u/product-management',
    component: ScrapProductPage,
    title: 'Gestión de productos'
  }

];
