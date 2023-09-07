StartupEvents.registry('item', event => {
    event.create('honey_cake_slice').displayName('Slice of Honey Cake').useAnimation('eat').food(food => {
        food.hunger(2).saturation(1)
    });
    event.create('chocolate_cake_slice').displayName('Slice of Chocolate Cake').useAnimation('eat').food(food => {
        food.hunger(2).saturation(1)
    });
});