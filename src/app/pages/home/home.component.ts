import { Component, OnInit } from '@angular/core';
import { AddOrderDialogComponent } from './add-order-dialog/add-order-dialog.component';
import { MatDialog } from '@angular/material';
import { MenuService } from '../../services/menu.service';
import { item } from '../../models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productos: Array<item> = [  
    {
      descripcion: "",
      nombre: "Atole de cajeta (1 lt)	",
      precio: 54.00,
      id: 1
    },
    {
      descripcion: "",
      nombre: "Atole de guayaba (1 lt)",
      precio: 54.00,
      id: 2
    },
    {
      descripcion: "",
      nombre: "Tamales canarios",
      precio: 25.00,
      id: 3
    },
    {
      descripcion: "",
      nombre: "Tamales chiapanecos ",
      precio: 25.00,
      id: 4
    },
    {
      descripcion: "",
      nombre: "Tamales costeños rojos	",
      precio: 23.00,
      id: 5
    },
    {
      descripcion: "",
      nombre: "Tamales costeños verdes",
      precio: 23.00,
      id: 6
    },
    {
      descripcion: "",
      nombre: "Tamales de cajeta	",
      precio: 25.00,
      id: 7
    },
    {
      descripcion: "",
      nombre: "Tamales de champiñones",
      precio: 23.00,
      id: 8
    },
    {
      descripcion: "",
      nombre: "Tamales de chicharrón",
      precio: 22.00,
      id: 9
    },
    {
      descripcion: "",
      nombre: "Tamales de Dulce	",
      precio: 22.00,
      id: 10
    },
    {
      descripcion: "",
      nombre: "Tamales de guayaba",
      precio: 22.00,
      id: 11
    },
    {
      descripcion: "",
      nombre: "Tamales de mole",
      precio: 22.00,
      id: 12
    },
    {
      descripcion: "",
      nombre: "Tamales de piña con nuez",
      precio: 22.00,
      id: 13
    },
    {
      descripcion: "",
      nombre: "Tamales de rajas con queso",
      precio: 22.00,
      id: 14
    },
    {
      descripcion: "",
      nombre: "Tamales oaxaqueños",
      precio: 23.00,
      id: 15
    },
    {
      descripcion: "",
      nombre: "Tamales poblanos",
      precio: 23.00,
      id: 16
    },
    {
      descripcion: "",
      nombre: "Tamales veracruzanos	",
      precio: 25.00,
      id: 17
    },
    {
      descripcion: "",
      nombre: "Tamales verdes",
      precio: 22.00,
      id: 18
    },
    {
      descripcion: "",
      nombre: "Tamales yucatecos	",
      precio: 25.00,
      id: 19
    }
  ]
  constructor(public dialog: MatDialog, private _ms: MenuService) { }

  ngOnInit() {
  }

  public agregar(item: item) {
    this.dialog.open(AddOrderDialogComponent, {
      minWidth: '50%',
      maxWidth: '90%',
      data: item
    }).afterClosed().subscribe(
      res => {
        if(res != undefined){
          this._ms.set_menu(true);
        }
      }
    );

  }


}
