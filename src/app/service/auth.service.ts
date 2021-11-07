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

entrar(UsuarioLoginDTO: UsuarioLoginDTO): Observable<UsuarioLoginDTO>{
  return  this.http.post<UsuarioLoginDTO>('http://localhost:8080/usuario/logar', UsuarioLoginDTO)
}

cadastrar(Usuario: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>('http://localhost:8080/usuario/cadastrar', Usuario)
}


}
