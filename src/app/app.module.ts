import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ShareModule } from './modules/share/share.module';
import { CoolStorageModule } from 'angular2-cool-storage';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { RouterModule } from '@angular/router';

import { HeaderService } from './services/header.service';
import { Translate_1Service } from './services/translate.service';
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
    FormsModule,
    RouterModule,
    ShareModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [ HeaderService,
    MenuService,
    OrderService,
    Translate_1Service
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
