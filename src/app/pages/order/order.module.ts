import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { ShareModule } from '../../modules/share/share.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    OrderRoutingModule,
    ShareModule
  ]
})
export class OrderModule { }
