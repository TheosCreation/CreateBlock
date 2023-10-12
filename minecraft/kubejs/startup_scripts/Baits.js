const $ForgeSpawnEggItem = Java.loadClass('net.minecraftforge.common.ForgeSpawnEggItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $EntityType = Java.loadClass('net.minecraft.world.entity.EntityType')
StartupEvents.registry('item', e => {
    e.createCustom('cow_bait', () => new $ForgeSpawnEggItem(() => $EntityType.COW, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('sheep_bait', () => new $ForgeSpawnEggItem(() => $EntityType.SHEEP, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('chicken_bait', () => new $ForgeSpawnEggItem(() => $EntityType.CHICKEN, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('pig_bait', () => new $ForgeSpawnEggItem(() => $EntityType.PIG, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('wolf_bait', () => new $ForgeSpawnEggItem(() => $EntityType.WOLF, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('ocelot_bait', () => new $ForgeSpawnEggItem(() => $EntityType.OCELOT, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('squid_bait', () => new $ForgeSpawnEggItem(() => $EntityType.SQUID, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('glow_squid_bait', () => new $ForgeSpawnEggItem(() => $EntityType.GLOW_SQUID, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('rabbit_bait', () => new $ForgeSpawnEggItem(() => $EntityType.RABBIT, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('polar_beer_bait', () => new $ForgeSpawnEggItem(() => $EntityType.POLAR_BEAR, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('llama_bait', () => new $ForgeSpawnEggItem(() => $EntityType.LLAMA, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('parrot_bait', () => new $ForgeSpawnEggItem(() => $EntityType.PARROT, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('cat_bait', () => new $ForgeSpawnEggItem(() => $EntityType.CAT, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('fox_bait', () => new $ForgeSpawnEggItem(() => $EntityType.FOX, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('turtle_bait', () => new $ForgeSpawnEggItem(() => $EntityType.TURTLE, 16777215, 16777215, new $ItemProperties()));
    e.createCustom('mooshroom_bait', () => new $ForgeSpawnEggItem(() => $EntityType.MOOSHROOM, 16777215, 16777215, new $ItemProperties()));
})