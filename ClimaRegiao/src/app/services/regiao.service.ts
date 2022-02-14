import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegiaoService {
  lista = [];
  lista2 : any;
  x = "Norte";
  constructor(private httpClient: HttpClient) {
    this.pegaInfos();
  }
    async pegaInfos() {
      const requisicao = await this.httpClient
      .get<any>(`https://apiadvisor.climatempo.com.br/api/v1/forecast/region/${this.x}?token=5033553b187df62c8dd2d605926e9d03`)
      .toPromise();
      
      this.lista = requisicao.data;
      this.lista2 = requisicao;
  }
}  
  

