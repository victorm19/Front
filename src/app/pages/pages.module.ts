import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PersonaComponent } from './persona/persona.component';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonaComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
