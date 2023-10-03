ServerEvents.tags('item', event => {
    event.remove('forge:fillet_knife', 'farmersdelight:flint_knife')
    event.add('forge:dirtable', 'farmersdelight:rich_soil')
    event.add('curios:back', ['create:copper_backtank', 'create:netherite_backtank', 'create_jetpack:jetpack'])
})