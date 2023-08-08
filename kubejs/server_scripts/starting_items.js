PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('Start')) {

        event.player.stages.add('Start')

        event.player.give(Item.of('ftbquests:book'))
        event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:createblock"}'))
    }
})
