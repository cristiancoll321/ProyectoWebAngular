import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PlantillaComponent,
    ServiciosComponent,
    ContactoComponent,
    AcercadeComponent,
    TestimoniosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
