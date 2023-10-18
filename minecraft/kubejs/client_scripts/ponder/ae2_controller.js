Ponder.registry((ponder) => {
	ponder
		.create('ae2:controller')
		.scene('ae2_single', 'The Controller Block', (scene, util) => {
			let placeCable = (location, connections_, type) => {
				scene.world.setBlock(location, 'ae2:cable_bus', false)
				scene.world.modifyBlockEntityNBT(location, (nbt) => {
					nbt.cable = {
						id: type,
						visual: {
							channels: 32,
							powered: true,
							connections: connections_,
						},
					}
				})
			}

			let placeController = (location, state_, type) => {
				scene.world.setBlock(location, 'ae2:controller', false)
				scene.world.modifyBlock(
					location,
					(state) => state.with('state', state_),
					false
				)
				scene.world.modifyBlock(
					location,
					(state) => state.with('type', type),
					false
				)
			}

			placeController([2, 1, 2], 'online', 'block')

			scene.showStructure()

			scene.text(60, 'The ME Controller is the brain of the network.')
			scene.idle(70)

			scene
				.text(50, 'Each Controller face provides 32 channels.')
				.attachKeyFrame()
			scene.idle(30)
			let cableBlocks1X = [
				[3, 1, 2],
				[4, 1, 2],
				[1, 1, 2],
				[0, 1, 2],
			]
			let cableBlocks1Z = [
				[2, 1, 1],
				[2, 1, 0],
				[2, 1, 3],
				[2, 1, 4],
			]
			let cableBlocks1Y = [
				[2, 2, 2],
				[2, 3, 2],
				[2, 0, 2],
			]

			for (let i of cableBlocks1X) {
				placeCable(i, ['west', 'east'], 'ae2:fluix_smart_dense_cable')
				scene.idle(1)
			}
			for (let i of cableBlocks1Z) {
				placeCable(i, ['north', 'south'], 'ae2:fluix_smart_dense_cable')
				scene.idle(1)
			}
			for (let i of cableBlocks1Y) {
				placeCable(i, ['up', 'down'], 'ae2:fluix_smart_dense_cable')
				scene.idle(1)
			}
			scene.idle(20)

			scene
				.text(50, 'Done properly, a single Controller can support 192 channels')
				.attachKeyFrame()
			scene.idle(25)

			scene.world.hideSection([0, 0, 0, 1, 0, 2], Facing.DOWN)
			scene.idle(50)
			scene.world.showSection([0, 0, 0, 1, 0, 2], Facing.UP)
			scene.idle(20)

			scene.text(50, "Sometimes this isn't enough, however.").attachKeyFrame()
			scene.idle(20)
			let allCables1 = [cableBlocks1X, cableBlocks1Z, cableBlocks1Y]
			for (let group of allCables1) {
				for (let block of group) {
					scene.world.setBlock(block, 'air', false)
					scene.idle(2)
				}
			}
			scene.idle(8)
			scene.world.setBlock([2, 0, 2], 'minecraft:white_concrete', false)
			scene.world.setBlock([2, 1, 2], 'air', false)

			scene.idle(20)
			scene
				.text(
					50,
					'You might think, "Why not just add another Controller wherever?"'
				)
				.attachKeyFrame()
			placeController([3, 1, 2], 'online', 'block')
			placeController([1, 1, 2], 'online', 'block')
			scene.idle(60)

			scene.text(40, 'That is the devil talking.')
			scene.idle(60)

			placeCable([2, 1, 2], ['west', 'east'], 'ae2:fluix_glass_cable')
			placeController([3, 1, 2], 'conflicted', 'block')
			placeController([1, 1, 2], 'conflicted', 'block')

			scene
				.text(
					70,
					'Having two separate Controllers will disrupt the network, shutting the whole thing down.'
				)
				.attachKeyFrame()
			scene.idle(80)

			placeController([3, 1, 2], 'online', 'block')
			placeController([1, 1, 2], 'online', 'block')
			placeController([2, 1, 2], 'online', 'column_x')
			scene
				.text(
					60,
					'However, placing Controllers together will form a multiblock!'
				)
				.attachKeyFrame()
			scene.idle(70)

			let closeCables = [1, 0]
			let farCables = [3, 4]

			let allCables2 = [
				[4, 1, 2],
				[3, 1, 3],
				[3, 1, 4],
				[2, 1, 3],
				[2, 1, 4],
				[1, 1, 3],
				[1, 1, 4],
				[0, 1, 2],
				[3, 1, 1],
				[3, 1, 0],
				[2, 1, 1],
				[2, 1, 0],
				[1, 1, 1],
				[1, 1, 0],
			]

			for (let i of closeCables) {
				placeCable([3, 1, i], ['north', 'south'], 'ae2:red_smart_dense_cable')
				placeCable(
					[2, 1, i],
					['north', 'south'],
					'ae2:yellow_smart_dense_cable'
				)
				placeCable(
					[1, 1, i],
					['north', 'south'],
					'ae2:purple_smart_dense_cable'
				)
				scene.idle(1)
			}
			for (let i of farCables) {
				placeCable(
					[3, 1, i],
					['north', 'south'],
					'ae2:light_blue_smart_dense_cable'
				)
				placeCable([2, 1, i], ['north', 'south'], 'ae2:pink_smart_dense_cable')
				placeCable([1, 1, i], ['north', 'south'], 'ae2:white_smart_dense_cable')
				scene.idle(1)
			}
			placeCable([4, 1, 2], ['east', 'west'], 'ae2:brown_smart_dense_cable')
			scene.idle(1)
			placeCable([0, 1, 2], ['east', 'west'], 'ae2:black_smart_dense_cable')

			scene.text(40, 'The more faces, the more channels!')
			scene.idle(50)
			scene.text(40, 'Color your Cables to keep them separate.')
		})
		.scene('ae2_multiblock', 'The Controller Multiblock', (scene, util) => {
			let placeCable = (location, connections_, type) => {
				scene.world.setBlock(location, 'ae2:cable_bus', false)
				scene.world.modifyBlockEntityNBT(location, (nbt) => {
					nbt.cable = {
						id: type,
						visual: {
							channels: 32,
							powered: true,
							connections: connections_,
						},
					}
				})
			}

			let placeController = (location, state_, type) => {
				scene.world.setBlock(location, 'ae2:controller', false)
				scene.world.modifyBlock(
					location,
					(state) => state.with('state', state_),
					false
				)
				scene.world.modifyBlock(
					location,
					(state) => state.with('type', type),
					false
				)
			}

			placeController([2, 1, 2], 'online', 'column_x')
			placeController([3, 1, 2], 'online', 'block')
			placeController([1, 1, 2], 'online', 'block')

			scene.showStructure()

			scene.idle(10)

			scene
				.text(50, 'The Controller multiblock must fit in a 7x7x7 area.')
				.colored(PonderPalette.RED)
				.attachKeyFrame()
			scene.idle(60)
			scene.text(
				50,
				'A Controller block can only touch up to 3 other Controller blocks.'
			)
			scene.idle(20)

			placeController([2, 1, 3], 'online', 'block')
			scene.idle(50)

			let cornerControllers = [
				[2, 1, 3],
				[1, 1, 2],
				[2, 1, 1],
				[3, 1, 2],
			]
			for (let i of cornerControllers) {
				placeController(i, 'conflicted', 'block')
			}
			placeController([2, 1, 2], 'conflicted', 'inside_b')
			scene.text(60, 'Placing a fourth Controller will disrupt the network.')
			scene.idle(80)
			for (let i of cornerControllers) {
				scene.world.setBlock(i, 'air', false)
			}
			scene.world.setBlock([2, 1, 2], 'air', false)
			scene.idle(20)

			scene.addKeyframe()
			let cornerControllers2 = [
				[1, 1, 1],
				[3, 1, 1],
				[3, 1, 3],
				[1, 1, 3],
				[1, 3, 1],
				[3, 3, 1],
				[3, 3, 3],
				[1, 3, 3],
			]
			let controlsY = [
				[1, 2, 1],
				[3, 2, 1],
				[3, 2, 3],
				[1, 2, 3],
			]
			let controlsZ = [
				[3, 1, 2],
				[1, 1, 2],
				[3, 3, 2],
				[1, 3, 2],
			]
			let controlsX = [
				[2, 1, 1],
				[2, 1, 3],
				[2, 3, 1],
				[2, 3, 3],
			]

			for (let i of cornerControllers2) placeController(i, 'online', 'block')
			for (let i of controlsY) placeController(i, 'online', 'column_y')
			for (let i of controlsZ) placeController(i, 'online', 'column_z')
			for (let i of controlsX) placeController(i, 'online', 'column_x')
			scene.idle(20)

			scene.text(60, 'Something like this is the most efficient design.')
			scene.idle(70)
			scene.world.hideSection([0, 3, 0, 4, 3, 4], Facing.UP)
			scene.idle(20)
			scene.world.hideSection([0, 2, 0, 4, 2, 4], Facing.UP)
			scene.idle(50)
			scene.world.showSection([0, 3, 0, 4, 2, 4], Facing.DOWN)
			scene.idle(25)

			let colors = [
				'white',
				'orange',
				'magenta',
				'light_blue',
				'yellow',
				'lime',
				'pink',
				'light_gray',
				'cyan',
				'purple',
				'blue',
				'brown',
				'green',
				'red',
				'black',
			]

			let randomColor = () => colors[Math.floor(Math.random() * colors.length)]

			let northP2P = [
				[1, 1, 0],
				[1, 2, 0],
				[1, 3, 0],
				[2, 1, 0],
				[2, 3, 0],
				[3, 1, 0],
				[3, 2, 0],
				[3, 3, 0],
			]
			let topP2P = [
				[3, 4, 3],
				[2, 4, 3],
				[1, 4, 3],
				[3, 4, 2],
				[1, 4, 2],
				[3, 4, 1],
				[2, 4, 1],
				[1, 4, 1],
			]
			let westP2P = [
				[0, 1, 1],
				[0, 1, 2],
				[0, 1, 3],
				[0, 2, 1],
				[0, 2, 3],
				[0, 3, 1],
				[0, 3, 2],
				[0, 3, 3],
			]

			for (let i of northP2P) {
				placeCable(
					i,
					['north', 'south'],
					`ae2:${randomColor()}_smart_dense_cable`
				)
			}
			for (let i of topP2P) {
				placeCable(i, ['up', 'down'], `ae2:${randomColor()}_smart_dense_cable`)
			}
			for (let i of westP2P) {
				placeCable(
					i,
					['east', 'west'],
					`ae2:${randomColor()}_smart_dense_cable`
				)
			}

			scene
				.text(
					50,
					'This setup has 48 easily-accessible sides, enough for 1536 channels!'
				)
				.attachKeyFrame()
			scene.idle(60)

			let p2p = [northP2P, topP2P, westP2P]

			for (let i of p2p) {
				for (let j of i) {
					scene.world.hideSection(j, Facing.DOWN)
				}
			}
			scene.idle(20)
			for (let i of p2p) {
				for (let j of i) {
					scene.world.setBlock(j, 'air', false)
				}
			}

			let placeP2P = (location, direction, color) => {
				scene.world.setBlock(location, 'ae2:cable_bus', false)

				scene.world.modifyBlockEntityNBT(location, (nbt) => {
					nbt.cable = {
						id: color,
						visual: {
							powered: true,
							channels: 1,
						},
					}

					switch (direction) {
						case 'north': {
							nbt.north = {
								id: 'ae2:me_p2p_tunnel',
								powered: true,
							}
							break
						}
						case 'south': {
							nbt.south = {
								id: 'ae2:me_p2p_tunnel',
								powered: true,
							}
							break
						}
						case 'east': {
							nbt.east = {
								id: 'ae2:me_p2p_tunnel',
								powered: true,
							}
							break
						}
						case 'west': {
							nbt.west = {
								id: 'ae2:me_p2p_tunnel',
								powered: true,
							}
							break
						}
						case 'down': {
							nbt.down = {
								id: 'ae2:me_p2p_tunnel',
								powered: true,
							}
							break
						}
					}
				})
			}

			for (let i of northP2P) {
				placeP2P(i, 'south', `ae2:${randomColor()}_smart_cable`)
			}
			scene.world.showSection([0, 1, 0, 4, 4, 0], Facing.SOUTH)

			for (let i of topP2P) {
				placeP2P(i, 'down', `ae2:${randomColor()}_smart_cable`)
			}
			scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.DOWN)

			for (let i of westP2P) {
				placeP2P(i, 'east', `ae2:${randomColor()}_smart_cable`)
			}
			scene.world.showSection([0, 1, 1, 0, 3, 3], Facing.EAST)

			scene
				.text(80, "It's highly recommended to use P2P Tunnels.")
				.attachKeyFrame()

			scene.idle(90)

			scene.world.hideSection([0, 2, 0, 4, 4, 4], Facing.UP)
			scene.world.hideSection([0, 1, 0, 4, 1, 0], Facing.NORTH)
			scene.world.hideSection([0, 1, 0, 0, 1, 4], Facing.WEST)
			scene.world.hideSection([2, 1, 2], Facing.UP)

			scene.text(100, 'The middle blocks can each connect to 4 P2P Tunnels!')
			scene.idle(30)
			scene.world.setBlocks([2, 1, 2], 'ae2:cable_bus', false)
			scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
				nbt.cable = {
					id: 'ae2:fluix_smart_cable',
					channels: 1,
					powered: true,
				}
				nbt.north = {
					id: 'ae2:me_p2p_tunnel',
				}
				nbt.south = {
					id: 'ae2:me_p2p_tunnel',
				}
				nbt.east = {
					id: 'ae2:me_p2p_tunnel',
				}
				nbt.west = {
					id: 'ae2:me_p2p_tunnel',
				}
			})
			scene.world.showSection([2, 1, 2], Facing.DOWN)
			scene.idle(80)

			scene.text(
				70,
				'Including the center sides, there are 72 faces, enough for 2304 channels!'
			)
		})
})
