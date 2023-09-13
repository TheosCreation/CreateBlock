Ponder.registry(ponder => {
    ponder.create(["createindustry:cast_iron_distillation_controller", "createindustry:distiller"])
        .scene("basic_usage", "Setup Distillation Tower", (scene, util) => {
            var blazepos = util.grid.at(2, 1, 2)
            var controllerpos = util.grid.at(2, 2, 2)
            var distillpos1 = util.grid.at(2, 3, 2)
            var distillpos2 = util.grid.at(2, 4, 2)
            var distillpos3 = util.grid.at(2, 5, 2)
            let distill = [distillpos1, distillpos2, distillpos3]

            let placeBlock = (location, block) => {
                scene.world.setBlock(location, block, false)
                scene.world.modifyBlock(location, state => state.with('type', 'block'), false)
            }
            scene.showBasePlate()
            scene.idle(10)

            scene.overlay.showText(20)
                .text("The Base of this distillation tower is the Cast Iron Distillation Controller")
                .pointAt(util.vector.centerOf(controllerpos))
            placeBlock(controllerpos, 'createindustry:cast_iron_distillation_controller')
            scene.world.showSection(controllerpos, Direction.DOWN)
            scene.addKeyframe();
            scene.idle(20)

            
            scene.overlay.showText(20)
                .text("Tower is assembled by placing three Distiller on top of the Controller")
                .pointAt(util.vector.centerOf(distillpos2))
            distill.forEach(e => {
                placeBlock(e, "createindustry:distiller")
            })
            distill.forEach(e => {
                scene.world.showSection(e, Direction.DOWN)
            })
            scene.addKeyframe();
            scene.idle(20)


            scene.overlay.showText(20)
                .text("Finally place a Blaze Burner underneath")
                .pointAt(util.vector.centerOf(blazepos))
            placeBlock(blazepos, "create:blaze_burner")
            scene.world.showSection(blazepos, Direction.DOWN)
            scene.addKeyframe();
            scene.idle(20)

            scene.addKeyframe();
            scene.overlay.showControls(new PonderInput(blazepos, PonderPointing.DOWN)
                .rightClick().withItem("minecraft:coal"),
                40)
            scene.idle(40)
        })
})