import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: 'addProduct',
    component:AddProductComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }