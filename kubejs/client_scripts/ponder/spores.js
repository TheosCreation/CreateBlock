Ponder.registry(ponder => {
    ponder.create(["kubejs:mycelium_spores", "minecraft:mycelium"])
        .scene(
            'createblock:mycelium_spores',
            'Using Mycelium Spores',
            (scene, util) => {
                const ConversionPos = util.grid.at(2, 0, 2);
                scene.showBasePlate();
                scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:grass_block", false);
                scene.addKeyframe();
                scene.showControls(20, [3, 1, 3], "down")
                    .withItem("kubejs:mycelium_spores")
                    .rightClick()
                scene.idle(20)
                scene.addKeyframe();
                //scene.world.setBlock(GrassPos, "minecraft:mycelium", true);
                scene.world.replaceBlocks(ConversionPos, "minecraft:mycelium", true);
            })
})