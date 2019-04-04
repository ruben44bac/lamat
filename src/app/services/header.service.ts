import { Injectable } from '@angular/core';
import { Header } from '../models/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private header: Header;
  constructor() {
    this.header = new Header();
   }


  public set_header(posicion: number) {
    this.header.posicion = posicion;
    this.header.aux = posicion > 20;
  }
  public get get_header(): Header {
    return this.header;
  }
}
