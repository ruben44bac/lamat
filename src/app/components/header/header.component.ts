import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { MenuService } from '../../services/menu.service';
import { Header } from '../../models/header';
import { Translate_1Service } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public header: Header;
  constructor(private _hs: HeaderService,
    private _ts: Translate_1Service,
    public translatex: TranslateService,
    private _ms: MenuService) {
    this.translatex.addLangs(['en', 'es']);
    this.translatex.setDefaultLang(this._ts.get_translate_init);
  }

  ngOnInit() {
    this.header = this._hs.get_header;
  }
  public menuCambio() {
    this._ms.set_menu(true);
  }
  public translate(idioma: string) {
    if (idioma != this._ts.get_translate_init) {
      this._ts.set_translate(idioma);
      location.reload();
    }
  }

}
