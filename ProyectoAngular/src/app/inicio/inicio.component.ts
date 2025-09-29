import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variables suma
  num1!:number;
  num2!:number;
  resultado!:number;
  mensaje:string='';



  constructor() { }

  ngOnInit(): void {
  }

  onSumar(): void{
  
    this.resultado = this.num1 + this.num2;
    if (this.resultado <= 50) {
      this.mensaje = 'El resultado es menor o igual a 50';
    } else {
      this.mensaje = 'El resultado es mayor a 50';
    }
  }
}
