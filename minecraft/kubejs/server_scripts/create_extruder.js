ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:cobblestone', type: 'create_mechanical_extruder:extruding' })
    event.remove({ output: 'minecraft:stone', type: 'create_mechanical_extruder:extruding' })
    event.remove({ output: 'minecraft:basalt', type: 'create_mechanical_extruder:extruding' })
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:diorite').withChance(0.2), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:diorite')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:cobblestone').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:cobbled_deepslate').withChance(0.4), [Item.of('minecraft:packed_ice'), Fluid.of('minecraft:lava')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:basalt').withChance(0.4), [Item.of('minecraft:blue_ice'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:soul_soil')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:snow_block').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:water')]).withCatalyst('minecraft:packed_ice')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:limestone').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:tuff')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:tuff').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:cobbled_deepslate')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:end_stone').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:glowstone')
    event.recipes.createMechanicalExtruderExtruding(Item.of('forbidden_arcanus:darkstone').withChance(0.4), [Item.of('minecraft:blackstone'), Fluid.of('kubejs:magic')])
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:asurine').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('create:zinc_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:blackstone').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:coal_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:netherrack').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:nether_bricks')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:dripstone_block').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:dripstone_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:ochrum').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:gold_block')
    
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:crimsite').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:iron_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:dripstone_block').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:dripstone_block')

    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:dirt').withChance(0.5), ['#forge:dirtable', '#forge:dirtable']).requiredBonks(5)
    let ExtruderWithCatalyst = (output, Input) => {
        event.recipes.createMechanicalExtruderExtruding(Item.of(output).withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst(Input)
    }
    ExtruderWithCatalyst('create:veridium', 'minecraft:copper_block')
    ExtruderWithCatalyst('create:veridium', 'minecraft:weathered_copper')
    ExtruderWithCatalyst('create:veridium', 'minecraft:exposed_copper')
    ExtruderWithCatalyst('create:veridium', 'minecraft:oxidized_copper')
    ExtruderWithCatalyst('create:veridium', 'minecraft:waxed_copper_block')
    ExtruderWithCatalyst('create:veridium', 'minecraft:waxed_exposed_copper')
    ExtruderWithCatalyst('create:veridium', 'minecraft:waxed_weathered_copper')
    ExtruderWithCatalyst('create:veridium', 'minecraft:waxed_oxidized_copper')
})
    //event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:dirt'),[Fluid.of('minecraft:lava'),Item.of('minecraft:stone')]).withCatalyst('minecraft:clay').requiredBonks(10)
