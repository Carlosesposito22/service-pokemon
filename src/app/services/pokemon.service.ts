import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonData } from '../../models/PokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = "https://pokeapi.co/api/v2/pokemon/";
  private pokeData: PokemonData | any;

  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<PokemonData> {
    this.pokeData = this.http.get<PokemonData>(`${this.baseURL}${name}`);
    return this.pokeData;
  }
}