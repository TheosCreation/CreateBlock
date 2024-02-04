// priority: 0
const ItemDescription = Java.loadClass("com.simibubi.create.foundation.item.ItemDescription$Modifier");
const TooltipModifier = Java.loadClass("com.simibubi.create.foundation.item.TooltipModifier");
const Palette = Java.loadClass("com.simibubi.create.foundation.item.TooltipHelper$Palette");

const REMOVED_JEI_ITEMS = ['compressedcreativity:mesh_splashing_frozen', 'compressedcreativity:mesh_woven', 'compressedcreativity:mesh_dense', 'compressedcreativity:mesh_haunted', 'compressedcreativity:air_blower', 'compressedcreativity:industrial_air_blower', 'compressedcreativity:heater', 'compressedcreativity:compressed_iron_casing', 'compressedcreativity:mesh_splashing', 'compressedcreativity:mesh_empty', 'createindustry:gasoline_engine_back', 'createindustry:air_intake', 'createindustry:gasoline_engine', 'createindustry:lpg_engine', 'createindustry:lpg_engine_back', 'createindustry:turbine_engine', 'createindustry:turbine_engine_back', 'createindustry:diesel_engine', 'createindustry:diesel_engine_expansion', 'createindustry:orange_concrete', 'createindustry:brown_concrete', 'createindustry:purple_concrete', 'createindustry:gray_concrete', 'createindustry:green_concrete', 'createindustry:lime_concrete', 'createindustry:light_blue_concrete', 'createindustry:steel_mechanism', 'createindustry:engine_base', 'createindustry:flarestack', 'createindustry:liquid_asphalt', 'createindustry:liquid_asphalt_bucket', 'createindustry:surface_scanner', 'createdieselgenerators:crude_oil', 'createdieselgenerators:diesel', 'createdieselgenerators:plant_oil', 'createdieselgenerators:gasoline_bucket', 'createdieselgenerators:diesel_bucket', 'createdieselgenerators:plant_oil_bucket', 'createdieselgenerators:gasoline','createdieselgenerators:pumpjack_crank', 'createdieselgenerators:pumpjack_head', 'createdieselgenerators:pumpjack_bearing', 'createindustry:lignite', 'createindustry:asphalt', 'createindustry:spark_plug', 'createindustry:engine_chamber', 'createindustry:screw', 'createindustry:screwdriver', 'createindustry:turbine_blade', 'createindustry:brown_concrete_wall', 'createindustry:brown_concrete_stairs', 'createindustry:brown_concrete_slab', 'createindustry:cyan_concrete_wall', 'createindustry:cyan_concrete_stairs', 'createindustry:cyan_concrete_slab', 'createindustry:purple_concrete_wall', 'createindustry:purple_concrete_stairs', 'createindustry:purple_concrete_slab', 'createindustry:orange_concrete_wall', 'createindustry:orange_concrete_stairs', 'createindustry:orange_concrete_slab', 'createindustry:concrete_wall', 'createindustry:concrete_stairs', 'createindustry:concrete_slab', 'createindustry:concrete', 'createindustry:rebar_concrete', 'createindustry:rebar_concrete_wall', 'createindustry:rebar_concrete_stairs', 'createindustry:rebar_concrete_slab', 'createindustry:cast_iron_ingot', 'createindustry:yellow_concrete_wall', 'createindustry:yellow_concrete_stairs', 'createindustry:yellow_concrete_slab', 'createindustry:gray_concrete_wall', 'createindustry:gray_concrete_stairs', 'createindustry:gray_concrete_slab', 'createindustry:light_gray_concrete_wall', 'createindustry:light_gray_concrete_slab', 'createindustry:light_gray_concrete_stairs', 'createindustry:black_concrete_wall', 'createindustry:black_concrete_stairs', 'createindustry:black_concrete_slab', 'createindustry:white_concrete_wall', 'createindustry:white_concrete_stairs', 'createindustry:white_concrete_slab', 'createindustry:blue_concrete_wall', 'createindustry:blue_concrete_stairs', 'createindustry:blue_concrete_slab', 'createindustry:light_blue_concrete_wall', 'createindustry:light_blue_concrete_stairs', 'createindustry:light_blue_concrete_slab', 'createindustry:red_concrete_wall', 'createindustry:red_concrete_stairs', 'createindustry:red_concrete_slab', 'createindustry:green_concrete_wall', 'createindustry:green_concrete_slab', 'createindustry:green_concrete_stairs', 'createindustry:lime_concrete_wall', 'createindustry:lime_concrete_stairs', 'createindustry:lime_concrete_slab', 'createindustry:pink_concrete_wall', 'createindustry:pink_concrete_stairs', 'createindustry:pink_concrete_slab', 'createindustry:magenta_concrete_wall', 'createindustry:magenta_concrete_stairs', 'createindustry:magenta_concrete_slab', 'createindustry:black_concrete', 'createindustry:white_concrete', 'createindustry:blue_concrete', 'createindustry:red_concrete', 'createindustry:pink_concrete', 'createindustry:magenta_concrete', 'createindustry:light_gray_concrete', 'createindustry:yellow_concrete', 'createindustry:cyan_concrete', 'createindustry:fossilstone', 'createindustry:oil_deposit', 'brewinandchewin:keg', 'ae2:inscriber', 'ae2:facade', 'custommachinery:structure_creator', 'custommachinery:box_creator_item', 'custommachinery:machine_creator_item', 'hammerlib:test_machine', 'hammerlib:wrench', 'ae2:charger', 'craftingcraft:inventory_crafting', 'craftingcraft:portable_crafting', 'kubejs:incomplete_raw_basic_processor', 'kubejs:incomplete_raw_improved_processor', 'kubejs:incomplete_raw_advanced_processor', 'kubejs:incomplete_machine_casing', 'createdeco:zinc_sheet', 'wstweaks:lava_blade', 'wstweaks:blaze_blade', 'farmersdelight:wheat_dough', 'angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring', 'angelring:energetic_angel_ring'];

ClientEvents.loggedIn(tooltip => {
	tooltip.add('createdieselgenerators:basin_lid', Text.darkAqua("Used for Fermenting"));
})

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
JEIEvents.information(event => {
	event.addItem(['create:wrench', 'minecraft:end_portal_frame'], ['An End Portal Frame, Spawner and Budding Amethyst can be picked up by shift-right-click on it.', '']);
	event.addItem(['create:chromatic_compound', 'create:shadow_steel'], ['Chromatic Compound absorbs darkness when dropped into the void, returning as Shadow Steel, floating back up out of the void shortly after falling into the depths.', '']);
	event.addItem(['create:chromatic_compound', 'create:refined_radiance'], ['Chromatic Compound absorbs light when dropped in the world, transforming into Refined Radiance. Charges slowly from ambient light, faster by consuming nearby light emitting blocks, and instantly when dropped onto an active beacon.', '']);
	event.addItem(['create:chromatic_compound', 'forbidden_arcanus:stellarite_piece'], ['Chromatic Compound cools down when high above the ground, transforming into a Stellarite Piece. When Rightclicked with Chromatic Compound in your main hand it transforms', '']);
	event.addItem(['kubejs:soulless_soil', 'minecraft:soul_soil', 'forbidden_arcanus:soulless_sand', 'minecraft:soul_sand'], ['To reinfuse soulless soil/sand with a soul have a Wraith stand on top of it.', '']);
	event.addItem(['quark:wraith_spawn_egg'], ['A Wraith can be summoned using a Summoning Alter', '']);
	event.addItem(['kubejs:warping_block', 'minecraft:budding_amethyst'], ['When Warping Block is placed and left in the world for a while it will transform into a Budding Amethyst', 'A player must be 24 blocks for it to transform']);
	event.addItem(['minecraft:diamond_block'], ['When crafted into a Warping Block it will transform in a Budding Amethyst', '']);
});

