import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.scss'] 
})
export class DadoComponent implements OnInit {
  valor = 0;
  imagenDado = '';

  @Input() color: string = '';

  ngOnInit(): void {
    this.lanzar();
  }

  lanzar() {
    this.valor = Math.trunc(Math.random() * 6) + 1;
    this.imagenDado = `assets/img/dado${this.valor}.jpg`; 
    console.log(this.imagenDado); 
  }
}
