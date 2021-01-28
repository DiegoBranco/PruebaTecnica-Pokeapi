export interface  NamedAPIResource{
	name:String
	url:String
} 

export interface  APIResource{
	url:String
} 


export interface PokemonSpecies{
    id:Number 
    name:String
    order:Number
    gender_rate:Number
    capture_rate:Number
    base_happiness:Number
    is_baby:Boolean
    is_legendary:Boolean
    is_mythical:Boolean
    hatch_counter:Number
    has_gender_differences:Boolean
    forms_switchable:Boolean
    evolves_from_species:NamedAPIResource
    evolution_chain:APIResource
}


