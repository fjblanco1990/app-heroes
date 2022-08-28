import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuToolbarComponent } from './components/menu-toolbar/menu-toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { CardHeroeComponent } from './components/card-heroe/card-heroe.component';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    MenuListComponent,
    MenuToolbarComponent,
    MenuNavComponent,
    CardHeroeComponent,
    ImagenPipe
  ],
  imports: [
   CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class HeroesModule { }
