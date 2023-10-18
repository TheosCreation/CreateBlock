ServerEvents.tags('item', event => {
    event.remove('forge:fillet_knife', 'farmersdelight:flint_knife')
    event.add('forge:dirtable', 'farmersdelight:rich_soil')
    event.add('curios:back', ['create:copper_backtank', 'create:netherite_backtank', 'create_jetpack:jetpack'])
    event.add('forge:relocation_not_supported', 'create_mechanical_extruder:mechanical_extruder')
    event.add('forge:raw_materials/silver', 'kubejs:raw_silver')
})