import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service'
 
@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [PeticionesService]
})  
export class ExternalComponent implements OnInit {
  public user:any;
  public userId:any;
  public fecha:any;
  public new_user:any;
  public user_stored:any;

  constructor(
  		private _peticionesService: PeticionesService
  	) { 
      this.userId = 1;
      this.new_user = {
         'name':'',
         'job':''
      }
      this.user_stored =false;

    }

  ngOnInit() {
    this.cargarUsuario();
    this.fecha = new Date();  
  }

  cargarUsuario(){
      this.user = false;
      this._peticionesService.getUser(this.userId).subscribe(
        result=>{
          this.user=result.data;
          console.log(this.user);
        }, 
        error=>{
          console.log(<any>error);
        }
      );
  }

  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
        response =>{
          console.log(response);
          this.user_stored=response;
          form.reset();
        },
        error  => {
          console.log(<any>error);
        }
      )

  }

}
