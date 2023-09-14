ServerEvents.recipes(event => {
	//item application
	event.recipes.create.item_application(['create:shadow_steel_casing'], [['#forge:stripped_wood', '#forge:stripped_logs'], 'create:shadow_steel'])
	event.recipes.create.item_application(['create:refined_radiance_casing'], [['#forge:stripped_wood', '#forge:stripped_logs'], 'create:refined_radiance'])
	event.recipes.create.item_application(['minecraft:soul_sand'], ['forbidden_arcanus:soulless_sand', 'forbidden_arcanus:soul'])
	event.recipes.create.item_application(['minecraft:soul_soil'], ['kubejs:soulless_soil', 'forbidden_arcanus:soul'])
	event.recipes.create.item_application(['kubejs:soulless_soil', 'forbidden_arcanus:soul'], ['minecraft:soul_soil', 'forbidden_arcanus:soul_extractor']).keepHeldItem()
	event.recipes.create.item_application(['kubejs:soulless_soil'], ['#minecraft:dirt', 'quark:soul_bead'])
	event.recipes.create.item_application(['forbidden_arcanus:soulless_sand', 'forbidden_arcanus:soul'], ['minecraft:soul_sand', 'forbidden_arcanus:soul_extractor']).keepHeldItem()
	event.recipes.create.item_application(['forbidden_arcanus:soulless_sand'], ['#minecraft:sand', 'quark:soul_bead'])
	event.recipes.create.item_application(['kubejs:warping_block'], ['minecraft:diamond_block', 'forbidden_arcanus:dark_matter'])
	//event.recipes.create.item_application(['minecraft:netherrack'], ['kubejs:cracked_stone', 'minecraft:redstone'])
	//emptying refined radiance into refined fluid
	event.recipes.create.emptying([Fluid.of('kubejs:refined_fluid', 1000)], 'create:refined_radiance')
	//filling nether star with refined essence into Radiating Star
	event.recipes.create.filling('kubejs:rad_star', [Fluid.of('kubejs:refined_fluid', 1000), 'minecraft:nether_star'])
	//filling electron tube with rainbow essence into chomatic tube
	event.recipes.create.filling('kubejs:chromatic_tube', [Fluid.of('kubejs:rainbow', 1000), 'create:electron_tube'])
	//press darkstone to have a chance of getting dark rune
	event.recipes.create.pressing(Item.of('forbidden_arcanus:dark_rune').withChance(0.5), 'forbidden_arcanus:darkstone')
	//washing dark rune to get normal rune
	event.recipes.create.splashing('forbidden_arcanus:rune', 'forbidden_arcanus:dark_rune')

	event.recipes.create.haunting('minecraft:charcoal', 'minecraft:coal')
	event.recipes.create.haunting('minecraft:echo_shard', 'minecraft:amethyst_shard')
	event.recipes.create.haunting('forbidden_arcanus:corrupt_soul', 'forbidden_arcanus:soul')
	event.recipes.create.haunting('kubejs:soulless_soil', '#minecraft:dirt')
	event.recipes.create.haunting('forbidden_arcanus:soulless_sand', '#minecraft:sand')

	event.recipes.create.deploying('forbidden_arcanus:corrupted_pixie', ['forbidden_arcanus:corrupt_soul', 'forbidden_arcanus:arcane_crystal_dust'])
	event.recipes.create.deploying('forbidden_arcanus:pixie', ['forbidden_arcanus:soul', 'forbidden_arcanus:arcane_crystal_dust'])

	event.recipes.create.milling('4x minecraft:snowball', 'minecraft:snow_block')
	event.recipes.create.crushing('4x minecraft:snowball', 'minecraft:snow_block')

	event.recipes.create.compacting(Fluid.of('kubejs:sourceberry', 100), 'ars_nouveau:source_berry')
	event.recipes.create.compacting(Fluid.of('kubejs:magebloom', 100), 'ars_nouveau:magebloom')
	event.recipes.create.compacting(Fluid.of('kubejs:rainbow', 1000), 'create:chromatic_compound').superheated()
	event.recipes.create.compacting([Fluid.of('water', 10), 'dead_bush'], ['#minecraft:saplings', '#minecraft:saplings'])
	event.recipes.create.compacting('minecraft:ice', [Fluid.of('water', 1000), 'minecraft:snowball'])
	event.recipes.create.compacting('minecraft:packed_ice', [Fluid.of('water', 200), 'minecraft:ice'])
	event.recipes.create.compacting('minecraft:blue_ice', [Fluid.of('water', 200), 'minecraft:blue_dye', 'minecraft:packed_ice'])
	event.recipes.create.compacting('minecraft:packed_mud', ['2x minecraft:mud', 'farmersdelight:straw'])
	event.recipes.create.compacting('minecraft:packed_mud', ['minecraft:mud', 'minecraft:wheat'])
	event.recipes.create.compacting('forbidden_arcanus:arcane_crystal', 'forbidden_arcanus:arcane_crystal_dust')

	event.recipes.create.mixing('create:chromatic_compound', ['3x minecraft:glowstone_dust', '3x create:powdered_obsidian', 'create:polished_rose_quartz']).superheated()
	event.recipes.create.mixing(Fluid.of('kubejs:magic', 1000), [Fluid.of('kubejs:source', 1000), 'create:polished_rose_quartz', 'botania:mana_diamond']).heated()
	event.recipes.create.mixing(Fluid.of('kubejs:source', 1000), [Fluid.of('kubejs:sourceberry', 500), Fluid.of('kubejs:magebloom', 500)])

	event.recipes.create.mechanical_crafting('toms_storage:ts.crafting_terminal', [
		' T ',
		'CCC',
		'CCC',
		'CCC',
		'SML'
	], {
		C: 'create:mechanical_crafter',
		S: 'create:sturdy_sheet',
		L: 'create:linked_controller',
		M: 'create:precision_mechanism',
		T: 'toms_storage:ts.storage_terminal'
	})

	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "create:iron_sheet",
		},
		loops: 1,
		results: [
			{
				chance: 90.0,
				item: "refinedstorage:raw_basic_processor",
			},
			{
				chance: 5.0,
				item: "create:iron_sheet",
			},
			{
				chance: 5.0,
				item: "create:cogwheel",
			},
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_basic_processor",
					},
					{
						item: "refinedstorage:processor_binding",
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_basic_processor",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_basic_processor",
					},
					{
						item: 'ae2:printed_silicon',
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_basic_processor",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_basic_processor",
					},
					{
						item: "minecraft:redstone",
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_basic_processor",
					},
				],
			},
		],
		transitionalItem: {
			item: "kubejs:incomplete_raw_basic_processor",
		},
	});
	//fluid tank
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "minecraft:barrel",
		},
		loops: 1,
		results: [
			{
				item: "create:fluid_tank",
			}
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "minecraft:barrel",
					},
					{
						item: "create:copper_sheet",
					},
				],
				results: [
					{
						item: "minecraft:barrel",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "minecraft:barrel",
					},
					{
						item: "create:copper_sheet",
					},
				],
				results: [
					{
						item: "minecraft:barrel",
					},
				],
			},
		],
		transitionalItem: {
			item: "minecraft:barrel",
		},
	});
	//item vault
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "minecraft:barrel",
		},
		loops: 1,
		results: [
			{
				item: "create:item_vault",
			}
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "minecraft:barrel",
					},
					{
						item: "create:iron_sheet",
					},
				],
				results: [
					{
						item: "minecraft:barrel",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "minecraft:barrel",
					},
					{
						item: "create:iron_sheet",
					},
				],
				results: [
					{
						item: "minecraft:barrel",
					},
				],
			},
		],
		transitionalItem: {
			item: "minecraft:barrel",
		},
	});
	//Gearbox
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "create:andesite_casing",
		},
		loops: 1,
		results: [
			{
				item: "create:gearbox",
			}
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "create:andesite_casing",
					},
					{
						item: "create:cogwheel",
					},
				],
				results: [
					{
						item: "create:andesite_casing",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "create:andesite_casing",
					},
					{
						item: "create:cogwheel",
					},
				],
				results: [
					{
						item: "create:andesite_casing",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "create:andesite_casing",
					},
					{
						item: "create:cogwheel",
					},
				],
				results: [
					{
						item: "create:andesite_casing",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "create:andesite_casing",
					},
					{
						item: "create:cogwheel",
					},
				],
				results: [
					{
						item: "create:andesite_casing",
					},
				],
			},
		],
		transitionalItem: {
			item: "create:andesite_casing",
		},
	});
	// Raw Improved Processor
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "create:golden_sheet",
		},
		loops: 1,
		results: [
			{
				chance: 90.0,
				item: "refinedstorage:raw_improved_processor",
			},
			{
				chance: 5.0,
				item: "create:golden_sheet",
			},
			{
				chance: 5.0,
				item: "create:cogwheel",
			},
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_improved_processor",
					},
					{
						item: "refinedstorage:processor_binding",
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_improved_processor",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_improved_processor",
					},
					{
						item: 'ae2:printed_silicon',
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_improved_processor",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_improved_processor",
					},
					{
						item: "minecraft:redstone",
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_improved_processor",
					},
				],
			},
		],
		transitionalItem: {
			item: "kubejs:incomplete_raw_improved_processor",
		},
	});

	// Raw advanced processor
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "minecraft:diamond",
		},
		loops: 1,
		results: [
			{
				chance: 90.0,
				item: "refinedstorage:raw_advanced_processor",
			},
			{
				chance: 5.0,
				item: "minecraft:diamond",
			},
			{
				chance: 5.0,
				item: "create:cogwheel",
			},
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_advanced_processor",
					},
					{
						item: "refinedstorage:processor_binding",
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_advanced_processor",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_advanced_processor",
					},
					{
						item: 'ae2:printed_silicon',
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_advanced_processor",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_advanced_processor",
					},
					{
						item: "minecraft:redstone",
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_advanced_processor",
					},
				],
			},
		],
		transitionalItem: {
			item: "kubejs:incomplete_raw_advanced_processor",
		},
	});

	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			tag: "forge:stone",
		},
		loops: 1,
		results: [
			{
				item: "refinedstorage:machine_casing",
			},
		],
		sequence: [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_machine_casing",
					},
					[
						{
							item: "refinedstorage:quartz_enriched_iron",
						},
					],
				],
				results: [
					{
						item: "kubejs:incomplete_machine_casing",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_machine_casing",
					},
					[
						{
							item: "refinedstorage:quartz_enriched_iron",
						},
					],
				],
				results: [
					{
						item: "kubejs:incomplete_machine_casing",
					},
				],
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:incomplete_machine_casing",
					},
				],
				results: [
					{
						item: "kubejs:incomplete_machine_casing",
					},
				],
			},
		],
		transitionalItem: {
			item: "kubejs:incomplete_machine_casing",
		},
	});
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: 'create:experience_nugget',
		},
		loops: 10,
		results: [
			{
				item: 'forbidden_arcanus:xpetrified_orb',
			}
		],
		sequence: [
			{
				type: "create:pressing",
				ingredients: [
					{
						item: 'create:experience_nugget',
					},
				],
				results: [
					{
						item: 'create:experience_nugget',
					},
				],
			}
		],
		transitionalItem: {
			item: 'create:experience_nugget',
		},
	});
	let IS = 'kubejs:incomplete_cracked_stone'
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:cracked_stone'),
	], 'minecraft:stone', [
		event.recipes.createPressing(IS, IS),
		event.recipes.createFilling(IS, [IS, Fluid.of('minecraft:lava', 1000)])
	]).transitionalItem(IS).loops(1)
	let IN = 'kubejs:incomplete_netherrack'
	event.recipes.createSequencedAssembly([
		Item.of('minecraft:netherrack'),
	], 'kubejs:cracked_stone', [
		event.recipes.createDeploying(IN, [IN, 'minecraft:gunpowder']),
		event.recipes.createDeploying(IN, [IN, 'minecraft:glowstone_dust']),
		event.recipes.createDeploying(IN, [IN, 'minecraft:redstone']),
		event.recipes.createPressing(IN, IN)
	]).transitionalItem(IN).loops(1)
	let IT = 'minecraft:barrel'
	event.recipes.createSequencedAssembly([
		Item.of('createindustry:steel_fluid_tank'),
	], 'minecraft:barrel', [
		event.recipes.createDeploying(IN, [IN, 'createindustry:heavy_plate']),
		event.recipes.createDeploying(IN, [IN, 'createindustry:heavy_plate'])
	]).transitionalItem(IN).loops(1)
	})