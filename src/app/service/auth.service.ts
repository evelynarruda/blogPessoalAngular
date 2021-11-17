import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  constructor(
    private http: HttpClient
  ) { }

  entrar(credenciais: CredenciaisDTO): Observable<CredenciaisDTO> {
    return this.http.put<CredenciaisDTO>('https://projectdeployblogpessoal.herokuapp.com/api/v1/usuarios/credenciais', credenciais)
  }

cadastrar(usuario: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>('https://projectdeployblogpessoal.herokuapp.com/api/v1/usuarios/cadastrar', usuario)
}

usuarioById(id: number): Observable<Usuario>{
  return this.http.get<Usuario>(`https://projectdeployblogpessoal.herokuapp.com/api/v1/usuarios/${id}`, this.token)
}

logado(){
  let ok = false

  if(environment.token != ''){
    ok = true
  }

  return ok
}

}
