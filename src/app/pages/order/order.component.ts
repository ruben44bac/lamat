import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { item } from '../../models/item';

import { Translate_1Service } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public lista: Array<item>;
  public subscription: Subscription;

  constructor(private _os: OrderService,
    private _ts: Translate_1Service,
    public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang(this._ts.get_translate_init);
    this.subscription = this._ts.get_translate.subscribe(resp => {
      translate.use(resp);
    });
  }

  ngOnInit() {
    this.lista = this._os.hoja_pedido;
  }

  public get total(): number {
    var sum = 0;
    this.lista.forEach(f => { sum += f.cantidad * f.precio; })
    return sum;
  }




}
