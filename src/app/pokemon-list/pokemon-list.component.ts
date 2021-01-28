import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PokemonInfoService } from "../pokemon-info.service";
import { Pokemon } from "../pokemon.modelo";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  public monster!: Pokemon;

  constructor(private infoService:PokemonInfoService) {
    
   }

  ngOnInit(): void {
    this.getList();
  }

  handlePokemon(poke: Pokemon){
    this.monster = poke;
    console.log(this.monster);
    return this.monster;
  }

  throwError(){

  }

  async getList() : Promise<void> {
    (await this.infoService.getPokemon("137")).subscribe(
      (poke)=>{
        this.monster = poke;
        this.handlePokemon(poke);
      });
      
      }


}


