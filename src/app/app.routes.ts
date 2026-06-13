import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Product } from './product/product';
import { ProductDetail } from './product-detail/product-detail';
import { Cart } from './cart/cart';
import { User } from './user/user';
import { MyOrder } from './my-order/my-order';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:Login },
  { path: 'products', component: Product },
  { path: 'product-detail/:id', component: ProductDetail },
  { path: 'cart', component: Cart },
  { path: 'my-orders', component: MyOrder },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];
