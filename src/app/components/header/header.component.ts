import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { MenuService } from '../../services/menu.service';
import { Header } from '../../models/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public header: Header;
  constructor(private _hs: HeaderService,
    private _ms: MenuService) {
   }

  ngOnInit() {
    this.header =  this._hs.get_header;
  }
  public menuCambio(){
    this._ms.set_menu(true);
  }


}