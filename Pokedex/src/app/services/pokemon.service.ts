import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];
  infoPokemonPuxado = [];
  x = "";

  constructor(private httpClient: HttpClient) {
    this.pegaInfosPokemon();
    this.puxaPokemons();
  }
    async pegaInfosPokemon() {
      const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=898')
      .toPromise();
      this.pokemons = requisicao.results;
    }
    async puxaPokemons() {
      const requisicao = await this.httpClient
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${this.x}/`)
      .toPromise();
      this.infoPokemonPuxado = requisicao.forms
    }
}
