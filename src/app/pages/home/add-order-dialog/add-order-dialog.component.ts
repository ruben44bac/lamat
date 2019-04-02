import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { item } from '../../../models/item';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-add-order-dialog',
  templateUrl: './add-order-dialog.component.html',
  styleUrls: ['./add-order-dialog.component.css']
})
export class AddOrderDialogComponent implements OnInit {

  public cantidad = 1;
  constructor(public dialogRef: MatDialogRef<AddOrderDialogComponent>,
    private _os: OrderService,
    @Inject(MAT_DIALOG_DATA) public data: item) { }

  ngOnInit() {
  }
  public agregar(){
    this.data.cantidad = this.cantidad;
    this._os.agrega_producto(this.data);
    this.dialogRef.close("ok");
  }
}
