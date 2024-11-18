import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { MisionComponent } from './pages/mision/mision.component';
import { PerrosComponent } from './pages/perros/perros.component';
export const routes: Routes = [
    
    {path: 'Inicio', title: 'Inicio', component: InicioComponent, },
    {path: 'Acercade', title: 'Acercade', component: AcercaDeComponent},
    {path: 'Mision', title: 'Mision', component: MisionComponent},
    {path: 'Perros', title: 'Perros', component: PerrosComponent},

];
