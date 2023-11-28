StartupEvents.registry('fluid', e => {
    global.fluidIds = ['beer', 'vodka', 'mead', 'rice_wine', 'egg_grog', 'strongroot_ale', 'saccharine_rum', 'pale_jane', 'dread_nog', 'salty_folly', 'steel_toe_stout', 'glittering_grenadine', 'bloody_mary', 'red_rum', 'withering_dross', 'kombucha']
    global.fluidColors = [0xdbc070, 0xc8d8c9, 0xff9116, 0xeaeebd, 0xddf3f5, 0xbc4a4f, 0xbb2c44, 0xeee7d0, 0xe1f5dd, 0x38672d, 0x847679, 0xf5a55e, 0xb82a30, 0xbd3c19, 0x42352e, 0x7b712c]
    for (let i = 0; i < global.fluidIds.length; i++) e.create(global.fluidIds[i]).thinTexture(global.fluidColors[i]).noBucket().noBlock()
})