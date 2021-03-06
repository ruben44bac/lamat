import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { OrderService } from '../../services/order.service';
import { item } from '../../models/item';
import { Router } from '@angular/router';
import { Translate_1Service } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  public lista: Array<item>;
  constructor(private _ts: Translate_1Service,
    public translate: TranslateService,
    private _ms: MenuService,
    private router: Router,
    private _os: OrderService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang(this._ts.get_translate_init);

  }

  ngOnInit() {
    this.lista = this._os.hoja_pedido;
  }
  public cerrar() {
    this._ms.set_menu(false);
  }
  public ajusta_cantidad(elto: item) {
    this._os.agrega_producto(elto);
  }
  public vaciar() {
    this._os.borrar_hoja();
    this._ms.set_menu(false);
  }

  public eliminar(elto: item) {
    this._os.borrar_producto_hoja(elto.id);
  }

  public orden() {
    this._ms.set_menu(false);
    this.router.navigate(['order']);
  }

  public get total(): number {
    var sum = 0;
    if (this.lista == undefined) {
      return 0;
    }
    this.lista.forEach(f => { sum += f.cantidad * f.precio; })
    return sum;
  }
}
