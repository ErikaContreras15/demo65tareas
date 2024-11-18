import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent  implements OnInit {
  @Input() codigo = 0;
  @Input() descripcion = '';
  @Input() precio = 0;

  @Output() guardarArticulo = new EventEmitter<{codigo: number, descripcion: string, precio: number}>();

  ngOnInit(): void {
    
  }

  guardar() {
    this.guardarArticulo.emit({
      codigo: this.codigo,
      descripcion: this.descripcion,
      precio: this.precio
    });
  }
  
  

}
