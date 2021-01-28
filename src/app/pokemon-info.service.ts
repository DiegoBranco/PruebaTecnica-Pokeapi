import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "./pokemon.modelo";


@Injectable({
  providedIn: 'root'
})
export class PokemonInfoService {
  urlpokemon = "https://pokeapi.co/api/v2/pokemon/";
  urlspecies = " https://pokeapi.co/api/v2/pokemon-species/"
  constructor(private http:HttpClient) {
    
   }
   public async getPokemon(id:String){
    //Busca la lista de clientes en el webservice conectado a couchDB
    //Devuelve un JSON con multiples elementos.
    let list =  this.http.get<Pokemon>(this.urlpokemon+id+"/");
    return list;
  }

}
