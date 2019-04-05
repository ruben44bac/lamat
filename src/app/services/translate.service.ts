import { Injectable } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Translate } from '../models/translate';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Translate_1Service {
  private subject = new Subject<string>();
  constructor(private localStorage: CoolLocalStorage) {
    if(this.localStorage.getItem("idioma") == undefined){
      this.localStorage.setItem("idioma", "es");
    }
    this.subject.next(this.localStorage.getItem("idioma"))
   }

   public set_translate(idioma: string){
     this.localStorage.setItem("idioma", idioma);
     this.subject.next(idioma);
   }

   public get get_translate(): Observable<string> {
    return this.subject.asObservable();
   }

   public get get_translate_init(): string {
     return this.localStorage.getItem("idioma");
   }
}
