Ponder.registry(ponder => {
    ponder.create(["kubejs:crimson_nylium_spores", "minecraft:crimson_nylium"])
        .scene(
            'createblock:crimson_nylium_spores',
            'Using Crimson Nylium Spores',
            (scene, util) => {
                const netherackPos = util.grid.at(2, 0, 2);
                scene.showBasePlate();
                scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:netherrack", false);
                scene.addKeyframe();
                scene.showControls(20, [3, 1, 3], "down")
                    .withItem("kubejs:crimson_nylium_spores")
                    .rightClick()
                scene.idle(20)
                scene.addKeyframe();
                scene.world.replaceBlocks(netherackPos, "minecraft:crimson_nylium", true);
            })
})