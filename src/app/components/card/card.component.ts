import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../../models/PokemonData';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  pokemon: PokemonData;
  typeColors: { [key: string]: string } = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
  };
  
  constructor(private service: PokemonService) {
    this.pokemon = { id: 0, name: '', sprites: {front_default: ''}, types: [] }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(nomeDigitado: string): void {
    if(nomeDigitado == 'Miccuci') {
      this.pokemon = {
        id: 1,
        name: 'Miccuci',
        sprites: {front_default: 'https://github.com/Carlosesposito22/service-pokemon/blob/master/src/assets/miccuci.jpg?raw=true'},
        types: [{slot: 1, type: {name: 'dragon', url: ''}}, {slot: 2, type: {name: 'fairy', url: ''}}]
      }
    } else {
      this.service.getPokemon(nomeDigitado).subscribe({
        next: (resut) => {
          this.pokemon = {
            id: resut.id,
            name: resut.name,
            sprites: resut.sprites,
            types: resut.types
          }
        }
      })
    }
  }

  getTypeColor(type: string): string {
    return this.typeColors[type] || "#777";
  }

}