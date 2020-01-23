import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()

export class ZapatillaService{
	public zapatillas : Array<Zapatilla>;
	constructor (){
		this.zapatillas =[ 
			new Zapatilla('Adidas Runner','Adidas','Gris',80000,true),
			new Zapatilla('Reebook Classic','Reebook','Azul',70000,true),
			new Zapatilla('Nike Moon','Nike','Negro',180000,true),
			new Zapatilla('Nike Solid','Nike','Marrona',180000,true),
			new Zapatilla('Fila Sport','Fila','Rojas',140000,false)
		];
	}

	getZapatillas(): Array<Zapatilla>{
		return this.zapatillas;
	}
}