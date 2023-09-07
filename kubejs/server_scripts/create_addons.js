ServerEvents.recipes(event => {
	event.remove({ output: "ae2:meteorite_compass" })
	// CreateAdditions
	event.custom({
		type: "createaddition:charging",
		input: {
			item: "minecraft:compass",
		},
		result: {
			item: "ae2:meteorite_compass",
		},
		energy: 64000,
	});
	/*
	//Create Rolling
	event.custom({
		type: "createaddition:rolling",
		ingredients: [
			{
				item: 'create:zinc_ingot',
			},
		],
		results: [
			{
				item: 'kubejs:zinc_rod',
				count: 2,
			},
		],
	});
	event.custom({
		type: "createaddition:rolling",
		ingredients: [
			{
				item: 'minecraft:netherite_ingot',
			},
		],
		results: [
			{
				item: 'kubejs:netherite_rod',
				count: 2,
			},
		],
	});
	*/
})