import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu: Menu;
  constructor() { 
    this.menu = new Menu();
  }

  public set_menu(abrir: boolean) {
    this.menu.abrir = abrir;
  }

  public get get_menu(): Menu {
    return this.menu;
  }
}
