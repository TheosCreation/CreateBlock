ServerEvents.recipes(event => {
	//item application
	event.recipes.create.item_application(['create:shadow_steel_casing'], [['#forge:stripped_wood', '#forge:stripped_logs'], 'create:shadow_steel'])
	event.recipes.create.item_application(['create:refined_radiance_casing'], [['#forge:stripped_wood', '#forge:stripped_logs'], 'create:refined_radiance'])
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
})