import { Component, HostListener, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
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
    private _ms: MenuService){

  }
  ngOnInit(){
    this.menu = this._ms.get_menu;
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this._hs.set_header(event.target.scrollTop);
  }
  close(reason: string) {
    this.sidenav.close();
  }
}
