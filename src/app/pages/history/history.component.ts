import { Component, OnInit } from '@angular/core';
import { Translate_1Service } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public subscription2: Subscription;
  constructor(private _ts: Translate_1Service,
    public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang(this._ts.get_translate_init);
    this.subscription2 = this._ts.get_translate.subscribe(resp => {
      translate.use(resp);
    });
  }

  ngOnInit() {
  }

}
