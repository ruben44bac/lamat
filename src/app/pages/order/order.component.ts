import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { item } from '../../models/item';

import { Translate_1Service } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public lista: Array<item>;
  public nombre: string;
  public correo: string;
  public telefono: string;
  public mensaje: string;

  constructor(private _os: OrderService,
    private _ts: Translate_1Service,
    private snackBar: MatSnackBar,
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

  public submit() {


    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("target", "_blank");
    form.setAttribute("action", environment.ruta_mail + "/orden-mail.php");

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
      var orden = "<table style=\"width: 100%\"><tr><td>Nombre</td> <td>Cantidad</td> <td>Importe</td></tr>";
      this.lista.forEach(elto => {
        orden += "<tr>" +
          "<td>" + elto.nombre + "</td>" +
          "<td>" + elto.cantidad + "</td>" +
          "<td>" + (elto.precio * elto.cantidad).toFixed(2) + "</td>" +
          "</tr>"
      })
      orden += "</table>";
      hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "orden");
      hiddenField.setAttribute("value", orden);
      form.appendChild(hiddenField);
    document.body.appendChild(form);
    form.submit();
    this.snackBar.open("Tu pedido ha sido enviado. ¡Pronto te contactaremos!", "Aceptar",{
      duration: 5000,
      panelClass: ["snack-bar"]
    });
    this._os.borrar_hoja();
  }


}
