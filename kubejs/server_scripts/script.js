// priority: 0

ServerEvents.recipes(event => {
	const REMOVED_BY_OUTPUT = ['createsifter:brass_mesh', 'createsifter:zinc_mesh', 'createsifter:andesite_mesh', 'forbidden_arcanus:rune', 'forbidden_arcanus:obsidian_with_iron', 'computercraft:computer_advanced', 'computercraft:computer_normal', 'fluxnetworks:basic_flux_storage', 'fluxnetworks:herculean_flux_storage', 'fluxnetworks:gargantuan_flux_storage', '#create_sa:jetpack', 'craftingcraft:portable_crafting', 'craftingcraft:inventory_crafting', 'ae2:charger', 'create:crushed_raw_lead', 'create:crushed_raw_tin', 'create:crushed_raw_uranium', 'mekanism:industrial_alarm', 'mekanism:fluidic_plenisher', 'mekanism:resistive_heater', 'quark:charcoal_block', 'mekanism:rotary_condensentrator', 'mekanism:chemical_washer', 'refinedstorage:controller', 'refinedstorage:silicon', 'refinedstorage:machine_casing', 'refinedstorage:raw_advanced_processor', 'refinedstorage:raw_basic_processor', 'refinedstorage:raw_improved_processor', 'toms_storage:ts.crafting_terminal', 'minecraft:packed_mud', 'minecraft:packed_ice', 'minecraft:ice', 'minecraft:blue_ice', 'createdeco:zinc_sheet', 'wstweaks:lava_blade', 'wstweaks:blaze_blade', 'create:smart_fluid_pipe', 'create:steam_engine', 'toms_storage:ts.inventory_cable_connector_filtered', 'toms_storage:ts.inventory_cable_connector_framed', 'toms_storage:ts.inventory_cable_framed', 'toms_storage:ts.open_crate', 'toms_storage:ts.paint_kit', 'toms_storage:ts.storage_terminal', 'toms_storage:ts.trim', 'toms_storage:ts.inventory_cable_connector', 'toms_storage:ts.inventory_connector', 'toms_storage:ts.inventory_proxy', 'toms_storage:ts.level_emitter', 'toms_storage:ts.trim', 'toms_storage:ts.wireless_terminal', 'farmersdelight:wheat_dough', 'angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring', 'angelring:energetic_angel_ring'];
	// remove items in array
	REMOVED_BY_OUTPUT.forEach(id => event.remove({ output: id }));
	event.remove({ output: 'create:cinder_flour', type: 'create:crushing' })
	event.remove({ output: 'minecraft:flint', type: 'create:milling' })
	event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal'})
	event.remove({ id: 'forbidden_arcanus:dark_rune'})
	event.remove({ id: 'createaddition:crafting/large_connector_electrum'})
	event.remove({ id: 'createaddition:crafting/electrum_ingot'})
	event.remove({ id: 'createaddition:crafting/electrum_nugget'})
	event.remove({ id: 'createaddition:crafting/electrum_spool'})
	event.remove({ id: 'createaddition:rolling/electrum_ingot'})
	event.remove({ id: 'createaddition:rolling/electrum_plate'})
	event.remove({ id: 'createaddition:mixing/electrum'})
	event.smithing(
		'kubejs:netherite_mesh',  // arg 1: output
		'kubejs:diamond_mesh', // arg 2: the item to be upgraded
		'minecraft:netherite_ingot'   // arg 3: the upgraded item
	)
	event.shaped('forbidden_arcanus:obsidian_with_iron', [
		' I ',
		'IOI',
		' I '
	], {
		I: 'minecraft:iron_nugget',
		O: 'create:powdered_obsidian'
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

	event.shaped('toms_storage:ts.paint_kit', [
		'RGB',
		'IaW',
		'bS'
	], {
		b: 'minecraft:water_bucket',
		a: 'minecraft:bucket',
		R: '#forge:dyes/red',
		G: '#forge:dyes/green',
		B: '#forge:dyes/blue',
		W: '#minecraft:wool',
		S: 'minecraft:stick',
		I: '#forge:dyes/black'
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
	event.shaped('computercraft:computer_normal', [
		'SSS',
		'SNS',
		'SDS'
	], {
		S: '#forge:stone',
		N: 'create:nixie_tube',
		D: 'create:display_board'
	})
	event.shaped('computercraft:computer_advanced', [
		'GGG',
		'GNG',
		'GDG'
	], {
		G: 'minecraft:gold_ingot',
		N: 'create:nixie_tube',
		D: 'create:display_board'
	})
	event.shaped('computercraft:computer_advanced', [
		'GGG',
		'GCG',
		'G G'
	], {
		G: 'minecraft:gold_ingot',
		C: 'computercraft:computer_normal'
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
	event.smelting('minecraft:bread', 'create:dough')
	event.smoking('minecraft:bread', 'create:dough')

});

BlockEvents.rightClicked("block.right_click", (event) => {
	const { block, hand, world, item, player } = event;
	if (hand.name() != "MAIN_HAND") return;

	if (item == "minecraft:prismarine_shard") {
		if (block.equals('botania:cocoon')) {
			if (block.properties.waterlogged == 'true') {
				//Remove one prismarine shard from hand
				//increase chance to spawn elder guardian or guardian by percentage
			}
		}
	}

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

BlockEvents.rightClicked('minecraft:dirt', event => {
	const { item, hand, player } = event
	if (hand != "MAIN_HAND") return
	if (item.id == 'kubejs:mycelium_spores') {
		item.count--
		player.tell("The spores begin to absorb into the block")
		event.server.scheduleInTicks(10, (_) => {
			event.block.set('minecraft:mycelium')
		})
	}
})
BlockEvents.rightClicked('minecraft:grass_block', event => {
	const { item, hand, player } = event
	if (hand != "MAIN_HAND") return
	if (item.id == 'kubejs:mycelium_spores') {
		item.count--
		player.tell("The spores begin to absorb into the block")
		event.server.scheduleInTicks(10, (_) => {
			event.block.set('minecraft:mycelium')
		})
	}
})

BlockEvents.rightClicked('minecraft:netherrack', event => {
	const { item, hand, player, block } = event
	if (hand != "MAIN_HAND") return

	if (item.id == 'kubejs:warped_nylium_spores') {
		item.count--
		player.tell("The spores begin to absorb into the netherrack")
		event.server.scheduleInTicks(10, (_) => {
			event.block.set('minecraft:warped_nylium')
		})
	}
	if (item.id == 'kubejs:crimson_nylium_spores') {
		item.count--
		player.tell("The spores begin to absorb into the netherrack")
		event.server.scheduleInTicks(10, (_) => {
			event.block.set('minecraft:crimson_nylium')
		})
	}
})