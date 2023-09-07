ServerEvents.tags('item', event => {
    event.remove('forge:fillet_knife', 'farmersdelight:flint_knife')
    event.add('forge:dirtable', ['farmersdelight:rich_soil', 'farmersdelight:organic_compost'])
})