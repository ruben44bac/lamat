import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AddOrderDialogComponent } from './add-order-dialog/add-order-dialog.component';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  declarations: [HomeComponent, AddOrderDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [ AddOrderDialogComponent ]
})
export class HomeModule { }
