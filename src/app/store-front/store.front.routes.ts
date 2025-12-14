import { Routes } from '@angular/router';
import { StoreFrontLayoutComponent } from './layouts/store-front-layout.component/store-front-layout.component';
import { HomePageComponent } from './pages/home-page.component/home-page.component';
import { GenderPageComponent } from './pages/gender-page.component/gender-page.component';
import { NotFoundPageComponent } from './pages/not-found-page.component/not-found-page.component';
import { ProductPageComponent } from './pages/product-page.component/product-page.component';
import { LoginPageComponent } from '@auth/pages/login-page.component/login-page.component';
import { AuthLayoutComponent } from '@auth/layout/auth-layout.component/auth-layout.component';

export const storeFrontRutes: Routes = [
  {
    path: '',
    component: StoreFrontLayoutComponent,
    children: [
      {
        path: '',
        component: AuthLayoutComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'gender/:gender',
        component: GenderPageComponent,
      },
      {
        path: 'product/:idSlug',
        component: ProductPageComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default storeFrontRutes;
