import { compileInjectable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  constructor(public pokemonService: PokemonService) { }

  imagem : string;
  
  Pokemon(evento) {
    this.imagem = evento.target.value
    this.pokemonService.x = evento.target.value;
    this.pokemonService.puxaPokemons();
  }
}
