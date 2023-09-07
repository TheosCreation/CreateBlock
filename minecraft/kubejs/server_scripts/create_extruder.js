ServerEvents.recipes(event => {
    for (let i = 1; i < 5; i++) {
        event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:diorite').withChance(0.2 * i + 0.2), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:diorite' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:cobblestone').withChance(0.2 * i + 0.2), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:cobblestone' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:cobbled_deepslate').withChance(0.2 * i + 0.2), [Item.of('kubejs:packed_ice' + `_${i}x`), Fluid.of('minecraft:lava')])
        event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:snow_block').withChance(0.2 * i + 0.2), [Fluid.of('minecraft:water'), Fluid.of('minecraft:water')]).withCatalyst('kubejs:packed_ice' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('create:limestone').withChance(0.2 * i + 0.2), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:tuff' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:tuff').withChance(0.2 * i + 0.2), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:cobbled_deepslate' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:end_stone').withChance(0.2 * i + 0.2), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:glowstone' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('forbidden_arcanus:darkstone').withChance(0.2 * i + 0.2), [Item.of('minecraft:blackstone'), Fluid.of('kubejs:magic')])
    } 

    event.recipes.createMechanicalExtruderExtruding(Item.of('create:asurine').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('create:zinc_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:ochrum').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:gold_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:blackstone').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:coal_block')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:netherrack').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:nether_bricks')
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:dripstone_block').withChance(0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('minecraft:dripstone_block')
    for (let i = 1; i < 4; i++) {
        event.recipes.createMechanicalExtruderExtruding(Item.of('create:asurine').withChance(0.2 * i + 0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:zinc' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('create:ochrum').withChance(0.2 * i + 0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:gold' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('create:veridium').withChance(0.2 * i + 0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:copper' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:blackstone').withChance(0.2 * i + 0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:coal' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:netherrack').withChance(0.2 * i + 0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:nether_bricks' + `_${i}x`)
        event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:dripstone_block').withChance(0.2 * i + 0.4), [Fluid.of('minecraft:water'), Fluid.of('minecraft:lava')]).withCatalyst('kubejs:dripstone' + `_${i}x`)
    }
})
    //event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:dirt'),[Fluid.of('minecraft:lava'),Item.of('minecraft:stone')]).withCatalyst('minecraft:clay').requiredBonks(10)
