import { RouterModule } from '@angular/router';
import { ProductComponent } from './feature/product/product.component';

const appRoutes = [
  { path: 'products', component: ProductComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
