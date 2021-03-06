import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

entrar(usuarioLogin: UsuarioLoginDTO): Observable<UsuarioLoginDTO>{
  return this.http.post<UsuarioLoginDTO>('https://projectdeployblogpessoal.herokuapp.com/api/v1/usuarios/logar', usuarioLogin)
}

cadastrar(usuario: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>('https://projectdeployblogpessoal.herokuapp.com/api/v1/usuarios/cadastrar', usuario)
}


}
