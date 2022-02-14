import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  constructor() { }

  @Input()
  nome: string;

  @Input()
  url: string;

  @Input()
  img: string;

  PegarImagem() {
    const numeroFormatado = this.leadingZero(this.img);
    
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }

  leadingZero(str: string | number, size = 3): string{
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }


}
