import { Component, OnInit } from '@angular/core';
import { Translate_1Service } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public subscription: Subscription;
  constructor(private _ts: Translate_1Service,
    public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang(this._ts.get_translate_init);
    this.subscription = this._ts.get_translate.subscribe(resp => {
      translate.use(resp);
    });
   }

  ngOnInit() {
    console.log("contacto");
  }

}
