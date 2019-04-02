import { Injectable } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private lista: Array<item>;
  constructor(private localStorage: CoolLocalStorage) { 
    this.lista = this.localStorage.getObject<Array<item>>("orden_tamal");
  }

  public agrega_producto(item: item){
    

      let repetido = this.lista.map(function(obj){
        return obj.id
      }).indexOf(item.id);
      if(repetido != -1){
        this.lista[repetido].cantidad = item.cantidad;
      } else {
        this.lista.push(item);
      }
    this.localStorage.setObject("orden_tamal", this.lista);
  }

  public borrar_hoja(){
    this.localStorage.setObject("orden_tamal", []);
    this.lista.splice(0,100);
  }

  public borrar_producto_hoja(id: number){
    let posicion = this.lista.map(function(obj){
      return obj.id
    }).indexOf(id);
    this.lista.splice(posicion, 1);
    this.localStorage.setObject("orden_tamal", this.lista);
  }

  public get hoja_pedido(): Array<item>{
    return this.lista;
  }

}
