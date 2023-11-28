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
	event.recipes.create.item_application(['minecraft:warped_nylium'], ['minecraft:netherrack', 'kubejs:warped_nylium_spores'])
	event.recipes.create.item_application(['minecraft:crimson_nylium'], ['minecraft:netherrack', 'kubejs:crimson_nylium_spores'])
	event.recipes.create.item_application(['minecraft:mycelium'], ['minecraft:grass_block', 'kubejs:mycelium_spores'])
	event.recipes.create.item_application(['forbidden_arcanus:growing_edelwood'], ['architects_palette:twisted_sapling', 'forbidden_arcanus:dark_matter'])
	//event.recipes.create.item_application(['minecraft:netherrack'], ['kubejs:cracked_stone', 'minecraft:redstone'])
	//filling nether star with refined essence into Radiating Star
	event.recipes.create.filling('kubejs:rad_star', [Fluid.of('kubejs:liquid_light', 1000), 'minecraft:nether_star'])
	//filling electron tube with rainbow essence into chomatic tube
	event.recipes.create.filling('kubejs:chromatic_tube', [Fluid.of('kubejs:rainbow', 1000), 'create:electron_tube'])
	event.recipes.create.pressing('kubejs:silver_sheet', 'kubejs:silver_ingot')
	//press darkstone to have a chance of getting dark rune
	event.recipes.create.compacting(Item.of('forbidden_arcanus:dark_rune').withChance(0.5), 'forbidden_arcanus:darkstone')
	event.recipes.create.compacting('create:experience_block', ['minecraft:honeycomb', Fluid.of('create_enchantment_industry:experience', 108)])
	event.recipes.create.compacting('create:experience_block', ['minecraft:slime_ball', Fluid.of('create_enchantment_industry:experience', 108)])
	//washing dark rune to get normal run
	event.recipes.create.splashing('forbidden_arcanus:rune', 'forbidden_arcanus:dark_rune')
	event.recipes.create.splashing(['9x kubejs:silver_nugget', Item.of('minecraft:gold_nugget').withChance(0.5)], 'create:crushed_raw_silver')
	//mixing
	//event.recipes.create.mixing('createaddition:electrum_ingot', ['minecraft:gold_ingot', 'kubejs:silver_ingot']).heated()

	event.recipes.create.haunting('minecraft:charcoal', 'minecraft:coal')
	event.recipes.create.haunting('minecraft:echo_shard', 'minecraft:amethyst_shard')
	event.recipes.create.haunting('forbidden_arcanus:corrupt_soul', 'forbidden_arcanus:soul')
	event.recipes.create.haunting('kubejs:soulless_soil', '#minecraft:dirt')
	event.recipes.create.haunting('forbidden_arcanus:soulless_sand', '#minecraft:sand')

	event.recipes.create.deploying('forbidden_arcanus:corrupted_pixie', ['forbidden_arcanus:corrupt_soul', 'forbidden_arcanus:arcane_crystal_dust'])
	event.recipes.create.deploying('forbidden_arcanus:pixie', ['forbidden_arcanus:soul', 'forbidden_arcanus:arcane_crystal_dust'])
	event.recipes.create.deploying('ae2:silicon_press', ['minecraft:iron_block', 'ae2:silicon_press']).keepHeldItem()
	event.recipes.create.deploying('ae2:logic_processor_press', ['minecraft:iron_block', 'ae2:logic_processor_press']).keepHeldItem()
	event.recipes.create.deploying('ae2:calculation_processor_press', ['minecraft:iron_block', 'ae2:calculation_processor_press']).keepHeldItem()
	event.recipes.create.deploying('ae2:engineering_processor_press', ['minecraft:iron_block', 'ae2:engineering_processor_press']).keepHeldItem()

	event.recipes.create.milling('4x minecraft:snowball', 'minecraft:snow_block')
	event.recipes.create.milling('createsifter:crushed_end_stone', 'minecraft:end_stone')
	event.recipes.create.milling('createsifter:dust', 'minecraft:sand')
	event.recipes.create.milling(Item.of('minecraft:warped_fungus').withChance(0.5), 'minecraft:warped_nylium')
	event.recipes.create.milling(Item.of('minecraft:crimson_fungus').withChance(0.5), 'minecraft:crimson_nylium')
	event.recipes.create.crushing('4x minecraft:snowball', 'minecraft:snow_block')
	event.recipes.create.crushing('createsifter:crushed_end_stone', 'minecraft:end_stone')
	event.recipes.create.crushing('createsifter:dust', 'minecraft:sand')

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
	event.recipes.create.mixing(Fluid.of('kubejs:liquid_light', 1000), [Fluid.of('minecraft:water', 1000), 'create:refined_radiance']).superheated()

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
	event.recipes.create.mechanical_crafting('createindustry:pumpjack_base', [
		'PSP',
		'CAC',
		'PIP'
	], {
		A: 'createindustry:steel_mechanical_pump',
		P: 'createindustry:heavy_plate',
		C: 'createindustry:heavy_machinery_casing',
		I: 'createindustry:industrial_pipe',
		S: 'minecraft:string'
	})
	event.recipes.create.mechanical_crafting('createindustry:pumpjack_hammer_holder', [
		'SSSSB',
		' GT B'
	], {
		B: 'createindustry:steel_block',
		S: 'createindustry:steel_ingot',
		T: 'createindustry:steel_truss',
		G: 'create:shaft'
	})
	event.recipes.create.mechanical_crafting('computercraft:computer_advanced', [
		'BBB',
		'TDT',
		'BMB'
	], {
		T: 'create:nixie_tube',
		B: 'create:brass_sheet',
		D: 'create:display_board',
		M: 'create:precision_mechanism'
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

	// Raw raw super advanced processor
	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
			item: "minecraft:netherite_ingot",
		},
		loops: 1,
		results: [
			{
				chance: 90.0,
				item: 'rebornstorage:raw_super_advanced_processor',
			},
			{
				chance: 5.0,
				item: "minecraft:netherite_ingot",
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
						item: "kubejs:incomplete_raw_super_advanced_processor",
					},
					{
						item: "refinedstorage:processor_binding",
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_super_advanced_processor",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_super_advanced_processor",
					},
					{
						item: 'ae2:printed_silicon',
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_super_advanced_processor",
					},
				],
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:incomplete_raw_super_advanced_processor",
					},
					{
						item: "minecraft:redstone",
					},
				],
				results: [
					{
						item: "kubejs:incomplete_raw_super_advanced_processor",
					},
				],
			},
		],
		transitionalItem: {
			item: "kubejs:incomplete_raw_super_advanced_processor",
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

	//event.recipes.create.deploying(Item.of('ae2:printed_engineering_processor').withChance(0.5), ['minecraft:diamond', 'ae2:engineering_processor_press']).keepHeldItem()
	event.recipes.createSequencedAssembly([
		Item.of('ae2:printed_engineering_processor').withChance(0.5),
		Item.of('minecraft:diamond').withChance(0.5)

	], 'minecraft:diamond', [
		event.recipes.createDeploying('kubejs:incomplete', ['minecraft:diamond', 'ae2:engineering_processor_press']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete').loops(1)

	

	event.recipes.createSequencedAssembly([
		Item.of('ae2:printed_logic_processor').withChance(0.5),
		Item.of('minecraft:gold_ingot').withChance(0.5)
	], 'minecraft:gold_ingot', [
		event.recipes.createDeploying('kubejs:incomplete', ['minecraft:gold_ingot', 'ae2:logic_processor_press']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete').loops(1)

	event.recipes.createSequencedAssembly([
		Item.of('ae2:printed_calculation_processor').withChance(0.5),
		Item.of('ae2:certus_quartz_crystal').withChance(0.5)
	], 'ae2:certus_quartz_crystal', [
		event.recipes.createDeploying('kubejs:incomplete', ['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete').loops(1)

	event.recipes.createSequencedAssembly([
		Item.of('ae2:printed_silicon').withChance(0.5),
		Item.of('ae2:silicon').withChance(0.5)
	], 'ae2:silicon', [
		event.recipes.createDeploying('kubejs:incomplete', ['ae2:silicon', 'ae2:silicon_press']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete').loops(1)

	let I = 'kubejs:incomplete_processor'
	event.recipes.createSequencedAssembly([
		Item.of('ae2:engineering_processor').withChance(0.9),
		Item.of('minecraft:redstone').withChance(0.05),
		Item.of('ae2:printed_engineering_processor').withChance(0.025),
		Item.of('ae2:printed_silicon').withChance(0.025)
	], 'minecraft:redstone', [
		event.recipes.createDeploying(I, [I, 'ae2:printed_engineering_processor']),
		event.recipes.createDeploying(I, [I, 'ae2:printed_silicon'])
	]).transitionalItem(I).loops(1)

	event.recipes.createSequencedAssembly([
		Item.of('ae2:calculation_processor').withChance(0.9),
		Item.of('minecraft:redstone').withChance(0.05),
		Item.of('ae2:printed_calculation_processor').withChance(0.025),
		Item.of('ae2:printed_silicon').withChance(0.025)
	], 'minecraft:redstone', [
		event.recipes.createDeploying(I, [I, 'ae2:printed_calculation_processor']),
		event.recipes.createDeploying(I, [I, 'ae2:printed_silicon'])
	]).transitionalItem(I).loops(1)

	event.recipes.createSequencedAssembly([
		Item.of('ae2:logic_processor').withChance(0.9),
		Item.of('minecraft:redstone').withChance(0.05),
		Item.of('ae2:printed_logic_processor').withChance(0.025),
		Item.of('ae2:printed_silicon').withChance(0.025)
	], 'minecraft:redstone', [
		event.recipes.createDeploying(I, [I, 'ae2:printed_logic_processor']),
		event.recipes.createDeploying(I, [I, 'ae2:printed_silicon'])
	]).transitionalItem(I).loops(1)

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

	let IXO = 'kubejs:incomplete_xpetrified_orb'
	event.recipes.createSequencedAssembly(
		'forbidden_arcanus:xpetrified_orb'
		, 'create:experience_block', [
			event.recipes.createPressing(IXO, IXO)
	]).transitionalItem(IXO).loops(10)

	let ISSM = 'kubejs:incomplete_incomplete_soul_scorched_metal'
	event.recipes.createSequencedAssembly(
		'kubejs:incomplete_soul_scorched_metal'
		, 'witherproofed:reinforced_alloy', [
			event.recipes.createDeploying(ISSM, [ISSM, 'forbidden_arcanus:corrupt_soul']),
			event.recipes.createFilling(ISSM, [ISSM, Fluid.of('create_enchantment_industry:experience', 972)])
	]).transitionalItem(ISSM).loops(1)
	

	})