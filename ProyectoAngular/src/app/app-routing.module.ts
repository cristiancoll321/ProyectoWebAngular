import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component'; 
import { AcercadeComponent } from './acercade/acercade.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';


const routes: Routes = [
{
  path:'',
  redirectTo:'/inicio',
  pathMatch:'full'
}, 

{
  path:'inicio',
  component: InicioComponent
},

{
  path:'plantilla',
  component: PlantillaComponent
},

{
  path:'servicios',
  component: ServiciosComponent
},

{
  path:'contacto',
  component: ContactoComponent
},

{
  path:'acerca',
  component: AcercadeComponent
},

{
  path:'testimonios',
  component: TestimoniosComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
