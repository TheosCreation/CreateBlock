SummoningRituals.start(event => {
    // you can access the properties mentioned above by using event.level or event.getLevel()

    // lets a lightning strike hit the altar when starting the ritual
    event.level.spawnLightning(event.pos.x, event.pos.y, event.pos.z, true);

    // keep in mind the invoking player can be nullish in case the ritual was started by automation
    //if (!event.player) return;

    /* if the player does not have at least 3 levels, cancel the craft
    if (event.player.getXpLevel() < 3) {
        event.cancel();
    }
    */
});
SummoningRituals.complete(event => {
    // you can access the properties mentioned above by using event.level or event.getLevel()

    // keep in mind the invoking player can be nullish in case the ritual was started by automation
    //if (!event.player) return;

    // give the invoking player 10 levels
    //event.player.addXPLevels(10);

});

ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar("minecraft:gold_nugget").input('witherproofed:ghostly_essence').sacrifice('minecraft:blaze').mobOutput('quark:wraith').itemOutput('quark:soul_bead').recipeTime(300)
    event.recipes.summoningrituals.altar('create:chromatic_compound').input('16x minecraft:echo_shard', '32x forbidden_arcanus:soul').blockBelow('minecraft:respawn_anchor').mobOutput(SummoningOutput.mob('minecraft:warden')
        .data({ PersistenceRequired: 1, Brain: { memories: { "minecraft:dig_cooldown": { value: {}, ttl: 1200 }}}})
        .spread(4, 0, 4)).recipeTime(600)
});