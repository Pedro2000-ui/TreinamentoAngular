import { RegiaoService } from './../services/regiao.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inforegiao',
  templateUrl: './inforegiao.component.html',
  styleUrls: ['./inforegiao.component.css']
})
export class InforegiaoComponent {

  constructor(private info: RegiaoService) {

  }

  sigla = this.info.lista2.acronym.toLowerCase();

  @Input()
  data: string;

  @Input()
  dataBr: string;

  @Input()
  texto: string;

  @Input()
  numero: number;

  PegarImagem() {
    return `https://imagens.climatempo.com.br/mapas/yy${this.sigla}prev${this.numero}.gif`
  }
}
