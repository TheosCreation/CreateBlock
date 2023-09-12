ServerEvents.recipes(event => {
    const recipes = {
        'minecraft:mycelium': {
            'createsifter:string_mesh': [
                ['minecraft:red_mushroom', 0.1],
                ['minecraft:brown_mushroom', 0.1]
            ],
            'createsifter:andesite_mesh': [
                ['minecraft:red_mushroom', 0.1],
                ['minecraft:brown_mushroom', 0.1]
            ],
            'createsifter:zinc_mesh': [
                ['minecraft:red_mushroom', 0.1],
                ['minecraft:brown_mushroom', 0.1]
            ],
            'createsifter:brass_mesh': [
                ['minecraft:red_mushroom', 0.1],
                ['minecraft:brown_mushroom', 0.1]
            ],
            'kubejs:diamond_mesh': [
                ['minecraft:red_mushroom', 0.1],
                ['minecraft:brown_mushroom', 0.1]
            ],
            'kubejs:netherite_mesh': [
                ['minecraft:red_mushroom', 0.1],
                ['minecraft:brown_mushroom', 0.1]
            ]
        },
        'minecraft:soul_sand': {
            'kubejs:quartz_mesh': [
                ['minecraft:glowstone_dust', 0.15],
                ['minecraft:blaze_powder', 0.1],
                ['minecraft:nether_wart', 0.05],
                ['minecraft:soul_sand', 0.75],
                ['create:experience_nugget', 0.2]
            ]
        },
        'minecraft:sand': {
            'createsifter:string_mesh': [
                ['minecraft:cocoa_beans', 0.1],
                ['minecraft:cactus', 0.2]
            ],
            'createsifter:andesite_mesh': [
                ['minecraft:cocoa_beans', 0.1],
                ['minecraft:cactus', 0.2],
                ['minecraft:bamboo', 0.05]
            ],
            'createsifter:zinc_mesh': [
                ['minecraft:cocoa_beans', 0.1],
                ['minecraft:cactus', 0.2],
                ['minecraft:bamboo', 0.05]
            ],
            'createsifter:brass_mesh': [
                ['minecraft:cocoa_beans', 0.1],
                ['minecraft:cactus', 0.2],
                ['minecraft:bamboo', 0.05]
            ],
            'kubejs:diamond_mesh': [
                ['minecraft:cocoa_beans', 0.1],
                ['minecraft:cactus', 0.2],
                ['minecraft:bamboo', 0.05]
            ],
            'kubejs:netherite_mesh': [
                ['minecraft:cocoa_beans', 0.1],
                ['minecraft:cactus', 0.2],
                ['minecraft:bamboo', 0.05]
            ],
            //waterlogged recipes
            'createsifter:string_mesh': [
                ['minecraft:clay_ball', 0.5, true],
                ['minecraft:kelp', 0.1, true],
                ['minecraft:sugar_cane', 0.15, true]
            ],
            'createsifter:andesite_mesh': [
                ['minecraft:clay_ball', 0.5, true],
                ['minecraft:kelp', 0.1, true],
                ['minecraft:sugar_cane', 0.15, true],
                ['minecraft:slime_ball', 0.1, true],
                ['minecraft:sea_pickle', 0.1, true],
                ['minecraft:seagrass', 0.15, true]
            ],
            'createsifter:zinc_mesh': [
                ['minecraft:clay_ball', 0.5, true],
                ['minecraft:kelp', 0.1, true],
                ['minecraft:sugar_cane', 0.15, true],
                ['minecraft:slime_ball', 0.1, true],
                ['minecraft:sea_pickle', 0.1, true],
                ['minecraft:seagrass', 0.15, true],
                ['minecraft:prismarine_crystals', 0.1, true],
                ['minecraft:prismarine_shard', 0.1, true]
            ],
            'createsifter:brass_mesh': [
                ['minecraft:clay_ball', 0.5, true],
                ['minecraft:kelp', 0.1, true],
                ['minecraft:sugar_cane', 0.15, true],
                ['minecraft:slime_ball', 0.1, true],
                ['minecraft:sea_pickle', 0.1, true],
                ['minecraft:seagrass', 0.15, true],
                ['minecraft:prismarine_crystals', 0.1, true],
                ['minecraft:prismarine_shard', 0.1, true]
            ],
            'kubejs:diamond_mesh': [
                ['minecraft:clay_ball', 0.5, true],
                ['minecraft:kelp', 0.1, true],
                ['minecraft:sugar_cane', 0.15, true],
                ['minecraft:slime_ball', 0.1, true],
                ['minecraft:sea_pickle', 0.1, true],
                ['minecraft:seagrass', 0.15, true],
                ['minecraft:prismarine_crystals', 0.1, true],
                ['minecraft:prismarine_shard', 0.1, true]
            ],
            'kubejs:netherite_mesh': [
                ['minecraft:clay_ball', 0.5, true],
                ['minecraft:kelp', 0.1, true],
                ['minecraft:sugar_cane', 0.15, true],
                ['minecraft:slime_ball', 0.1, true],
                ['minecraft:sea_pickle', 0.1, true],
                ['minecraft:seagrass', 0.15, true],
                ['minecraft:prismarine_crystals', 0.1, true],
                ['minecraft:prismarine_shard', 0.1, true]
            ]
        },
        'minecraft:dirt': {
            'createsifter:string_mesh': [
                ['minecraft:carrot', 0.1],
                ['minecraft:potato', 0.1],
                ['minecraft:sweet_berries', 0.1],
                ['minecraft:beetroot_seeds', 0.1]
            ],
            'createsifter:andesite_mesh': [
                ['minecraft:carrot', 0.1],
                ['minecraft:potato', 0.1],
                ['minecraft:sweet_berries', 0.1],
                ['minecraft:beetroot_seeds', 0.1],
                ['botania:grass_seeds', 0.1],
                ['farmersdelight:cabbage_seeds', 0.05],
                ['farmersdelight:rice', 0.05],
                ['farmersdelight:tomato_seeds', 0.05],
                ['farmersdelight:onion', 0.05]              
            ],
            'createsifter:zinc_mesh': [
                ['minecraft:carrot', 0.1],
                ['minecraft:potato', 0.1],
                ['minecraft:sweet_berries', 0.1],
                ['minecraft:beetroot_seeds', 0.1],
                ['minecraft:melon_seeds', 0.1],
                ['minecraft:pumpkin_seeds', 0.1],
                ['botania:grass_seeds', 0.1],
                ['farmersdelight:cabbage_seeds', 0.05],
                ['farmersdelight:rice', 0.05],
                ['farmersdelight:tomato_seeds', 0.05],
                ['farmersdelight:onion', 0.05],
                ['botania:grass_seeds', 0.1]
            ],
            'createsifter:brass_mesh': [
                ['minecraft:carrot', 0.1],
                ['minecraft:potato', 0.1],
                ['minecraft:sweet_berries', 0.1],
                ['minecraft:beetroot_seeds', 0.1],
                ['minecraft:melon_seeds', 0.1],
                ['minecraft:pumpkin_seeds', 0.1],
                ['botania:grass_seeds', 0.1],
                ['farmersdelight:cabbage_seeds', 0.05],
                ['farmersdelight:rice', 0.05],
                ['farmersdelight:tomato_seeds', 0.05],
                ['farmersdelight:onion', 0.05],
                ['botania:grass_seeds', 0.1],
                ['kubejs:mycelium_spores', 0.1]
            ],
            'kubejs:diamond_mesh': [
                ['minecraft:carrot', 0.1],
                ['minecraft:potato', 0.1],
                ['minecraft:sweet_berries', 0.1],
                ['minecraft:beetroot_seeds', 0.1],
                ['minecraft:melon_seeds', 0.1],
                ['minecraft:pumpkin_seeds', 0.1],
                ['botania:grass_seeds', 0.1],
                ['farmersdelight:cabbage_seeds', 0.05],
                ['farmersdelight:rice', 0.05],
                ['farmersdelight:tomato_seeds', 0.05],
                ['farmersdelight:onion', 0.05],
                ['botania:grass_seeds', 0.1],
                ['kubejs:mycelium_spores', 0.1]
            ],
            'kubejs:netherite_mesh': [
                ['minecraft:carrot', 0.1],
                ['minecraft:potato', 0.1],
                ['minecraft:sweet_berries', 0.1],
                ['minecraft:beetroot_seeds', 0.1],
                ['minecraft:melon_seeds', 0.1],
                ['minecraft:pumpkin_seeds', 0.1],
                ['botania:grass_seeds', 0.1],
                ['farmersdelight:cabbage_seeds', 0.05],
                ['farmersdelight:rice', 0.05],
                ['farmersdelight:tomato_seeds', 0.05],
                ['farmersdelight:onion', 0.05],
                ['botania:grass_seeds', 0.1],
                ['kubejs:mycelium_spores', 0.1]
            ]
        }, 
        'minecraft:gravel': {
            'createsifter:andesite_mesh': [
                ['create:copper_nugget', 0.15],
                ['create:zinc_nugget', 0.2],
                ['minecraft:iron_nugget', 0.6],
                ['minecraft:coal', 0.10],
                ['minecraft:lapis_lazuli', 0.05],
                ['minecraft:flint', 0.04],
                ['create:experience_nugget', 0.05]
            ],
            'createsifter:zinc_mesh': [
                ['create:copper_nugget', 0.5],
                ['create:zinc_nugget', 0.4],
                ['minecraft:iron_nugget', 0.8],
                ['minecraft:iron_nugget', 0.2],
                ['minecraft:gold_nugget', 0.4],
                ['minecraft:coal', 0.15],
                ['minecraft:lapis_lazuli', 0.08],
                ['minecraft:flint', 0.06],
                ['create:experience_nugget', 0.1]
            ],
            'createsifter:brass_mesh': [
                ['create:crushed_raw_copper', 0.15],
                ['create:crushed_raw_zinc', 0.1],
                ['create:crushed_raw_iron', 0.3],
                ['create:crushed_raw_gold', 0.1],
                ['minecraft:diamond', 0.03],
                ['minecraft:emerald', 0.02],
                ['minecraft:coal', 0.2],
                ['minecraft:lapis_lazuli', 0.1],
                ['minecraft:flint', 0.15],
                ['create:experience_nugget', 0.15]
            ],
            'kubejs:diamond_mesh': [
                ['minecraft:raw_copper', 0.25],
                ['create:raw_zinc', 0.2],
                ['minecraft:raw_iron', 0.4],
                ['minecraft:raw_gold', 0.2],
                ['minecraft:diamond', 0.06],
                ['minecraft:diamond', 0.03],
                ['minecraft:emerald', 0.04],
                ['minecraft:emerald', 0.02],
                ['minecraft:coal', 0.2],
                ['minecraft:lapis_lazuli', 0.15],
                ['minecraft:flint', 0.2],
                ['create:experience_nugget', 0.2]
            ],
            'kubejs:netherite_mesh': [
                ['minecraft:raw_copper', 0.5],
                ['create:raw_zinc', 0.4],
                ['minecraft:raw_iron', 0.8],
                ['minecraft:raw_gold', 0.4],
                ['minecraft:diamond', 0.12],
                ['minecraft:diamond', 0.06],
                ['minecraft:emerald', 0.08],
                ['minecraft:emerald', 0.04],
                ['minecraft:coal', 0.4],
                ['minecraft:lapis_lazuli', 0.2],
                ['minecraft:flint', 0.3],
                ['create:experience_nugget', 0.3]
            ]
        },
        'kubejs:crushed_end_stone': {
            'createsifter:brass_mesh': [
                ['minecraft:ender_pearl', 0.1]
            ],
            'kubejs:diamond_mesh': [
                ['minecraft:ender_pearl', 0.3],
                ['minecraft:chorus_flower', 0.1]
            ],
            'kubejs:netherite_mesh': [
                ['minecraft:ender_pearl', 0.5],
                ['minecraft:ender_pearl', 0.1],
                ['minecraft:chorus_flower', 0.2]
            ]
        },
        'kubejs:crushed_netherrack': {
            'createsifter:brass_mesh': [
                ['create:cinder_flour', 1],
                ['create:cinder_flour', 0.1],
                ['create:crushed_raw_gold', 0.5],
                ['kubejs:crimson_nylium_spores', 0.2],
                ['kubejs:warped_nylium_spores', 0.2],
                ['ars_nouveau:red_archwood_sapling', 0.1]
            ],
            'kubejs:diamond_mesh': [
                ['create:cinder_flour', 1],
                ['create:cinder_flour', 0.4],
                ['minecraft:raw_gold', 0.8],
                ['minecraft:netherite_scrap', 0.04],
                ['kubejs:crimson_nylium_spores', 0.2],
                ['kubejs:warped_nylium_spores', 0.2],
                ['ars_nouveau:red_archwood_sapling', 0.1]
            ],
            'kubejs:netherite_mesh': [
                ['create:cinder_flour', 1],
                ['create:cinder_flour', 0.6],
                ['minecraft:raw_gold', 1],
                ['minecraft:raw_gold', 0.2],
                ['minecraft:netherite_scrap', 0.08],
                ['kubejs:crimson_nylium_spores', 0.2],
                ['kubejs:warped_nylium_spores', 0.2],
                ['ars_nouveau:red_archwood_sapling', 0.1]
            ]
        },
        'kubejs:dust': {
            'createsifter:string_mesh': [
                ['minecraft:gunpowder', 0.09],
                ['minecraft:bone_meal', 0.2]
            ],
            'createsifter:andesite_mesh': [
                ['minecraft:redstone', 0.2],
                ['minecraft:gunpowder', 0.12],
                ['minecraft:bone_meal', 0.2]
            ],
            'createsifter:zinc_mesh': [
                ['minecraft:redstone', 0.25],
                ['minecraft:gunpowder', 0.16],
                ['minecraft:bone_meal', 0.2]
            ],
            'createsifter:brass_mesh': [
                ['minecraft:redstone', 0.3],
                ['minecraft:gunpowder', 0.2],
                ['minecraft:bone_meal', 0.2]
            ],
            'kubejs:diamond_mesh': [
                ['create:rose_quartz', 0.2],
                ['minecraft:redstone', 0.35],
                ['minecraft:gunpowder', 0.25],
                ['minecraft:bone_meal', 0.2]
            ],
            'kubejs:netherite_mesh': [
                ['create:rose_quartz', 0.3],
                ['minecraft:redstone', 0.45],
                ['minecraft:gunpowder', 0.35],
                ['minecraft:bone_meal', 0.2]
            ]
        }, 
        '#minecraft:leaves': {
            'createsifter:string_mesh': [
                ['minecraft:apple', 0.05],
                ['minecraft:golden_apple', 0.003]
            ],
            'createsifter:andesite_mesh': [
                ['minecraft:apple', 0.1],
                ['minecraft:apple', 0.05],
                ['minecraft:golden_apple', 0.006],
                ['minecraft:golden_apple', 0.003]
            ],
            'createsifter:zinc_mesh': [
                ['minecraft:apple', 0.2],
                ['minecraft:apple', 0.1],
                ['minecraft:apple', 0.05],
                ['minecraft:golden_apple', 0.01],
                ['minecraft:golden_apple', 0.006],
                ['minecraft:golden_apple', 0.003]
            ],
            'createsifter:brass_mesh': [
                ['minecraft:apple', 0.4],
                ['minecraft:apple', 0.2],
                ['minecraft:apple', 0.1],
                ['minecraft:golden_apple', 0.02],
                ['minecraft:golden_apple', 0.01],
                ['minecraft:golden_apple', 0.004]
            ],
            'kubejs:diamond_mesh': [
                ['minecraft:apple', 0.5],
                ['minecraft:apple', 0.3],
                ['minecraft:apple', 0.15],
                ['minecraft:golden_apple', 0.03],
                ['minecraft:golden_apple', 0.02],
                ['minecraft:golden_apple', 0.006]
            ],
            'kubejs:netherite_mesh': [
                ['minecraft:apple', 0.6],
                ['minecraft:apple', 0.4],
                ['minecraft:apple', 0.2],
                ['minecraft:golden_apple', 0.04],
                ['minecraft:golden_apple', 0.03],
                ['minecraft:golden_apple', 0.008]
            ]
        },
        'minecraft:red_sand': {
            'kubejs:diamond_mesh': [
                ['minecraft:heart_of_the_sea', 0.005, true]
            ],
            'kubejs:netherite_mesh': [
                ['minecraft:heart_of_the_sea', 0.01, true]
            ]
        }, 
    }
    Object.entries(recipes).forEach(([input, Mesh]) => {
        Object.entries(Mesh).forEach(([meshType, inputArr]) => {
            // generate 2 maps
            let meshMap = []
            let waterloggedMeshMap = []

            for (let single_input of inputArr) {

                // use variabls for easy reading
                let item = single_input[0]
                let chance = single_input[1]
                let waterlogged = single_input[2] ?? false

                // if not waterlogged, push to meshMap, else waterloggedMeshMap
                if (!waterlogged) {
                    meshMap.push(Item.of(item).withChance(chance))
                }
                else {
                    waterloggedMeshMap.push(Item.of(item).withChance(chance))
                }
            }

            // if map isnt empty, create recipe
            if (meshMap.length > 0) event.recipes.createsifterSifting(meshMap, [input, meshType])
            if (waterloggedMeshMap.length > 0) event.recipes.createsifterSifting(waterloggedMeshMap, [input, meshType]).waterlogged()
        })

    })

})
