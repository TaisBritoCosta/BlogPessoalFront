import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { environment } from 'src/environments/environment.prod'; //coloquei o prod //

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
      return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar',usuarioLogin)

    }
    cadastrar(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)
    }
    getByIdUser(id: number): Observable<Usuario>{
      return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
    }
    logado(){   //Vai verificar se existe um token no environment, ele vai retornar true or false//
      let ok: boolean = false 

      if (environment.token != ''){
        ok = true

      }
      return ok
    }
}
