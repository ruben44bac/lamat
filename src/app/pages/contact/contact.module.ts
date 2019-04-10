import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { MaterialModule } from '../../modules/material/material.module';
import { ShareModule } from '../../modules/share/share.module';


import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContactRoutingModule,
    MaterialModule,
    FormsModule,
    ShareModule
  ]
})
export class ContactModule { }
