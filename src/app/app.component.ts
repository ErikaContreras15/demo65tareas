import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./components/dado/dado.component";
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GestionPerrosService } from './services/gestion-perros.service';
import { InicioComponent } from "./pages/inicio/inicio.component";
import { PerrosComponent } from './pages/perros/perros.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormularioComponent, RouterOutlet,PerrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'demo65';
  
  

  

}

