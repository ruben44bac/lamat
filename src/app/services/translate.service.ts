import { Injectable } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';


@Injectable({
  providedIn: 'root'
})
export class Translate_1Service {
  constructor(private localStorage: CoolLocalStorage) {
    if(this.localStorage.getItem("idioma") == undefined){
      this.localStorage.setItem("idioma", "es");
    }
   }

   public set_translate(idioma: string){
     this.localStorage.setItem("idioma", idioma);
   }

   public get get_translate_init(): string {
     return this.localStorage.getItem("idioma");
   }
}
