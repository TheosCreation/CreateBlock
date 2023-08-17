// priority: 0

ServerEvents.recipes(event => {
	event.shaped('botania:corporea_spark_creative', [
		'ABA',
		'CDE',
		'AFA'
	], {
		A: 'kubejs:rad_star',
		B: 'kubejs:corruption_bottle',
		C: 'botania:life_essence',
		D: 'botania:corporea_spark_master',
		E: 'create:refined_radiance',
		F: 'ars_elemental:mark_of_mastery',
	})
	event.shaped('kubejs:corruption_bottle', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'forbidden_arcanus:corrupti_dust',
		B: 'forbidden_arcanus:dark_nether_star',
		C: 'forbidden_arcanus:golden_feather',
		D: 'forbidden_arcanus:aureal_bottle',
		E: 'forbidden_arcanus:dark_matter'
	})
	/*
	event.recipes.create.mechanical_crafting('create:creative_motor', [
		'ABCCCCCBA',
		'DDDDDDDDD',
		'EBFGGGFBH',
		'EBIKKKLBI',
		'EBIKMNJJJ',
		'EBIKKKLBI',
		'EBFGGGFBH',
		'DDDDDDDDD',
		'ABCCCCCBA'
	], {
		A:"minecraft:netherite_ingot",
		B:"create:sturdy_sheet",
		C:"minecraft:purpur_block",
		D:"create:zinc_block",
		E:"minecraft:amethyst_cluster",
		F:"minecraft:crying_obsidian",
		G:"minecraft:shulker_shell",
		H:"minecraft:amethyst_block",
		I:"minecraft:obsidian",
		J:"create:shaft",
		K:"minecraft:end_crystal",
		L:"minecraft:dragon_breath",
		M:"minecraft:nether_star",
		N:"minecraft:end_rod"
	})
	event.recipes.createMechanicalCrafting('create:creative_crate', [
		'BACAB',
		'AEAEA',
		'CADAC',
		'AEAEA',
		'BACAB'
	], {
		B: 'create:chromatic_compound',
		A: 'minecraft:netherite_block',
		C: 'minecraft:chest',
		D: 'botania:corporea_spark_creative',
		E: 'create:precision_mechanism'
	})
	event.recipes.createMechanicalCrafting('create:handheld_worldshaper', [
		'AANNN',
		'PRCII',
		'AA   '
	], {
		N: 'minecraft:netherite_block',
		C: 'create:creative_crate',
		P: 'create:potato_cannon',
		A: 'create:andesite_alloy',
		R: 'create:chromatic_compound',
		I: 'create:refined_radiance'
	})
	*/
})
