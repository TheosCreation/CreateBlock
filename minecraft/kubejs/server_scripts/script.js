// priority: 0

ServerEvents.recipes(event => {
	const REMOVED_BY_OUTPUT = ['computercraft:monitor_advanced', 'forbidden_arcanus:dark_matter', 'createsifter:advanced_brass_mesh', /*'createindustry:steel_fluid_tank', */ 'chancecubes:chance_cube', 'quark:sturdy_stone', 'forbidden_arcanus:corrupted_pixie', 'createsifter:brass_mesh', 'createsifter:zinc_mesh', 'createsifter:andesite_mesh', 'forbidden_arcanus:rune', 'forbidden_arcanus:obsidian_with_iron', 'computercraft:computer_advanced', 'computercraft:computer_normal', '#create_sa:jetpack', 'craftingcraft:portable_crafting', 'craftingcraft:inventory_crafting', 'ae2:charger', 'create:crushed_raw_lead', 'create:crushed_raw_tin', 'create:crushed_raw_uranium', 'quark:charcoal_block', 'refinedstorage:controller', 'refinedstorage:silicon', 'refinedstorage:machine_casing', 'refinedstorage:raw_advanced_processor', 'refinedstorage:raw_basic_processor', 'refinedstorage:raw_improved_processor', 'toms_storage:ts.crafting_terminal', 'minecraft:packed_mud', 'minecraft:packed_ice', 'minecraft:ice', 'minecraft:blue_ice', 'createdeco:zinc_sheet', 'wstweaks:lava_blade', 'wstweaks:blaze_blade', 'create:smart_fluid_pipe', 'create:steam_engine', 'toms_storage:ts.inventory_cable_connector_filtered', 'toms_storage:ts.inventory_cable_connector_framed', 'toms_storage:ts.inventory_cable_framed', 'toms_storage:ts.open_crate', 'toms_storage:ts.storage_terminal', 'toms_storage:ts.trim', 'toms_storage:ts.inventory_cable_connector', 'toms_storage:ts.inventory_connector', 'toms_storage:ts.inventory_proxy', 'toms_storage:ts.level_emitter', 'toms_storage:ts.trim', 'toms_storage:ts.wireless_terminal', 'farmersdelight:wheat_dough', 'angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring', 'angelring:energetic_angel_ring'];
	// remove items in array
	REMOVED_BY_OUTPUT.forEach(id => event.remove({ output: id }));
	event.remove({ output: 'create:cinder_flour', type: 'create:crushing' })
	event.remove({ input: 'minecraft:end_stone', type: 'create:crushing' })
	event.remove({ input: 'minecraft:end_stone', type: 'create:milling' })
	event.remove({ output: 'create:cinder_flour', type: 'create:crushing' })
	event.remove({ output: 'minecraft:flint', type: 'create:milling' })
	
	event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal'})
	event.remove({ id: 'forbidden_arcanus:dark_rune'})
	event.remove({ id: 'create:washing_cobble_to_tuff' })
	event.remove({ id: 'create:haunting/soul_sand' })
	event.remove({ id: 'create:haunting/soul_soil' })
	event.remove({ id: 'ars_nouveau:conjuration_essence_to_soul_sand' })
	event.remove({ id: 'forbidden_arcanus:polished_darkstone' })
	event.smithing(
		'kubejs:netherite_mesh',  // arg 1: output
		'kubejs:diamond_mesh', // arg 2: the item to be upgraded
		'minecraft:netherite_ingot'   // arg 3: the upgraded item
	)
	let Blocks = ['Coal', 'Quartz', 'Lapis', 'Snow', 'Iron', 'Diamond', 'Gold', 'Emerald', 'Netherite', 'Copper', 'Honey', 'Dripstone']
	Blocks.forEach(item => {
		let name = item.toLowerCase().replace(/ /g, "_");
		event.shaped('kubejs:' + name + '_1x', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'minecraft:' + name + '_block'
		})
		event.shapeless('9x kubejs:' + name + '_1x', [
			'kubejs:' + name + '_2x'
		]
		)
		event.shapeless('9x minecraft:' + name + '_block', [
			'kubejs:' + name + '_1x'
		]
		)
		for (let i = 2; i < 10; i++) {
			event.shaped('kubejs:' + name + `_${i}x`, [
				'AAA',
				'AAA',
				'AAA'
			], {
				A: 'kubejs:' + name + `_${i - 1}x`
			})
			if (i < 9) {
				event.shapeless('9x kubejs:' + name + `_${i}x`, [
					'kubejs:' + name + `_${i + 1}x`
				]
				)
			}
		}
	})
	let CreateBlocks = ['Brass', 'Zinc']
	CreateBlocks.forEach(item => {
		let name = item.toLowerCase().replace(/ /g, "_");
		event.shaped('kubejs:' + name + '_1x', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'create:' + name + '_block'
		})
		event.shapeless('9x kubejs:' + name + '_1x', [
			'kubejs:' + name + '_2x'
		]
		)
		event.shapeless('9x create:' + name + '_block', [
			'kubejs:' + name + '_1x'
		]
		)
		for (let i = 2; i < 10; i++) {
			event.shaped('kubejs:' + name + `_${i}x`, [
				'AAA',
				'AAA',
				'AAA'
			], {
				A: 'kubejs:' + name + `_${i - 1}x`
			})
			if (i < 9) {
				event.shapeless('9x kubejs:' + name + `_${i}x`, [
					'kubejs:' + name + `_${i + 1}x`
				]
				)
			}
		}
	})
	let Others = ['Andesite', 'Cobbled Deepslate', 'Cobblestone', 'Deepslate', 'Stone', 'Diorite', 'Granite', 'Obsidian', 'End Stone', 'Sand', 'Red Sand', 'Gravel', 'Dirt', 'Clay', 'Netherrack', 'Soul Sand', 'Glass', 'Glowstone', 'Packed Ice', 'Tuff', 'Nether Bricks']
	Others.forEach(item => {
		let name = item.toLowerCase().replace(/ /g, "_");
		event.shaped('kubejs:' + name + '_1x', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'minecraft:' + name
		})
		event.shapeless('9x kubejs:' + name + '_1x', [
			'kubejs:' + name + '_2x'
		]
		)
		event.shapeless('9x minecraft:' + name, [
			'kubejs:' + name + '_1x'
		]
		)
		for (let i = 2; i < 10; i++) {
			event.shaped('kubejs:' + name + `_${i}x`, [
				'AAA',
				'AAA',
				'AAA'
			], {
				A: 'kubejs:' + name + `_${i - 1}x`
			})
			if (i < 9) {
				event.shapeless('9x kubejs:' + name + `_${i}x`, [
					'kubejs:' + name + `_${i + 1}x`
				]
				)
			}
		}

	})
	/*
	event.shaped('createindustry:steel_fluid_tank', [
		' S ',
		' B ',
		' S '
	], {
		B: 'minecraft:barrel',
		S: 'createindustry:heavy_plate'
	})
	*/
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

	event.shaped('minecraft:zombie_spawn_egg', [
		'FFF',
		'FEF',
		'FFF'
	], {
		E: 'minecraft:egg',
		F: 'minecraft:rotten_flesh'
	})

	event.shaped('minecraft:spider_spawn_egg', [
		'SSS',
		'SES',
		'SSS'
	], {
		E: 'minecraft:egg',
		S: 'minecraft:string'
	})

	event.shaped('minecraft:skeleton_spawn_egg', [
		'BBB',
		'BEB',
		'BBB'
	], {
		E: 'minecraft:egg',
		B: 'minecraft:bone'
	})

	event.shaped('minecraft:creeper_spawn_egg', [
		'GGG',
		'GEG',
		'GGG'
	], {
		E: 'minecraft:egg',
		G: 'minecraft:gunpowder'
	})

	event.shaped('minecraft:enderman_spawn_egg', [
		'PPP',
		'PEP',
		'PPP'
	], {
		E: 'minecraft:egg',
		P: 'minecraft:ender_pearl'
	})

	event.shaped('minecraft:wither_skeleton_spawn_egg', [
		'FFF',
		'FEF',
		'FFF'
	], {
		E: 'minecraft:egg',
		F: 'wstweaks:fragment'
	})

	event.shaped('minecraft:blaze_spawn_egg', [
		'BBB',
		'BEB',
		'BBB'
	], {
		E: 'minecraft:egg',
		B: 'minecraft:blaze_powder'
	})

	// Craft shaped end portal frame	
	event.shaped('minecraft:end_portal_frame', [
		'SSS',
		'SES',
		'SSS'
	], {
		S: 'minecraft:end_stone',
		E: 'minecraft:ender_eye'
	})

	// craft hanging_roots
	event.shaped('minecraft:hanging_roots', [
		' S ',
		'S S'
	], {
		S: 'minecraft:stick'
	})

	// Craft shaped sculk catalyst 	
	event.shaped('minecraft:sculk_catalyst', [
		'SQS',
		'QDQ',
		'SQS'
	], {
		S: 'minecraft:sculk',
		Q: 'minecraft:quartz',
		D: 'minecraft:diamond'
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

	// Pillager spawn egg recipe
	event.shaped('minecraft:pillager_spawn_egg', [
		'W',
		'A'
	], {
		W: 'minecraft:witch_spawn_egg',
		A: 'minecraft:crossbow'
	})

	// Evoker spawn egg recipe
	event.shaped('minecraft:evoker_spawn_egg', [
		'W',
		'A'
	], {
		W: 'minecraft:pillager_spawn_egg',
		A: 'minecraft:iron_axe'
	})

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
	event.shapeless('kubejs:nether_star_block', [
		'9x minecraft:nether_star'
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
	event.smelting('minecraft:bread', 'create:dough')
	event.smoking('minecraft:bread', 'create:dough')

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