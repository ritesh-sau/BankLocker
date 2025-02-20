import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [AddProductComponent],
  imports: [
    ProductRoutingModule
  ]
})
export class ProductModule { }
