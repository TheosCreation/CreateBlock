// priority: 0
const ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier");
const TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
const Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette");
const REMOVED_JEI_ITEMS = ['craftingcraft:inventory_crafting', 'craftingcraft:portable_crafting', 'kubejs:incomplete_raw_basic_processor', 'kubejs:incomplete_raw_improved_processor', 'kubejs:incomplete_raw_advanced_processor', 'kubejs:incomplete_machine_casing', 'createdeco:zinc_sheet', 'wstweaks:lava_blade', 'wstweaks:blaze_blade', 'farmersdelight:wheat_dough', 'angelring:leadstone_angel_ring','angelring:hardened_angel_ring','angelring:reinforced_angel_ring','angelring:resonant_angel_ring','angelring:energetic_angel_ring'];

// loop over REMOVED_JEI_ITEMS array
REMOVED_JEI_ITEMS.forEach((id) => {
	// Remove recipes from JEI		
	JEIEvents.hideItems(
		('jei.hide.items', event => {
			event.hide( id )
		})	
	);
});

JEIEvents.addItems(('jei.add.items', event => {
	event.add('create:chromatic_compound')
	event.add('create:shadow_steel')
	event.add('create:shadow_steel_casing')
	event.add('create:refined_radiance')
	event.add('create:refined_radiance_casing')
})	
);

const $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

JEIEvents.removeRecipes(event => {
	const mysteryConversion = global.jeiRuntime.jeiHelpers.getRecipeType('create:mystery_conversion').get()
	global.jeiRuntime.recipeManager.addRecipes(mysteryConversion, [new $ConversionRecipe.create('create:chromatic_compound', 'create:refined_radiance')])
})
JEIEvents.removeRecipes(event => {
	const mysteryConversion = global.jeiRuntime.jeiHelpers.getRecipeType('create:mystery_conversion').get()
	global.jeiRuntime.recipeManager.addRecipes(mysteryConversion, [new $ConversionRecipe.create('create:chromatic_compound', 'create:shadow_steel')])
})
JEIEvents.removeRecipes(event => {
	const mysteryConversion = global.jeiRuntime.jeiHelpers.getRecipeType('create:mystery_conversion').get()
	global.jeiRuntime.recipeManager.addRecipes(mysteryConversion, [new $ConversionRecipe.create('create:chromatic_compound', 'forbidden_arcanus:stellarite_piece')])
})

JEIEvents.removeRecipes(event => {
	const mysteryConversion = global.jeiRuntime.jeiHelpers.getRecipeType('create:mystery_conversion').get()
	global.jeiRuntime.recipeManager.addRecipes(mysteryConversion, [new $ConversionRecipe.create('forbidden_arcanus:soulless_sand', 'minecraft:soul_sand')])
})
JEIEvents.removeRecipes(event => {
	const mysteryConversion = global.jeiRuntime.jeiHelpers.getRecipeType('create:mystery_conversion').get()
	global.jeiRuntime.recipeManager.addRecipes(mysteryConversion, [new $ConversionRecipe.create('kubejs:soulless_soil', 'minecraft:soul_soil')])
})
JEIEvents.removeRecipes(event => {
	const mysteryConversion = global.jeiRuntime.jeiHelpers.getRecipeType('create:mystery_conversion').get()
	global.jeiRuntime.recipeManager.addRecipes(mysteryConversion, [new $ConversionRecipe.create('kubejs:warping_block', 'minecraft:budding_amethyst')])
})

// Adds tip for wrench
JEIEvents.information (event => {
	event.addItem('create:wrench', ['An End Portal Frame, Spawner and Budding Amethyst can be picked up by shift-right-click on it.', '']);
	event.addItem(['create:chromatic_compound', 'create:shadow_steel'], ['Chromatic Compound absorbs darkness when dropped into the void, returning as Shadow Steel, floating back up out of the void shortly after falling into the depths.', '']);
	event.addItem(['create:chromatic_compound', 'create:refined_radiance'], ['Chromatic Compound absorbs light when dropped in the world, transforming into Refined Radiance. Charges slowly from ambient light, faster by consuming nearby light emitting blocks, and instantly when dropped onto an active beacon.', '']);
	event.addItem(['create:chromatic_compound', 'forbidden_arcanus:stellarite_piece'], ['Chromatic Compound cools down when high above the ground, transforming into a Stellarite Piece. When Rightclicked with Chromatic Compound in your main hand it transforms', '']);
	event.addItem(['kubejs:soulless_soil', 'minecraft:soul_soil', 'forbidden_arcanus:soulless_sand', 'minecraft:soul_sand'], ['To reinfuse soulless soil/sand with a soul have a Wraith stand on top of it.', '']);
	event.addItem(['quark:wraith_spawn_egg'], ['A Wraith can be summoned using a Summoning Alter', '']);
	event.addItem(['kubejs:warping_block', 'minecraft:budding_amethyst'], ['When Warping Block is placed and left in the world for a while it will transform into a Budding Amethyst', 'A player must be 24 blocks for it to transform']);
	event.addItem(['minecraft:diamond_block'], ['When crafted into a Warping Block it will transform in a Budding Amethyst', '']);
});

