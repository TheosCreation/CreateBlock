Ponder.registry(ponder => {
    ponder.create(["kubejs:warped_nylium_spores", "minecraft:warped_nylium"])
        .scene(
            'createblock:warped_nylium_spores',
            'Using Warped Nylium Spores',
            (scene, util) => {
                const netherPos = util.grid.at(2, 0, 2);
                scene.showBasePlate();
                scene.world.setBlocks([0, 0, 0, 4, 0, 4], "minecraft:netherrack", false);
                scene.addKeyframe();
                scene.showControls(20, [3, 1, 3], "down")
                    .withItem("kubejs:warped_nylium_spores")
                    .rightClick()
                scene.idle(20)
                scene.addKeyframe();
                scene.world.replaceBlocks(netherPos, "minecraft:warped_nylium", true);
            })
})