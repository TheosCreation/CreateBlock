/*
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("custommachinery:assembler_machine", 100)
        .requireItem(Item.of("minecraft:coal", 1), "input-middle-middle")
        .produceItem(Item.of("minecraft:diamond", 1))
        .requireStructure([
            //back  middle front
            ["aaa", "aaa", "aaa"],//bottom
            ["aaa", "aaa", "ama"],//middle
            ["aaa", "aaa", "aaa"]//top
        ], { "a": "minecraft:stone" })
})
*/