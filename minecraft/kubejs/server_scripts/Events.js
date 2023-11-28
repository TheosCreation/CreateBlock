BlockEvents.broken(event => {
    if (event.block.getId().toString() == ('kubejs:reactive_bricks')) {
        let explosion = event.block.createExplosion()
        explosion.strength(6)
        explosion.damagesTerrain(false)
        explosion.explode()
        event.player.attack('explosion.player', 7.5)
    }
})
var wraiths = [];
EntityEvents.spawned(event => {
    let mob_id = event.entity.entityType;
    if (mob_id != 'entity.quark.wraith') return
    wraiths.push(event.entity);
})
EntityEvents.death(event => {
    let mob_id = event.entity.entityType;
    if (mob_id != 'entity.quark.wraith') return
    event.server.scheduleInTicks(10, e => {
        event.entity.setPos(0, 365, 0)
    })
})
LevelEvents.tick(event => {
    if (event.level.time % 100 != 0)
        return;
        
    wraiths.forEach(wraith => {
        if (wraith.block.id != 'forbidden_arcanus:soulless_sand')
            return;
        wraith.block.set('minecraft:soul_sand');
    })
})
ItemEvents.rightClicked('create:chromatic_compound', event => {
    const { item, hand, player } = event
    if (player.y <= 100) return
    if (hand != "MAIN_HAND") return
    item.setCount(item.getCount() - 1)
    player.give('forbidden_arcanus:stellarite_piece')
})
BlockEvents.rightClicked('minecraft:diamond_block', event => {
    const { item, hand, player } = event
    if (hand != "MAIN_HAND") return
    if (item.id == 'forbidden_arcanus:dark_matter') {
        player.tell("The Block's molecules begin to change")
    }
}) 

PlayerEvents.tick(event => {
    var player = event.player
    var randomNum = Math.random();
    var playerTimer = player.persistentData.timer

    player.persistentData.timer >= 0
        ? player.persistentData.timer++
        : (player.persistentData.timer = 0);
    if (playerTimer < 350) return
        // 40% chance for no event
    if (randomNum > 0.4) {
        player.persistentData.timer = playerTimer/2
    }
    else {
        player.persistentData.timer = 0;
        amethystEvent.execute(player)
    }
})
function checkForBlockInCube(targetBlock, level, cubeSize, sx, sy, sz) {
    let found = ''

    for (let x = -Math.abs(cubeSize); x <= cubeSize; x++) {
        if (found != '')
            break;

        for (let y = -Math.abs(cubeSize); y <= cubeSize; y++) {
            if (found != '')
                break;

            for (let z = -Math.abs(cubeSize); z <= cubeSize; z++) {
                if (found != '')
                    break;

                let block = level.getBlock(sx + x, sy + y, sz + z)
                if (block.id == targetBlock) {
                    found = block
                }
            }
        }
    }
    return found
}

const amethystEvent = {
    execute(player) {
        const level = player.getLevel();

        let diamond_block = checkForBlockInCube('kubejs:warping_block', level, 24, player.x, player.y, player.z)

        if (diamond_block == '') {
            //no diamond block, reset event and continue
        }
        else {
            player.tell('Your Diamond Block has Full Transformed')

            diamond_block.set('minecraft:budding_amethyst')
        }
    }
};
