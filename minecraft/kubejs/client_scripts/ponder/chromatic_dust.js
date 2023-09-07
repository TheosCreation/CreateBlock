Ponder.registry(ponder => {

    ponder.create("kubejs:chromatic_dust")
        .scene(
            'createblock:chromatic_dust',
            'Making Chromatic Dust',
            (scene, util) => {
                // let pedstal = [acpd1, acpd2, acpd3, acpd4, acpd5, acpd6, acpd7, acpd8, acpd9];
                const base = util.select.fromTo(10, 0, 0, 0, 0, 10);
                const rainbow = util.grid.at(3, 2, 3);
                let bbox = util.select.fromTo(10, 1, 0, 0, 1, 10)


                scene.world.showSection(base, Direction.NORTH);
                scene.scaleSceneView(0.6);
                scene.setSceneOffsetY(-1);
                scene.addKeyframe();
                scene.world.setBlocks(base, "forbidden_arcanus:polished_darkstone");
                scene.text(60, 'Chromatic Dust can be created by a process called Soaking')
                scene.idle(20);
                scene.world.setBlocks(rainbow, "kubejs:rainbow");
                scene.idle(70)
                scene.addKeyframe();
                scene.text(60, "Pl").placeNearTarget()
                scene.idle(60);
            })
})