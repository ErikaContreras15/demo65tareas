import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { PerrodfbService } from '../../services/perrodfb.service';
import { Perro } from '../../domain/perros';
import { PerrodfbService } from '../../services/perrodfb.service';
@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.scss'
})
export class PerrosComponent  implements OnInit{
  perro: Perro= new Perro()
  perros:any
  perrosObj: any
  editandoId: string | null = null;

  constructor(private perroDFBService:PerrodfbService){}

  async ngOnInit(): Promise<void> {
    await this.obtenerPerros();
  }

  async guardar() {
    if (this.editandoId) {
      await this.perroDFBService.updatePerro(this.editandoId, this.perro);
      this.editandoId = null;
    } else {
      await this.perroDFBService.addPerroObj(this.perro);
    }
    this.perro = new Perro();
    await this.obtenerPerros();
  }

 /* async borrar(id: string) {
    await this.perroDFBService.deletePerro(id);
    await this.obtenerPerros();
  }*/

    async borrar(id: string) {
      if (this.editandoId === id) {
        this.perro = new Perro(); // Limpia los datos del formulario si el perro eliminado está seleccionado
        this.editandoId = null;
      }
      await this.perroDFBService.deletePerro(id);
      await this.obtenerPerros();
    }
    
    seleccionar(perro: any) {
      this.editandoId = perro.id;
      this.perro = { nombre: perro.nombre, raza: perro.raza };
    }
    

 /* seleccionar(perro: any) {
    this.editandoId = perro.id;
    this.perro = { nombre: perro.nombre, raza: perro.raza };
  }*/

  private async obtenerPerros() {
    this.perros = await this.perroDFBService.getPerros();
  }



}