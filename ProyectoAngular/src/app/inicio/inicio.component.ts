import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  num1: number = 0;
  num2: number = 0;
  resultado?: number;
  mensaje: string = '';
  error: boolean = false;

  onSumar() {
    this.resultado = this.num1 + this.num2;
    this.mensaje = 'Suma realizada con éxito';
    this.error = false;
  }

  onRestar() {
    this.resultado = this.num1 - this.num2;
    this.mensaje = 'Resta realizada con éxito';
    this.error = false;
  }

  onMultiplicar() {
    this.resultado = this.num1 * this.num2;
    this.mensaje = 'Multiplicación realizada con éxito';
    this.error = false;
  }

  onDividir() {
    if (this.num2 === 0) {
      this.mensaje = 'Error: No es posible dividir por cero';
      this.error = true;
      this.resultado = undefined;
      return;
    }
    this.resultado = this.num1 / this.num2;
    this.mensaje = 'División realizada con éxito';
    this.error = false;
  }
}
