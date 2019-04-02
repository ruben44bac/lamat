import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { OrderService } from '../../services/order.service';
import { item } from '../../models/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  public lista: Array<item>;
  constructor(private _ms: MenuService,
    private _os: OrderService) { }

  ngOnInit() {
    this.lista = this._os.hoja_pedido;
  }
  public cerrar(){
    this._ms.set_menu(false);
  }
  public ajusta_cantidad(elto: item){
    this._os.agrega_producto(elto);
  }
  public vaciar() {
    this._os.borrar_hoja();
    this._ms.set_menu(false);
  }
}
