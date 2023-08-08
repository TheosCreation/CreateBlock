// priority: 0

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

// Adds tip for wrench
JEIEvents.information (event => {
	event.addItem('create:wrench', ['An End Portal Frame, Spawner and Budding Amethyst can be picked up by shift-right-click on it.', '']);
});

