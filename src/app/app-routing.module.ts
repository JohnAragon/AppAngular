import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExternalComponent } from './external/external.component';
import { ContactoComponent } from './contacto/contacto.component';
 
const routes: Routes = [
	{path:'',component: HomeComponent},
	{path:'home',component: HomeComponent},
	{path:'zapatillas',component: ZapatillasComponent},
	{path:'videojuegos', component: VideojuegoComponent},
	{path:'cursos', component: CursosComponent},
	{path:'cursos/:nombre/:followers', component: CursosComponent},
	{path:'external', component: ExternalComponent},
	{path:'contacto', component: ContactoComponent},
	{path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
