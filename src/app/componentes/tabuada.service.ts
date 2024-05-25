import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabuadaService {

  constructor() { }

  gerarNumerosDeZerohaDez(): number {
    return Math.floor(Math.random() * (10 - 0) + 0 );
  }
}
