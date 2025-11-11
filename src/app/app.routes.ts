import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Requests } from './home/requests/requests';
import { Quotes } from './home/quotes/quotes';
import { Orders } from './home/orders/orders';
import { Invoices } from './home/invoices/invoices';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
    children: [
      {
        path: 'requests',
        component: Requests,
      },
      {
        path: 'quotes',
        component: Quotes,
      },
      {
        path: 'orders',
        component: Orders,
      },
      {
        path: 'invoices',
        component: Invoices,
      },
    ],
  },

  // Global fallback
  { path: '**', redirectTo: 'home' },
];
