import { Component, OnInit, DoCheck,OnDestroy } from '@angular/core';

@Component({
	selector:'videojuego',
	templateUrl:'./videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, OnDestroy, DoCheck{
	public titulo : string;
	public listado : string;
	public mostrar_videojuego : boolean = true;
	constructor(){
		this.titulo = "Componente de Video Juegos";
		this.listado = "Listado de video juegos";
		console.log("Se ha cargado el componente videojuego.component.ts")
	}
	ngOnInit(){
		console.log('OnInit Ejecutado!!')
	}
	ngOnDestroy(){
		console.log('OnDestroy Ejecutado!!')
	}
	ngDoCheck(){
		console.log('DoCheck Ejecutado !!')
	}

	cambiarTitulo(){
		this.titulo = "Nuevo titulo del componente videojuegos"
	}

	ocultarComponent(value){
  		this.mostrar_videojuego=value;
  	}
}