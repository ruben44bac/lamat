import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private _ms: MenuService) { }

  ngOnInit() {
  }
  public cerrar(){
    this._ms.set_menu(false);
  }
}
