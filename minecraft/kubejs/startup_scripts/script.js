// priority: 0
Platform.mods.kubejs.name = 'Create Block'
// console.info('Hello, World! (You will only see this line once in console, during startup)')

// temp commit while waiting for mod update
// StartupEvents.registry('item', event => {
// 	// Register new items here
// 	// event.create('example_item').displayName('Example Item')
// 	event.create('amethyst_mesh','createsifter:mesh').displayName('Amethyst Mesh');
// 	event.create('quartz_mesh','createsifter:mesh').displayName('Quartz Mesh');
// })

// Temp fix 
StartupEvents.registry('block', event => {
    event.create('crushed_netherrack').material('clay').hardness(0.5).displayName('Crushed Netherrack');
    event.create('cracked_stone').material('stone').displayName('Cracked Stone');
    event.create('reactive_bricks').material('stone').displayName('Reactive Bricks');
    event.create('soulless_soil').material('dirt').displayName('Soulless Soil');
    event.create('warping_block').material('metal').displayName('Warping Block');
    event.create('nether_star_block').material('metal').displayName('Nether Star Block').hardness(1.5).lightLevel(1);;
    //event.create('crushed_end_stone').texture('createsifter:block/crushed_end_stone').displayName('Crushed End Stone');
})
StartupEvents.registry('item', event => {
    let item = (name) => {
        let id = name.toLowerCase().replace(/ /g, "_");
        event.create(id).texture(`kubejs:item/${id}`).displayName(name);
    };
    
    event.create("diamond_mesh", "createsifter:mesh").displayName(`Diamond Mesh`).parentModel("kubejs:block/meshes/diamond_mesh").texture('kubejs:item/diamond_mesh')
    event.create("netherite_mesh", "createsifter:mesh").displayName(`Netherite Mesh`).parentModel("kubejs:block/meshes/netherite_mesh").texture('kubejs:item/netherite_mesh')
    event.create("quartz_mesh", "createsifter:mesh").displayName(`Quartz Mesh`).parentModel("kubejs:block/meshes/quartz_mesh").texture('kubejs:item/quartz_mesh')
    event.create("worldshaper_cogwheel").displayName(`Worldshaper Cogwheel`).parentModel("kubejs:item/worldshaper_cogwheel")
    event.create("worldshaper_barrel").displayName(`Worldshaper Barrel`).parentModel("kubejs:item/worldshaper_barrel")
    event.create("worldshaper_handle").displayName(`Worldshaper Handle`).parentModel("kubejs:item/worldshaper_handle")
    event.create('incomplete_cracked_stone').parentModel("minecraft:block/cube_all").displayName('Incomplete Cracked Stone').texture('all', 'kubejs:item/incomplete_cracked_stone');
    event.create('incomplete_netherrack').parentModel("minecraft:block/cube_all").displayName('Incomplete Netherrack').texture('all', 'kubejs:item/incomplete_netherrack');

    event.create('chromatic_tube').displayName('Chromatic Tube').texture('kubejs:item/chromatic_tube').rarity('RARE')
    event.create('rad_star').displayName('Radiating Star').texture('kubejs:item/rad_star').rarity('RARE').glow(true)
    event.create('chromatic_dust').displayName('Chromatic Dust').texture('kubejs:item/chromatic_dust').rarity('UNCOMMON').glow(true)
    event.create('chromatic_shard').displayName('Chromatic Shard').texture('kubejs:item/chromatic_shard').rarity('UNCOMMON').glow(true)
    event.create('create_ingot').displayName('Create Ingot').rarity('UNCOMMON').rarity('RARE').glow(true)
    item("Incomplete Machine Casing");
    item("Warped Nylium Spores");
    item("Crimson Nylium Spores");
    item("Mycelium Spores");
    item("Incomplete Raw Advanced Processor");
    item("Incomplete Raw Improved Processor");
    item("Incomplete Raw Basic Processor");
    item("Corruption Bottle");
})
StartupEvents.registry('fluid', event => {
    event.create('refined_fluid').displayName('Refined Essence')
        .stillTexture('kubejs:fluid/refined_fluid_still')
        .flowingTexture('kubejs:fluid/refined_fluid_flow')
        .bucketColor(0xFFFAF0)

    event.create('rainbow').displayName('Rainbow Essence')
        .stillTexture('kubejs:fluid/rainbow_still')
        .flowingTexture('kubejs:fluid/rainbow_flow')
        

    event.create('magic').displayName('Liquid Magic')
        .stillTexture('kubejs:fluid/magic_still')
        .flowingTexture('kubejs:fluid/magic_flowing')
        .bucketColor(0xE891E5)

    event.create('sourceberry').displayName('Sourceberry Juice')
        .stillTexture('kubejs:fluid/magic_still')
        .flowingTexture('kubejs:fluid/magic_flowing')
        .bucketColor(0x641FBB)

    event.create('magebloom').displayName('Magebloom Juice')
        .stillTexture('kubejs:fluid/magic_still')
        .flowingTexture('kubejs:fluid/magic_flowing')
        .bucketColor(0xF036DA)

    event.create('source').displayName('Liquid Source')
        .stillTexture('kubejs:fluid/source_still')
        .flowingTexture('kubejs:fluid/source_flowing')
        .bucketColor(0xAE62DF)
})

// StartupEvents.registry('block', event => {
// 	// Register new blocks here
// 	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
// })
