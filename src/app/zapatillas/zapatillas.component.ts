import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service'

@Component({
	selector:'zapatillas',
	templateUrl:'./zapatillas.component.html',
	providers:[ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
	public titulo : string;
	public zapatillas : Array<Zapatilla>;
	public marcas : string[];
	public color : string;
	public mi_marca : string;
	constructor(
		  private _zapatillaService : ZapatillaService
		){
		this.titulo ="Componente de zapatillas";
		this.color = 'blue';
		this.mi_marca='';
		this.marcas = new Array();
		
	}
	ngOnInit(){
	
		this.zapatillas = this._zapatillaService.getZapatillas();
		this.getMarcas();
	}


	getMarcas(){
		this.zapatillas.forEach((zapatilla, index) =>{
			if(this.marcas.indexOf(zapatilla.marca) < 0){
				this.marcas.push(zapatilla.marca);
			}
		});
		console.log(this.marcas);
	}

	addMarcas(){
		this.marcas.push(this.mi_marca);
		this.mi_marca='';
	}

	mostrarMarca(){
		alert(this.mi_marca);
	}

	borrarMarca(index){
		this.marcas.splice(index, 1);
	}
}
