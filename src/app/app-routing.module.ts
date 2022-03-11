import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/products', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'products', component: ProductsListComponent },
      { path: 'product_detail', component: ProductDetailComponent }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
