import { RouterModule } from '@angular/router';
import { UpdateProductComponent } from './feature/product/components/update-product/update-product.component';
import { ProductComponent } from './feature/product/product.component';

const appRoutes = [
  { path: 'products', component: ProductComponent, pathMatch: 'full' },
  { path: 'product/:id', component: UpdateProductComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
