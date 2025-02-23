import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { RemarksDialogComponent } from './remarks-dialog/remarks-dialog.component';



@NgModule({
  declarations: [AddProductComponent],
  imports: [
    ProductRoutingModule,
    NgxChartsModule,
    MatDialogModule,
    FormsModule,
    RemarksDialogComponent
  ]
})
export class ProductModule { }
