import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { item } from '../../models/item';

import { Translate_1Service } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public lista: Array<item>;

  constructor(private _os: OrderService,
    private _ts: Translate_1Service,
    public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang(this._ts.get_translate_init);
  }

  ngOnInit() {
    this.lista = this._os.hoja_pedido;
  }

  public get total(): number {
    var sum = 0;
    this.lista.forEach(f => { sum += f.cantidad * f.precio; })
    return sum;
  }

  ngOnDestroy() {
  }


}
