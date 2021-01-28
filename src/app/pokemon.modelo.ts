export interface  NamedAPIResource{
	name:String
	url:String
} 
export interface PokemonType{
	slot:Number
	type:NamedAPIResource
}

export interface PokemonStat{
	stat:NamedAPIResource
	effort:Number
	base_stat:Number
}

export interface PokemonSprites{
	front_default:String
	front_shiny:String
	front_female:String
	front_shiny_female:String
	back_default:String
	back_shiny:String
	back_female:String
	back_shiny_female:String
}

export interface PokemonMoveVersion{
	move_learn_method:NamedAPIResource
	version_group:NamedAPIResource
	level_learned_at:Number
}


export interface PokemonMove {
	move:NamedAPIResource
	version_group_details:PokemonMoveVersion 
}

export interface PokemonHeldItemVersion{
	version:NamedAPIResource
	rarity:number
}

export interface PokemonHeldItem{
	item:NamedAPIResource
	version_details:PokemonHeldItemVersion
}

export interface VersionGameIndex{
	game_index:Number
	version:NamedAPIResource
}

export interface Ability{
	is_hidden:Boolean
	slot:Number
	ability:NamedAPIResource

}

export interface Pokemon{
	id:Number
	name:String
	base_experience:Number
	height:Number
	is_default:Boolean
	order:Number
	weight:Number
	abilities:Array<Ability>
	forms:Array<NamedAPIResource>
	game_indices:Array<VersionGameIndex>
	held_items:PokemonHeldItem
	location_area_encounters:String
	moves:PokemonMove
	sprites:PokemonSprites
	species:NamedAPIResource
	stats:PokemonStat 
	type:PokemonType 
}