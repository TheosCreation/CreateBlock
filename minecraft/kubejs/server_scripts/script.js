// priority: 0

ServerEvents.recipes(event => {
	const REMOVED_BY_OUTPUT = ['compressedcreativity:mesh_splashing_frozen', 'compressedcreativity:mesh_woven', 'compressedcreativity:mesh_dense', 'compressedcreativity:mesh_haunted', 'compressedcreativity:air_blower', 'compressedcreativity:industrial_air_blower', 'compressedcreativity:heater', 'compressedcreativity:compressed_iron_casing', 'compressedcreativity:mesh_splashing', 'compressedcreativity:mesh_empty', 'createindustry:pumpjack_base', 'createindustry:pumpjack_hammer', 'createindustry:machine_input', 'createindustry:liquid_asphalt', 'createindustry:surface_scanner', 'createdieselgenerators:pumpjack_crank', 'createdieselgenerators:pumpjack_head', 'createdieselgenerators:pumpjack_bearing', 'createindustry:engine_base', 'createindustry:light_blue_concrete', 'createindustry:lime_concrete', 'createindustry:green_concrete', 'createindustry:gray_concrete', 'createindustry:purple_concrete', 'createindustry:brown_concrete', 'createindustry:orange_concrete', 'createindustry:cast_iron_block', 'createindustry:spark_plug', 'createindustry:engine_chamber', 'createindustry:screw', 'createindustry:screwdriver', 'createindustry:turbine_blade', 'createindustry:cast_iron_ingot', 'createindustry:cement', 'createdieselgenerators:gasoline_bucket', 'createdieselgenerators:diesel_bucket', 'createdieselgenerators:plant_oil_bucket', 'createdieselgenerators:gasoline', 'createdieselgenerators:diesel', 'createdieselgenerators:plant_oil', 'createindustry:flarestack', 'createindustry:steel_mechanism', 'createindustry:diesel_engine_expansion', 'createindustry:diesel_engine', 'createindustry:turbine_engine_back', 'createindustry:turbine_engine', 'createindustry:lpg_engine_back', 'createindustry:lpg_engine', 'createindustry:gasoline_engine', 'createindustry:air_intake', 'createindustry:gasoline_engine_back', 'create:experience_block', 'brewinandchewin:keg', 'ae2:inscriber', 'rebornstorage:raw_super_advanced_processor', 'computercraft:monitor_advanced', 'forbidden_arcanus:dark_matter', 'createsifter:advanced_brass_mesh', /*'createindustry:steel_fluid_tank', */ 'chancecubes:chance_cube', 'quark:sturdy_stone', 'forbidden_arcanus:corrupted_pixie', 'createsifter:brass_mesh', 'createsifter:zinc_mesh', 'createsifter:andesite_mesh', 'forbidden_arcanus:rune', 'forbidden_arcanus:obsidian_with_iron', 'computercraft:computer_advanced', 'computercraft:computer_normal', '#create_sa:jetpack', 'craftingcraft:portable_crafting', 'craftingcraft:inventory_crafting', 'ae2:charger', 'create:crushed_raw_lead', 'create:crushed_raw_tin', 'create:crushed_raw_uranium', 'quark:charcoal_block', 'refinedstorage:controller', 'refinedstorage:silicon', 'refinedstorage:machine_casing', 'refinedstorage:raw_advanced_processor', 'refinedstorage:raw_basic_processor', 'refinedstorage:raw_improved_processor', 'toms_storage:ts.crafting_terminal', 'minecraft:packed_mud', 'minecraft:packed_ice', 'minecraft:ice', 'minecraft:blue_ice', 'createdeco:zinc_sheet', 'wstweaks:lava_blade', 'wstweaks:blaze_blade', 'create:smart_fluid_pipe', 'create:steam_engine', 'toms_storage:ts.inventory_cable_connector_filtered', 'toms_storage:ts.inventory_cable_connector_framed', 'toms_storage:ts.inventory_cable_framed', 'toms_storage:ts.open_crate', 'toms_storage:ts.storage_terminal', 'toms_storage:ts.trim', 'toms_storage:ts.inventory_cable_connector', 'toms_storage:ts.inventory_connector', 'toms_storage:ts.inventory_proxy', 'toms_storage:ts.level_emitter', 'toms_storage:ts.trim', 'toms_storage:ts.wireless_terminal', 'farmersdelight:wheat_dough', 'angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring', 'angelring:energetic_angel_ring'];
	// remove items in array
	REMOVED_BY_OUTPUT.forEach(id => event.remove({ output: id }));
	event.remove({ output: 'create:cinder_flour', type: 'create:crushing' })
	event.remove({ input: 'create:experience_block'})
	event.remove({ input: 'createindustry:fossilstone' })
	event.remove({ input: 'createindustry:cement' })
	event.remove({ input: 'createindustry:lignite' })
	event.remove({ input: 'minecraft:end_stone', type: 'create:crushing' })
	event.remove({ input: 'minecraft:end_stone', type: 'create:milling' })
	event.remove({ output: 'create:cinder_flour', type: 'create:crushing' })
	event.remove({ output: 'minecraft:flint', type: 'create:milling' })
	//event.remove({ type: 'ae2:inscriber' })
	
	event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal'})
	event.remove({ id: 'forbidden_arcanus:dark_rune'})
	event.remove({ id: 'create:washing_cobble_to_tuff' })
	event.remove({ id: 'create:haunting/soul_sand' })
	event.remove({ id: 'create:haunting/soul_soil' })
	event.remove({ id: 'ars_nouveau:conjuration_essence_to_soul_sand' })
	event.remove({ id: 'forbidden_arcanus:polished_darkstone' })
	event.remove({ type: 'brewinandchewin:fermenting' })
	event.smithing(
		'kubejs:netherite_mesh',  // arg 1: output
		'kubejs:diamond_mesh', // arg 2: the item to be upgraded
		'minecraft:netherite_ingot'   // arg 3: the upgraded item
	)

	event.smelting('kubejs:silver_ingot', 'kubejs:raw_silver')
	event.smelting('kubejs:silver_ingot', 'create:crushed_raw_silver')
	event.blasting('kubejs:silver_ingot', 'kubejs:raw_silver')
	event.blasting('kubejs:silver_ingot', 'create:crushed_raw_silver')
	event.blasting('witherproofed:soul_scorched_metal', 'kubejs:incomplete_soul_scorched_metal')
	
	event.shaped('createindustry:steel_fluid_tank', [
		' S ',
		' B ',
		' S '
	], {
		B: 'minecraft:barrel',
		S: 'createindustry:heavy_plate'
	})
	
	event.shaped('createindustry:machine_input', [
		'SC',
		'G '
	], {
		S: 'createindustry:heavy_machinery_casing',
		C: 'create:cogwheel',
		G: 'create:shaft'
	})
	event.shaped('computercraft:computer_normal', [
		'AAA',
		'ADA',
		'ARA'
	], {
		G: '#forge:glass_panes',
		A: 'create:andesite_alloy',
		R: 'create:polished_rose_quartz'
	})
	event.shaped('computercraft:monitor_advanced', [
		'BBB',
		'BGB',
		'BBB'
	], {
		B: 'create:brass_sheet',
		G: '#forge:glass_panes'
	})
	event.shaped('forbidden_arcanus:obsidian_with_iron', [
		' I ',
		'IOI',
		' I '
	], {
		I: 'minecraft:iron_nugget',
		O: 'create:powdered_obsidian'
	})
	event.shaped('minecraft:sculk_sensor', [
		' V ',
		'VOV',
		'SSS'
	], {
		S: 'minecraft:sculk',
		V: 'minecraft:sculk_vein',
		O: 'minecraft:observer'
	})
	event.shaped('refinedstorage:controller', [
		'QCQ',
		'CMC',
		'QCQ'
	], {
		M: 'refinedstorage:machine_casing',
		C: 'ae2:fluix_crystal',
		Q: 'refinedstorage:quartz_enriched_iron'
	})
	event.shaped('kubejs:quartz_mesh', [
		'SQS',
		'QMQ',
		'SQS'
	], {
		S: 'minecraft:stick',
		Q: 'minecraft:quartz',
		M: 'createsifter:string_mesh'
	})
	event.shaped('kubejs:diamond_mesh', [
		'SDS',
		'DMD',
		'SDS'
	], {
		D: 'minecraft:diamond',
		S: 'minecraft:stick',
		M: 'createsifter:brass_mesh'
	})
	event.shaped('createsifter:brass_mesh', [
		'SBS',
		'BMB',
		'SBS'
	], {
		B: 'create:brass_ingot',
		S: 'minecraft:stick',
		M: 'createsifter:zinc_mesh'
	})
	event.shaped('createsifter:zinc_mesh', [
		'SZS',
		'ZMZ',
		'SZS'
	], {
		Z: 'create:zinc_ingot',
		S: 'minecraft:stick',
		M: 'createsifter:andesite_mesh'
	})
	event.shaped('createsifter:andesite_mesh', [
		'SAS',
		'AMA',
		'SAS'
	], {
		A: 'create:andesite_alloy',
		S: 'minecraft:stick',
		M: 'createsifter:string_mesh'
	})
	event.shaped('create:steam_engine', [
		'III',
		'BAB',
		'CDC'
	], {
		I: 'create:iron_sheet',
		B: 'create:brass_nugget',
		A: 'create:andesite_alloy',
		C: 'create:copper_sheet',
		D: 'minecraft:copper_block'
	})
	event.shaped('create:smart_fluid_pipe', [
		'B',
		'P',
		'R'
	], {
		B: 'create:brass_sheet',
		P: 'create:fluid_pipe',
		R: 'minecraft:redstone'
	})
	event.shaped('toms_storage:ts.inventory_cable_connector_filtered', [
		'I',
		'S',
		'P'
	], {
		P: 'create:electron_tube',
		S: 'toms_storage:ts.inventory_cable_connector',
		I: 'create:brass_sheet'
	})

	event.shaped('toms_storage:ts.inventory_cable_connector_framed', [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: 'toms_storage:ts.inventory_cable_connector',
		S: 'minecraft:stick'
	})

	event.shaped('toms_storage:ts.open_crate', [
		'PSP',
		'PCP',
		'PTP'
	], {
		P: '#minecraft:planks',
		C: '#forge:chests/wooden',
		S: 'minecraft:stick',
		T: '#minecraft:trapdoors'
	})

	event.shaped('toms_storage:ts.inventory_cable_framed', [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: 'toms_storage:ts.inventory_cable',
		S: 'minecraft:stick'
	})

	event.shaped('toms_storage:ts.storage_terminal', [
		' C ',
		'cGg',
		'PPP'
	], {
		C: 'create:precision_mechanism',
		c: 'create:content_observer',
		P: '#minecraft:buttons',
		G: 'create:display_link',
		g: 'create:display_board',
	})

	event.shaped('2x toms_storage:ts.trim', [
		'SXS',
		'SSS',
		'SSS'
	], {
		S: 'minecraft:stick',
		X: 'create:brass_tunnel'
	})

	// craft hanging_roots
	event.shaped('minecraft:hanging_roots', [
		' S ',
		'S S'
	], {
		S: 'minecraft:stick'
	})

	// Craft shaped rooted_dirt 	
	event.shaped('2x minecraft:rooted_dirt', [
		'HD',
		'DH'
	], {
		H: 'minecraft:hanging_roots',
		D: 'minecraft:dirt'
	})

	// Spawner recipe
	event.shaped('minecraft:spawner', [
		'BBB',
		'BSB',
		'BBB'
	], {
		B: 'createdeco:netherite_bars',
		S: 'minecraft:nether_star'
	})

	event.shapeless('4x create:experience_nugget', [
		'create_sa:heap_of_experience'
	]
	)
	event.shapeless('createcompression:compressed_experience_1x', [
		'9x create:experience_block'
	]
	)
	event.shapeless('9x create:experience_block', [
		'createcompression:compressed_experience_1x'
	]
	)
	event.shapeless('2x createindustry:fireclay_ball', [
		'minecraft:clay_ball',
		'create:cinder_flour'
	]
	)
	event.shapeless('toms_storage:ts.inventory_cable_connector', [
		'toms_storage:ts.inventory_cable',
		'create:chute'
	]
	)
	event.shapeless('toms_storage:ts.inventory_connector', [
		'create:brass_casing',
		'create:chute'
	]
	)
	event.shapeless('toms_storage:ts.inventory_proxy', [
		'toms_storage:ts.inventory_connector',
		'create:chute'
	]
	)
	event.shapeless('toms_storage:ts.level_emitter', [
		'create:content_observer',
		'toms_storage:ts.inventory_cable'
	]
	)

	event.shapeless('toms_storage:ts.trim', [
		'toms_storage:ts.painted_trim',
		'minecraft:water_bucket'
	]
	)

	event.shapeless('toms_storage:ts.wireless_terminal', [
		'toms_storage:ts.storage_terminal',
		'create:redstone_link'
	]
	)
	event.shapeless('9x forbidden_arcanus:rune', [
		'forbidden_arcanus:rune_block'
	]
	)
	event.shapeless('4x minecraft:shroomlight', [
		'minecraft:brown_mushroom_block',
		'3x minecraft:glowstone_dust'
	]
	)
	event.shapeless('4x minecraft:shroomlight', [
		'minecraft:red_mushroom_block',
		'3x minecraft:glowstone_dust'
	]
	)
	event.shapeless('minecraft:blaze_rod', [
		'2x minecraft:blaze_powder'
	]
	)
	event.shapeless('summoningrituals:altar', [
		'minecraft:crafting_table',
		'minecraft:candle'
	]
	)
	event.shapeless('kubejs:cow_bait', [
		'2x minecraft:wheat'
	]
	)
	event.shapeless('kubejs:sheep_bait', [
		'minecraft:wheat',
		'minecraft:wheat_seeds'
	]
	)
	event.shapeless('kubejs:chicken_bait', [
		'2x minecraft:wheat_seeds'
	]
	)
	event.shapeless('kubejs:pig_bait', [
		'2x minecraft:carrot'
	]
	)
	event.shapeless('kubejs:wolf_bait', [
		'minecraft:bone',
		'minecraft:beef'
	]
	)
	event.shapeless('kubejs:ocelot_bait', [
		'minecraft:gunpowder',
		'#forge:raw_fishes'
	]
	)
	event.shapeless('kubejs:squid_bait', [
		'2x #forge:raw_fishes'
	]
	)
	event.shapeless('kubejs:glow_squid_bait', [
		'2x #forge:raw_fishes',
		'minecraft:glow_berries'
	]
	)
	event.shapeless('kubejs:rabbit_bait', [
		'minecraft:carrot',
		'minecraft:melon_seeds'
	]
	)
	event.shapeless('kubejs:polar_beer_bait', [
		'#forge:raw_fishes',
		'minecraft:snowball'
	]
	)
	event.shapeless('kubejs:llama_bait', [
		'minecraft:wheat',
		'minecraft:sugar'
	]
	)
	event.shapeless('kubejs:parrot_bait', [
		'#forge:dyes/green',
		'#forge:dyes/red'
	]
	)
	event.shapeless('kubejs:cat_bait', [
		'2x minecraft:carrot',
		'minecraft:lead'
	]
	)
	event.shapeless('kubejs:fox_bait', [
		'minecraft:sweet_berries',
		'minecraft:rabbit'
	]
	)
	event.shapeless('kubejs:turtle_bait', [
		'minecraft:seagrass',
		'minecraft:sea_pickle'
	]
	)
	event.shapeless('kubejs:mooshroom_bait', [
		'minecraft:red_mushroom',
		'minecraft:wheat'
	]
	)
	event.shapeless('kubejs:bee_bait', [
		'2x #minecraft:small_flowers'
	]
	)

	event.shapeless('kubejs:silver_block', [
		'9x kubejs:silver_ingot'
	]
	)
	event.shapeless('9x kubejs:silver_ingot', [
		'kubejs:silver_block'
	]
	)
	event.shapeless('9x kubejs:silver_nugget', [
		'kubejs:silver_ingot'
	]
	)
	event.shapeless('kubejs:silver_ingot', [
		'9x kubejs:silver_nugget'
	]
	)
	event.shapeless('kubejs:raw_silver_block', [
		'9x kubejs:raw_silver'
	]
	)
	event.shapeless('9x kubejs:raw_silver', [
		'kubejs:raw_silver_block'
	]
	)

	event.shapeless('create:experience_block', [
		'9x create_sa:heap_of_experience'
	]
	)
	event.shapeless('9x create_sa:heap_of_experience', [
		'create:experience_block'
	]
	)
	event.smelting('minecraft:bread', 'create:dough')
	event.smoking('minecraft:bread', 'create:dough')
	event.custom({
		type: "create_enchantment_industry:disenchanting",
			ingredients: [
				{
					item: 'create:experience_block'
				}
			],
				results: [
					{
						"fluid": "create_enchantment_industry:experience",
						"amount": 108
					}
				]
	})

});

BlockEvents.rightClicked("block.right_click", (event) => {
	const { block, hand, world, item, player } = event;
	if (hand.name() != "MAIN_HAND") return;

	if (item == "create:wrench" && player.isCrouching()) {
		if (block.equals("minecraft:spawner")) {
			block.set("minecraft:air");
			player.give("minecraft:spawner");
		}
		if (block.equals("minecraft:budding_amethyst")) {
			block.set("minecraft:air");
			player.give("minecraft:budding_amethyst");
		}
		if (block.equals("minecraft:end_portal_frame")) {
			const hasEnderEye = block.properties.eye;
			block.set("minecraft:air");
			player.give("minecraft:end_portal_frame");
			if (hasEnderEye == "true") {
				player.give("minecraft:ender_eye");
			}
		}
	}
});
/*
//Allows Player to waterlog the sifter
BlockEvents.rightClicked('createsifter:sifter', event => {
	const { item, hand, player, block } = event;
	if (hand != "MAIN_HAND") return;
	if (item.id == 'minecraft:water_bucket') {
		if (block.properties.waterlogged == 'false') {
			block.set('createsifter:sifter', { waterlogged: true });
			player.setMainHandItem('minecraft:bucket');
		}
	} else if (item.id == 'minecraft:bucket') {
		if (block.properties.waterlogged == 'true') {
			block.set('createsifter:sifter', { waterlogged: false });
			item.count--;
			player.give('minecraft:water_bucket');
		}
	}
})
*/