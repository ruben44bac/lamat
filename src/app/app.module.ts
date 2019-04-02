import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { CoolStorageModule } from 'angular2-cool-storage';

import { HeaderService } from './services/header.service';
import { MenuService } from './services/menu.service';
import { OrderService } from './services/order.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoolStorageModule,
    FormsModule
  ],
  providers: [ HeaderService,
    MenuService,
    OrderService
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
