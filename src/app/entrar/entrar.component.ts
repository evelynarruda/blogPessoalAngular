import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLoginDTO: UsuarioLoginDTO = new UsuarioLoginDTO()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuarioLoginDTO).subscribe((resp: UsuarioLoginDTO)=>{
        this.usuarioLoginDTO = resp

          environment.token = this.usuarioLoginDTO.token
          environment.nome = this.usuarioLoginDTO.nome
          environment.foto = this.usuarioLoginDTO.foto
          environment.id = this.usuarioLoginDTO.id

        this.usuarioLoginDTO.foto

        this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos')
      }
    })
    }
  }
