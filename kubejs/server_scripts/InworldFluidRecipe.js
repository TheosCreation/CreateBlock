ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": "create:refined_radiance"
        },
        "block_in": {
            "blocks": ["minecraft:water"],
        },
        "post": [
            {
                "type": "place",
                "block": "kubejs:refined_fluid"
            },
            {
                "type": "drop_item",
                "item": "create:chromatic_compound",
                "contextual": {
                    "type": "chance",
                    "chance": 0.15
                }
            }
        ]
    })
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": "create:cinder_flour"
        },
        "block_in": {
            "blocks": ["kubejs:rainbow"],
        },
        "post": [
            {

                "type": "place",
                "block": "air",
            },
            {
                "type": "drop_item",
                "item": "kubejs:chromatic_dust",
            }
        ]
    })
})