import { Component, OnInit } from '@angular/core';
import { AddOrderDialogComponent } from './add-order-dialog/add-order-dialog.component';
import { MatDialog } from '@angular/material';
import { MenuService } from '../../services/menu.service';
import { item } from '../../models/item';
import { Translate_1Service } from '../../services/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productos: Array<item> = [  
    {
      descripcion: "/assets/products/atole-cajeta_5526a64f-ac74-40c6-a07f-102bc430f31c_large.jpg",
      nombre: "Champurrado (32 onzas)",
      precio: 7.00,
      id: 10
    },
    {
      descripcion: "/assets/products/atole-cajeta_5526a64f-ac74-40c6-a07f-102bc430f31c_large.jpg",
      nombre: "Atole de fresa (32 onzas)",
      precio: 7.00,
      id: 11
    },
    {
      descripcion: "/assets/products/atole-cajeta_5526a64f-ac74-40c6-a07f-102bc430f31c_large.jpg",
      nombre: "Atole de chocolate (32 onzas)",
      precio: 7.00,
      id: 12
    },
    {
      descripcion: "/assets/products/atole-cajeta_5526a64f-ac74-40c6-a07f-102bc430f31c_large.jpg",
      nombre: "Atole de vainilla (32 onzas)",
      precio: 7.00,
      id: 13
    },
    {
      descripcion: "/assets/products/verde_large.jpg",
      nombre: "Tamales verdes con pollo",
      precio:  2.25,
      id: 1
    },
    {
      descripcion: "/assets/products/chicharron_large.jpg",
      nombre: "Tamales rojos con pollo",
      precio:  2.25,
      id: 2
    },
    {
      descripcion: "/assets/products/generico-hoja-maiz_6fa029e4-23a2-4ec5-b4ea-1bb9bfed22d3_large.jpg",
      nombre: "Tamales de mole con pollo",
      precio:  2.25,
      id: 3
    },
    {
      descripcion: "/assets/products/verde_large.jpg",
      nombre: "Tamales verdes con puerco",
      precio:  2.25,
      id: 4
    },
    {
      descripcion: "/assets/products/chicharron_large.jpg",
      nombre: "Tamales rojos con puerco",
      precio:  2.25,
      id: 5
    },
    {
      descripcion: "/assets/products/tamal_de_rajas_con_queso_large.jpg",
      nombre: "Tamales de rajas con queso",
      precio:  2.25,
      id: 6
    },{
      descripcion: "/assets/products/generico-hoja-maiz_6fa029e4-23a2-4ec5-b4ea-1bb9bfed22d3_large.jpg",
      nombre: "Tamales de frijoles con chorizo",
      precio:  2.25,
      id: 7
    },
    {
      descripcion: "/assets/products/tamal-de-dulce_large.jpg",
      nombre: "Tamales de fresa",
      precio:  2.25,
      id: 8
    },
    {
      descripcion: "/assets/products/generico-hoja-maiz_6fa029e4-23a2-4ec5-b4ea-1bb9bfed22d3_large.jpg",
      nombre: "Tamales de piña",
      precio:  2.25,
      id: 9
    },
    {
      descripcion: "/assets/products/tamal-1.jpg",
      nombre: "Tamales de tinga",
      precio:  2.25,
      id: 14
    },
    {
      descripcion: "/assets/products/tamal-2.jpg",
      nombre: "Tamales de cochinita pibil",
      precio:  2.25,
      id: 15
    },
    {
      descripcion: "/assets/products/tamal-3.jpg",
      nombre: "Tamales de frutas cristalizadas",
      precio:  2.25,
      id: 16
    }
  ];
  constructor(public dialog: MatDialog, 
    private _ms: MenuService,
    private _ts: Translate_1Service,
    public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang(this._ts.get_translate_init);

  }

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
  ngOnDestroy() {
  }


}
