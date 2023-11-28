// priority: 0
Platform.mods.kubejs.name = 'Create Block'

StartupEvents.registry('block', event => {
    //event.create('compressed_dirt_test').parentModel("kubejs:block/meshes/dirttest").displayName('Compressed Dirt test (1x)').material('dirt').hardness(2.5);
    let StoneBlocks = ['Andesite', 'Cobbled Deepslate', 'Cobblestone', 'Deepslate', 'Stone', 'Coal', 'Quartz', 'Lapis', 'Diorite', 'Granite', 'Snow', 'End Stone', 'Tuff', 'Nether Bricks', 'Dripstone']
    StoneBlocks.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('stone').hardness(2.5 * (i + 1)).resistance(0.5).tagBlock('minecraft:mineable/pickaxe');
        }   
    })

    for (let i = 1; i < 10; i++) {
        event.create(`obsidian_${i}x`).displayName(`Compressed Obsidian (${i}x)`).material('stone').hardness(50 * (i + 1)).resistance(1200).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool');
    }

    const Sand = ['Sand', 'Red Sand']
    Sand.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('sand').hardness(0.5 * (i + 1)).resistance(0.5).tagBlock('minecraft:mineable/shovel');
        }
    })
    let Gravel = ['Gravel', 'Clay']
    Gravel.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('dirt').hardness(0.6 * (i + 1)).resistance(0.5).tagBlock('minecraft:mineable/shovel');
        }
    })
    let Dirt = ['Dirt']
    Dirt.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('dirt').hardness(0.5 * (i + 1)).resistance(0.5).tagBlock('minecraft:mineable/shovel');
        }
    })
    let StoneLevel = ['Iron']
    StoneLevel.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('metal').hardness(5.0 * (i + 1)).resistance(6.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool');
        }
    })
    let IronLevel = ['Diamond', 'Gold', 'Emerald', 'Brass', 'Zinc']
    IronLevel.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('metal').hardness(5.0 * (i + 1)).resistance(6.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool');
        }
    })
    let Netherite = ['Netherite']
    Netherite.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('netherite').hardness(50 * (i + 1)).resistance(1500).tagBlock('minecraft:mineable/pickaxe');
        }
    })
    let Copper = ['Copper']
    Copper.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('copper').hardness(5.0 * (i + 1)).resistance(6.0).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool');
        }
    })
    let Honey = ['Honey']
    Honey.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('honey').hardness(0).resistance(0).defaultTranslucent().speedFactor(-0.03 * i + 0.32).jumpFactor(-0.05 * i + 0.55);
        }
    })
    let Netherrack = ['Netherrack']
    Netherrack.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('netherrack').hardness(0.4 * (i + 1)).resistance(0.4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_diamond_tool');
        }
    })
    let Soulsand = ['Soul Sand']
    Soulsand.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('soul_sand').hardness(0.5 * (i+1)).resistance(0.5).tagBlock('minecraft:mineable/shovel');
        }
    })
    let Glass = ['Glass']
    Glass.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('glass').hardness(0.3 * (i + 1)).resistance(0.3).defaultCutout();
        }
    })
    let Ice = ['Packed Ice']
    Ice.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('glass').hardness(0.5 * (i + 1)).resistance(0.5).tagBlock('minecraft:mineable/pickaxe');
        }
    })
    let Glowstone = ['Glowstone']
    Glowstone.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('glass').hardness(0.3 * (i + 1)).resistance(0.3).lightLevel(1);
        }
    })
    let Wood = ['Oak', 'Birch', 'Spruce', 'Jungle', 'Acacia', 'Dark Oak', 'Mangrove']
    Wood.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `planks_${i}x`).displayName('Compressed ' + item + ` Planks (${i}x)`).material('wood').hardness(2 * (i + 1)).resistance(3).tagBlock('minecraft:mineable/axe');
        }
    })
    Wood.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `log_${i}x`).displayName('Compressed ' + item + ` Log (${i}x)`).material('wood').hardness(2 * (i + 1)).resistance(2).tagBlock('minecraft:mineable/axe').property(BlockProperties.AXIS);
        }
    })
    let Stem = ['Crimson', 'Warped']
    Stem.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `stem_${i}x`).displayName('Compressed ' + item + ` Stem (${i}x)`).material('wood').hardness(2 * (i + 1)).resistance(2).tagBlock('minecraft:mineable/axe').property(BlockProperties.AXIS);
        }
    })
})
