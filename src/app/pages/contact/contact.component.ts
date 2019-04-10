import { Component, OnInit } from '@angular/core';
import { Translate_1Service } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public nombre: string;
  public correo: string;
  public telefono: string;
  public mensaje: string;
  constructor(private _ts: Translate_1Service,
    private snackBar: MatSnackBar,
    public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang(this._ts.get_translate_init);

   }

  ngOnInit() {
    console.log("contacto");
  }
  public submit() {


    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("target", "_blank");
    form.setAttribute("action", environment.ruta_mail + "/mail.php");

      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "nombre");
      hiddenField.setAttribute("value", this.nombre);
      form.appendChild(hiddenField);
      hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "correo");
      hiddenField.setAttribute("value", this.correo);
      form.appendChild(hiddenField);
      hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "telefono");
      hiddenField.setAttribute("value", this.telefono);
      form.appendChild(hiddenField);
      hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "mensaje");
      hiddenField.setAttribute("value", this.mensaje);
      form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
    this.snackBar.open("Pronto nos pondremos en contacto contigo", "Aceptar",{
      duration: 5000,
      panelClass: ["snack-bar"]
    });
  }

}
