import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../../models/PokemonData';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  pokemon: PokemonData;
  
  constructor(private service: PokemonService) {
    this.pokemon = { id: 0, name: '', sprites: {front_default: ''}, types: [] }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(nomeDigitado: string): void {
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