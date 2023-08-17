const $CakeBlock = Java.loadClass('net.minecraft.world.level.block.CakeBlock');

/**
 * Slice a cake into slices.
 * @param {Internal.BlockRightClickedEventJS} event
 * @param {Internal.ItemStack_} original
 * @param {Internal.ItemStack_} slice
 */
function sliceCake(event, original, slice) {
    if (!event.entity.isPlayer()) {
        return false;
    }

    /** @type {Internal.Player} */
    const player = event.entity;
    const toolStack = player.getItemInHand(event.hand);

    if (!toolStack.hasTag('farmersdelight:tools/knives')) {
        return false;
    }

    const level = event.level;
    const block = event.block;
    const pos = block.pos;
    const state = block.blockState;

    const bites = state.getValue($CakeBlock.BITES);

    /** @type {Internal.ItemEntity} */
    let itemEntity = level.createEntity('item');
    itemEntity.x = pos.x + (bites * 0.1);
    itemEntity.y = pos.y + 0.2;
    itemEntity.z = pos.z + 0.5;
    itemEntity.setDeltaMovement(new Vec3(-0.05, 0, 0));
    itemEntity.item = slice;
    itemEntity.item.count = 1;
    itemEntity.spawn();

    level.playSound(null, pos, 'block.wool.break', 'players', 0.8, 0.8);

    if (bites < 6) {
        block.set(original, { bites: `${bites + 1}` });
    } else {
        level.removeBlock(pos, false);
    }

    return true;
}

BlockEvents.rightClicked('createaddition:chocolate_cake', event => {
    if (sliceCake(event, 'createaddition:chocolate_cake', 'kubejs:chocolate_cake_slice')) {
        event.success();
    }
});

BlockEvents.rightClicked('createaddition:honey_cake', event => {
    if (sliceCake(event, 'createaddition:honey_cake', 'kubejs:honey_cake_slice')) {
        event.success();
    }
});

ServerEvents.recipes((event) => {
    //Add missing cake construction recipe for custom cake slices.
    event.recipes.minecraft.crafting_shapeless('createaddition:chocolate_cake', [
        'kubejs:chocolate_cake_slice',
        'kubejs:chocolate_cake_slice',
        'kubejs:chocolate_cake_slice',
        'kubejs:chocolate_cake_slice',
        'kubejs:chocolate_cake_slice',
        'kubejs:chocolate_cake_slice',
        'kubejs:chocolate_cake_slice'
    ]);

    event.recipes.minecraft.crafting_shapeless('createaddition:honey_cake', [
        'kubejs:honey_cake_slice',
        'kubejs:honey_cake_slice',
        'kubejs:honey_cake_slice',
        'kubejs:honey_cake_slice',
        'kubejs:honey_cake_slice',
        'kubejs:honey_cake_slice',
        'kubejs:honey_cake_slice'
    ]);
});