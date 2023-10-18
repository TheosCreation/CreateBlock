Ponder.registry((ponder) => {
	ponder
		.create(['ae2:spatial_pylon', 'ae2:spatial_io_port'])
		.scene(
			'spatial_storage_simple',
			'Spatial Storage',
			'kubejs:spatial_storage_simple',
			(scene, util) => {
				const baseCertus = [
					[5, 0, 1],
					[3, 0, 1],
					[1, 0, 1],
					[1, 0, 3],
					[1, 0, 5],
				]
				const baseSkyStone = [
					[4, 0, 1],
					[2, 0, 1],
					[1, 0, 2],
					[1, 0, 4],
				]
				
				for (let pos of baseCertus) {
					scene.world.setBlock(pos, 'ae2:cut_quartz_block', false)
				}

				for (let pos of baseSkyStone) {
					scene.world.setBlock(pos, 'ae2:smooth_sky_stone_block', false)
				}

				scene.showBasePlate()

				scene.idle(10)
				scene.text(
					90,
					"AE2's Spatial Storage allows you to take an area in the world and store it digitally."
				)
				scene.idle(100)

				scene.text(
					115,
					'The smallest Spatial Storage Cell can hold a 2x2x2 volume, and the largest can hold up to a 128x128x128.'
				)
				scene.idle(130)

				scene.addKeyframe()
				scene.idle(10)
				scene.text(60, "We'll go over the smallest one first.")
				scene.idle(70)

				scene.world.showSection([2, 1, 2, 4, 3, 4], Facing.DOWN)
				scene.text(60, 'Say we find some Flawless Budding Certus Quartz.')
				scene.idle(70)
				scene.text(60, "We want to bring it home, but we can't safely mine it.")
				scene.idle(70)
				scene.text(60, "So, instead we'll use Spatial Storage!")
				scene.idle(70)

				scene.addKeyframe()
				scene.idle(10)

				const pylonSpaces = [
					[4, 0, 1, 2, 0, 1],
					[1, 0, 2, 1, 0, 4],
					[1, 1, 5, 1, 3, 5],
				]
				for (let section of pylonSpaces) {
					scene.world.setBlocks(section, 'ae2:spatial_pylon', false)
					scene.world.showSection(section, Facing.DOWN)
				}

				scene.text(70, 'Place Spatial Pylons around the area you want to move.')
				scene.idle(80)
				scene
					.text(80, 'They must by one block longer than the area being moved!')
					.colored(PonderPalette.RED)
				scene.idle(90)
				scene.text(
					90,
					"Here, since we're moving a 2x2x2 volume, each Pylon must be 3 long."
				)
				scene.idle(110)

				const verticalOne = [1, 1, 5, 1, 3, 5]
				const verticalTwo = [1, 1, 1, 1, 3, 1]

				scene.addKeyframe()
				scene.idle(10)
				scene.text(65, 'Traditionally, the Pylons are placed like this...')
				scene.idle(30)
				scene.world.setBlocks(verticalTwo, 'ae2:spatial_pylon', false)
				scene.world.hideSection(verticalOne, Facing.NORTH)
				scene.world.showSection(verticalTwo, Facing.NORTH)
				scene.idle(60)
				scene.text(50, "...but for visibility's sake, let's keep it here.")
				scene.idle(15)
				scene.world.hideSection(verticalTwo, Facing.SOUTH)
				scene.world.showSection(verticalOne, Facing.SOUTH)
				scene.idle(50)
				scene.world.setBlocks(verticalTwo, 'air', false)

				scene.idle(20)
				scene.text(
					70,
					"So long as they're surrounding the same area, it doesn't matter."
				)
				scene.idle(80)

				scene.addKeyframe()
				scene.idle(5)
				scene.text(70, 'Attach the Pylons to the same network...')
				scene.idle(10)

				scene.world.hideSection([0, 0, 0, 0, 0, 6], Facing.DOWN)
				scene.world.hideSection([0, 0, 0, 6, 0, 0], Facing.DOWN)
				scene.idle(25)
				scene.world.setBlock([1, 0, 1], 'ae2:cable_bus', false)
				scene.world.modifyBlockEntityNBT([1, 0, 1], (nbt) => {
					nbt.cable = {
						id: 'ae2:fluix_smart_cable',
						visual: {
							channels: 2,
							powered: true,
							connections: ['south', 'east'],
						},
					}
				})
				scene.world.setBlock([1, 0, 5], 'ae2:cable_bus', false)
				scene.world.modifyBlockEntityNBT([1, 0, 5], (nbt) => {
					nbt.cable = {
						id: 'ae2:fluix_smart_cable',
						visual: {
							channels: 2,
							powered: true,
							connections: ['north', 'up'],
						},
					}
				})

				scene.idle(60)
				scene.text(70, '...and connect a Spatial IO Port as well.')

				scene.world.setBlock([5, 0, 1], 'ae2:creative_energy_cell', false)
				scene.world.setBlock([5, 1, 1], 'ae2:spatial_io_port', false)
				scene.world.showSection([5, 1, 1], Facing.DOWN)
				scene.idle(50)
				scene.world.showSection([0, 0, 0, 0, 0, 6], Facing.UP)
				scene.world.showSection([0, 0, 0, 6, 0, 0], Facing.UP)
				scene.idle(30)

				scene.addKeyframe()
				scene.idle(10)
				scene.text(
					70,
					'This entire structure is called the Spatial Containment Structure.'
				)
				scene.idle(80)
				scene
					.text(50, 'You can only have one per network...')
					.colored(PonderPalette.RED)
				scene.idle(60)
				scene.text(60, '...though really, these are often single-use only.')
				scene.idle(70)

				scene.addKeyframe()
				scene.idle(10)
				scene
					.showControls(60, [5.5, 2.5, 1.5], 'down')
					.withItem('ae2:spatial_storage_cell_2')
				scene.text(60, 'Insert a Spatial Storage Cell...')
				scene.idle(50)
				scene.world.showSection([5, 1, 0], Facing.DOWN)
				scene.idle(25)

				scene.text(45, '...give it a Redstone signal...')
				scene.idle(10)
				scene.world.modifyBlock(
					[5, 1, 0],
					(state) =>
						state
							.with('powered', true)
							.with('face', 'floor')
							.with('facing', 'south'),
					false
				)
				scene.idle(10)
				scene.world.modifyBlock(
					[5, 1, 0],
					(state) =>
						state
							.with('powered', false)
							.with('face', 'floor')
							.with('facing', 'south'),
					false
				)
				scene.idle(20)

				scene.world.hideSection([2, 1, 2, 3, 2, 3], Facing.UP)
				scene.idle(10)
				scene.world.setBlocks([2, 1, 2, 3, 2, 3], 'air', false)

				scene.idle(15)
				scene.text(50, '...and the structure is stored into the Disk!')
				scene.idle(60)

				scene.addKeyframe()
				scene.idle(10)

				scene.text(70, 'Now you can take this filled Disk and bring it home.')
				scene.idle(50)
				scene.world.hideSection([0, 0, 0, 6, 6, 6], Facing.UP)
				scene.idle(15)

				let counter = 0
				for (let x = 0; x <= 6; x++) {
					for (let z = 0; z <= 6; z++) {
						counter++
						let block = ''
						if (counter % 2 == 0) {
							block = 'minecraft:grass_block'
						} else {
							block = 'minecraft:stone'
						}
						scene.world.setBlock([x, 0, z], block, false)
					}
				}
				scene.idle(10)
				scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.DOWN)
				scene.idle(20)
				scene.text(80, 'Recreate the Spatial Containment Structure.')

				for (let section of pylonSpaces) {
					scene.world.setBlocks(section, 'ae2:spatial_pylon', false)
					scene.world.showSection(section, Facing.DOWN)
				}

				scene.world.setBlock([1, 0, 1], 'ae2:cable_bus', false)
				scene.world.modifyBlockEntityNBT([1, 0, 1], (nbt) => {
					nbt.cable = {
						id: 'ae2:fluix_smart_cable',
						visual: {
							channels: 2,
							powered: true,
							connections: ['south', 'east'],
						},
					}
				})
				scene.world.setBlock([1, 0, 5], 'ae2:cable_bus', false)
				scene.world.modifyBlockEntityNBT([1, 0, 5], (nbt) => {
					nbt.cable = {
						id: 'ae2:fluix_smart_cable',
						visual: {
							channels: 2,
							powered: true,
							connections: ['north', 'up'],
						},
					}
				})
				scene.world.setBlock([5, 0, 1], 'ae2:creative_energy_cell', false)
				scene.world.setBlock([5, 1, 1], 'ae2:spatial_io_port', false)
				scene.world.showSection([5, 0, 0, 5, 1, 1], Facing.DOWN)

				scene.idle(90)
				scene
					.showControls(60, [5.5, 2.5, 1.5], 'down')
					.withItem('ae2:spatial_storage_cell_2')
				scene.text(40, 'Insert the Spatial Storage Cell...')
				scene.idle(50)

				scene.text(35, '...give it a Redstone signal...')
				scene.idle(10)
				scene.world.modifyBlock(
					[5, 1, 0],
					(state) =>
						state
							.with('powered', true)
							.with('face', 'floor')
							.with('facing', 'south'),
					false
				)
				scene.idle(10)
				scene.world.modifyBlock(
					[5, 1, 0],
					(state) =>
						state
							.with('powered', false)
							.with('face', 'floor')
							.with('facing', 'south'),
					false
				)
				scene.idle(25)

				scene.world.setBlocks(
					[2, 1, 2, 3, 1, 3],
					'ae2:flawless_budding_quartz',
					false
				)
				scene.world.setBlocks([2, 2, 2, 3, 2, 3], 'ae2:quartz_cluster', false)

				scene.world.showSection([2, 1, 2, 3, 2, 3], Facing.DOWN)
				scene.text(60, '...and the structure will exit the Cell!')
				scene.idle(80)

				scene.addKeyframe()
				scene.idle(10)

				scene.text(
					70,
					'A note: Entities (including Players) can also get caught!'
				)
				scene.idle(80)
				scene
					.text(
						90,
						'If you accidentally get caught in the Spatial Storage dimension, you will be STUCK THERE!'
					)
					.colored(PonderPalette.RED)
				scene.idle(100)
				scene.text(
					150,
					'The only way to get back out is teleportation, commands, death, or getting someone/something in the overworld to un-store you.'
				)
				scene.idle(150)
			}
		)
		.scene(
			'spatial_storage_big',
			'Efficiency',
			'kubejs:spatial_storage_big',
			(scene, util) => {
				const baseCertus = [
					[9, 0, 1],
					[7, 0, 1],
					[5, 0, 1],
					[3, 0, 1],
					[1, 0, 1],
					[1, 0, 3],
					[1, 0, 5],
					[1, 0, 7],
					[1, 0, 9],
					[1, 0, 11],
				]
				const baseSkyStone = [
					[10, 0, 1],
					[8, 0, 1],
					[6, 0, 1],
					[4, 0, 1],
					[2, 0, 1],
					[1, 0, 2],
					[1, 0, 4],
					[1, 0, 6],
					[1, 0, 8],
					[1, 0, 10],
				]

				const pyramid = [3, 1, 3, 9, 4, 9]

				for (let pos of baseCertus) {
					scene.world.setBlock(pos, 'ae2:cut_quartz_block', false)
				}
				for (let pos of baseSkyStone) {
					scene.world.setBlock(pos, 'ae2:smooth_sky_stone_block', false)
				}

				scene.showBasePlate()
				scene.scaleSceneView(0.5)
				scene.idle(10)

				scene.world.showSection([11, 1, 11, 11, 8, 11], Facing.DOWN)
				scene.world.showSection(pyramid, Facing.DOWN)
				scene.world.showSection([11, 1, 0, 11, 1, 1], Facing.DOWN)
				scene.world.setBlock([10, 0, 11], 'ae2:cable_bus', false)
				scene.world.modifyBlockEntityNBT([10, 0, 11], (nbt) => {
					nbt.cable = {
						id: 'ae2:fluix_smart_cable',
						visual: {
							channels: 1,
							powered: true,
							connections: ['east', 'west'],
						},
					}
				})
				scene.world.modifyBlockEntityNBT([11, 0, 11], (nbt) => {
					nbt.cable = {
						id: 'ae2:fluix_smart_cable',
						visual: {
							channels: 2,
							powered: true,
							connections: ['north', 'west', 'up'],
						},
					}
				})

				scene.text(
					80,
					'Spatial IO costs a large amount of energy, especially for bigger structures.'
				)
				scene.idle(90)

				scene.text(70, 'This SCS is 8x7x8, and costs a massive 48,600,000 FE!')
				scene.idle(80)
				scene.text(
					70,
					'Each SCS has an "Efficiency" percentage, visible in the IO Port.'
				)
				scene.idle(80)
				scene.text(
					80,
					'This SCS has an efficiency of 28.57%, which is why it costs so much.'
				)
				scene.idle(90)
				scene.text(
					70,
					'If we can raise the efficiency, we can lower the FE cost!'
				)
				scene.idle(80)

				scene.addKeyframe()
				scene.idle(10)

				scene.text(
					70,
					'Add another line of Pylons, parallel to one of the existing ones.'
				)
				scene.world.showSection([11, 2, 2, 11, 2, 10], Facing.SOUTH)
				scene.idle(80)
				scene.text(
					110,
					'The efficiency is now 38.09%, and the cost is now 30.88 million FE.'
				)
				scene.idle(120)
				scene.world.hideSection([11, 2, 2, 11, 2, 7], Facing.NORTH)
				scene.text(
					80,
					"You don't have to put a full line, but it's more efficient to."
				)
				scene.idle(90)
				scene.text(
					110,
					'Adding only two brings the efficiency to only 30.95%, and the cost to 43.39 million FE.'
				)
				scene.idle(100)
				scene.world.showSection([11, 2, 2, 11, 2, 7], Facing.SOUTH)
				scene.idle(20)

				scene.addKeyframe()
				scene.idle(10)
				scene.text(
					70,
					'You can keep adding more lines for even higher efficiency.'
				)
				for (let y = 3; y <= 8; y++) {
					scene.world.showSection([11, y, 2, 11, y, 10], Facing.SOUTH)
					scene.idle(10)
				}
				scene.idle(20)
				scene.text(
					80,
					"With these, it's at 66.66% effiency, costing 7.92 million FE."
				)
				scene.idle(90)

				scene.addKeyframe()
				scene.idle(10)
				scene.world.showSection([2, 1, 11, 9, 8, 11], Facing.DOWN)
				scene.idle(15)
				scene.text(60, 'Additional Pylons can also be vertical!')
				scene.idle(70)
				scene.text(
					110,
					'With these, the SCS is at 100% efficiency, and only costs 1.62 million FE!'
				)
				scene.idle(120)

				scene.addKeyframe()
				scene.idle(10)
				scene.text(60, 'Each line of Pylons takes up a channel.')
				scene.idle(70)
				scene.text(
					90,
					"While this isn't a problem for smaller or less efficient SCSs, larger ones will need a Controller."
				)
				scene.idle(50)

				scene.world.setBlock([10, 0, 11], 'ae2:smooth_sky_stone_block', false)
				scene.world.setBlock([1, 0, 1], 'ae2:controller', false)
				scene.world.modifyBlock(
					[1, 0, 1],
					(state) => state.with('state', 'online'),
					false
				)

				let setCable = (pos, connections, channelCount) => {
					scene.world.setBlock(pos, 'ae2:cable_bus', false)
					scene.world.modifyBlockEntityNBT(pos, (nbt) => {
						nbt.cable = {
							id: 'ae2:fluix_smart_cable',
							visual: {
								channels: channelCount,
								powered: true,
								connections: connections,
							},
						}
					})
				}

				for (let x = 2; x <= 10; x++) setCable([x, 0, 1], ['east', 'west'], 7)
				for (let z = 2; z <= 10; z++) setCable([1, 0, z], ['north', 'south'], 5)
				setCable([1, 0, 11], ['north', 'east'], 5)
			}
		)
})
