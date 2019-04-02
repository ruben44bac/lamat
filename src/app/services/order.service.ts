import { Injectable } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private localStorage: CoolLocalStorage) { }
}
