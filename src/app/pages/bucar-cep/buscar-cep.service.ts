import { CepResponse } from './interface/cepresponse';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CepService {

  constructor(private http: HttpClient) { }

  buscar(cep: string) {
    return this.http
      .get<CepResponse>(`${environment.apibase}/${cep}/json/`);

  }
}
