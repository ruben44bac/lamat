import { Component, HostListener, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { DeviceDetectorService } from 'ngx-device-detector';
import { HeaderService } from './services/header.service';
import { MenuService } from './services/menu.service';
import { Menu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public menu: Menu;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private _hs: HeaderService,
    private deviceService: DeviceDetectorService,
    private _ms: MenuService){

  }
  ngOnInit(){
    this.menu = this._ms.get_menu;
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if(this.deviceService.isDesktop()){
      this._hs.set_header(event.target.scrollTop);
    }
  }
  close(reason: string) {
    this.sidenav.close();
  }
}
