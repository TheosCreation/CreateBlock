// priority: 0
Platform.mods.kubejs.name = 'Create Block'

StartupEvents.registry('block', event => {
    //event.create('compressed_dirt_test').parentModel("kubejs:block/meshes/dirttest").displayName('Compressed Dirt test (1x)').material('dirt').hardness(2.5);
    let StoneBlocks = ['Andesite', 'Cobbled Deepslate', 'Cobblestone', 'Deepslate', 'Stone', 'Coal', 'Quartz', 'Lapis', 'Diorite', 'Granite', 'Obsidian', 'Snow', 'End Stone', 'Tuff', 'Nether Bricks', 'Dripstone']
    StoneBlocks.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('stone').hardness(2.5).tagBlock('minecraft:mineable/pickaxe');
        }   
    })
    const Sand = ['Sand', 'Red Sand']
    Sand.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('sand').hardness(2.5).tagBlock('minecraft:mineable/shovel');
        }
    })
    let Gravel = ['Gravel']
    Gravel.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('gravel').hardness(2.5).tagBlock('minecraft:mineable/shovel');
        }
    })
    let Dirt = ['Dirt', 'Clay']
    Dirt.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('dirt').hardness(2.5).tagBlock('minecraft:mineable/shovel');
        }
    })
    let Iron = ['Iron', 'Diamond', 'Gold', 'Emerald', 'Brass', 'Zinc']
    Iron.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('metal').hardness(5).tagBlock('minecraft:mineable/pickaxe');
        }
    })
    let Netherite = ['Netherite']
    Netherite.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('netherite').hardness(20).tagBlock('minecraft:mineable/pickaxe');
        }
    })
    let Copper = ['Copper']
    Copper.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('copper').hardness(5).tagBlock('minecraft:mineable/pickaxe');
        }
    })
    let Honey = ['Honey']
    Honey.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('honey').hardness(5).tagBlock('minecraft:mineable/pickaxe').defaultTranslucent().speedFactor(-0.03 * i + 0.32).jumpFactor(-0.05 * i + 0.55);
        }
    })
    let Netherrack = ['Netherrack']
    Netherrack.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('netherrack').hardness(2.5).tagBlock('minecraft:mineable/pickaxe');
        }
    })
    let Soulsand = ['Soul Sand']
    Soulsand.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('soul_sand').hardness(2.5).tagBlock('minecraft:mineable/shovel');
        }
    })
    let Glass = ['Glass']
    Glass.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('glass').hardness(1.5).defaultCutout();
        }
    })
    let Ice = ['Packed Ice']
    Ice.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('glass').hardness(1.5);
        }
    })
    let Glowstone = ['Glowstone']
    Glowstone.forEach(item => {
        let name = item.toLowerCase().replace(/ /g, "_");
        for (let i = 1; i < 10; i++) {
            event.create(name + `_${i}x`).displayName('Compressed ' + item + ` (${i}x)`).material('glass').hardness(1.5).lightLevel(1);
        }
    })
})
