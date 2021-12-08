onEvent('recipes', e => {
    e.custom({
        type: "interactio:item_fluid_transform",
        inputs: [
            {
                tag: "forge:ingots/iron",
                count: 1
            }
        ],
        fluid: { fluid: "water" },
        output: {
            entries: [
                {
                    result: {
                        item: "dustrial_decor:rusty_iron_ingot",
                        count: 1
                    },
                    weight: 1
                }
            ],
            empty_weight: 0,
            rolls: 1
        },
        consume_fluid: 0
    }).id('interactio:item_fluid_transform/rusty_iron_ingot')

    e.custom({
        type: "interactio:item_fluid_transform",
        inputs: [
            {
                item: "create:limesand",
                count: 1
            }
        ],
        fluid: { fluid: "water" },
        output: {
            entries: [
                {
                    result: {
                        item: "minecraft:clay_ball",
                        count: 2
                    },
                    weight: 0.75
                }
            ],
            empty_weight: 0.25,
            rolls: 1
        },
        consume_fluid: 0
    }).id('interactio:item_fluid_transform/clay_ball')

    e.custom({
        type: "interactio:item_anvil_smashing",
        inputs: [
            {
                item: "tconstruct:blaze_head",
                count: 1
            }, {
                item: "create:empty_blaze_burner",
                count: 1
            }
        ],
        output: {
            entries: [
                {
                    result: { item: "create:blaze_burner" },
                    weight: 1
                }
            ],
            rolls: 1,
            empty_weight: 0
        },
        damage: 0
    })
})
