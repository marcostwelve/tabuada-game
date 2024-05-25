import { Component, OnInit } from '@angular/core';
import { TabuadaService } from '../../tabuada.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numero1: number = 0;
  numero2: number = 0;
  resposta: string = "";
  
  constructor(private tabuada: TabuadaService) { }

  ngOnInit(): void {
    this.numero1 = this.tabuada.gerarNumerosDeZerohaDez();
    this.numero2 = this.tabuada.gerarNumerosDeZerohaDez();
  }
  calcularNumeros(a: number, b: number): number {
    return a * b;
  }

  reset(): void {
    this.numero1 = this.tabuada.gerarNumerosDeZerohaDez();
    this.numero2 = this.tabuada.gerarNumerosDeZerohaDez();
    this.resposta = "";
  }


  ehIgual(): boolean {
    if(this.calcularNumeros(this.numero1, this.numero2) === parseInt(this.resposta)) {
      return true;
    }
    return false;
  }

  esconder(): string {
    if(this.resposta === "") {
      return "hide";
    }
    return "";
  }

}
