import { CepResponse } from './interface/cepresponse';
import { CepService } from './buscar-cep.service';
import { Component, OnInit } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';


@Component({
  selector: 'app-bucar-cep',
  templateUrl: './bucar-cep.component.html',
  styleUrls: ['./bucar-cep.component.css']
})

export class BucarCepComponent implements OnInit {
  dark: boolean = true;
  resultado: any;
  cep: string = '';
  endereco: CepResponse = {
    cep: '',
    bairro: '',
    complemento: '',
    ddd: '',
    uf: '',
    gia: '',
    ibge: '',
    localidade: '',
    logradouro: '',
    siafi: '',
  };

  err: any = {
    msg: '',
    bool: false
  }

  constructor(private cepService: CepService) { }

  faMoon = faMoon;
  faSun = faSun;

  ngOnInit(): void {
  }

  onBlur() {
    if (this.cep.length == 8 || this.cep.length == 9) {
      this.err.bool = false;
      return this.buscarCep(this.cep);
    } else {
      this.err.bool = true;
      this.err.msg = 'Por favor, digite um CEP válido!';
    }
  }

  buscarCep(cep: string) {
    this.cepService.buscar(cep).subscribe(data => { this.endereco = data; });
  }

  toggleTheme() {
    this.dark = !this.dark;
  }
}
