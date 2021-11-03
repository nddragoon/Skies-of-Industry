onEvent('recipes', e => {
    e.shaped(Item.of('framedcompactdrawers:framed_full_one', '{MatT:{id:"minecraft:air",Count:1b},MatF:{id:"minecraft:air",Count:1b},BlockEntityTag:{MatT:{id:"minecraft:air",Count:1b},MatF:{id:"minecraft:air",Count:1b},Upgrades:[{Slot:0b,id:"storagedrawers:creative_vending_upgrade",Count:1b}],MatS:{id:"minecraft:oak_planks",Count:1b},id:"framedcompactdrawers:framed_full_one",Drawers:[{Item:{id:"minecraft:oak_log",Count:1b},Count:1}]},MatS:{id:"minecraft:oak_planks",Count:1b},display:{Lore:[\'"(+NBT)"\']}}'),
    [
        'LLL',
        'LCL',
        'LLL'
    ],{
        L: 'minecraft:oak_log',
        C: '#forge:chests/wooden'
    }).id('kubejs:misc/shaped/oak_drawer')
    e.shaped(Item.of('framedcompactdrawers:framed_full_one', '{MatT:{id:"minecraft:air",Count:1b},MatF:{id:"minecraft:air",Count:1b},BlockEntityTag:{MatT:{id:"minecraft:air",Count:1b},MatF:{id:"minecraft:air",Count:1b},Upgrades:[{Slot:0b,id:"storagedrawers:creative_vending_upgrade",Count:1b}],MatS:{id:"minecraft:andesite",Count:1b},id:"framedcompactdrawers:framed_full_one",Drawers:[{Item:{id:"minecraft:andesite",Count:1b},Count:1}]},MatS:{id:"minecraft:andesite",Count:1b},display:{Lore:[\'"(+NBT)"\']}}'),
    [
        'AAA',
        'ACA',
        'AAA'
    ],{
        A: 'minecraft:andesite',
        C: '#forge:chests/wooden'
    }).id('kubejs:misc/shaped/andesite_drawer')
    e.shaped('kubejs:plant_ball', ['GGG', 'G G', 'GGG'], {
        G: [
            'minecraft:grass',
            'minecraft:tall_grass',
            'minecraft:fern',
            'minecraft:large_fern'
        ]
    }).id('kubejs:misc/shaped/plant_ball')
    e.shaped('kubejs:plant_ball', ['LL', 'LL'], {L: '#minecraft:leaves'})

    e.recipes.createMilling([
        '4x kubejs:iron_oxide',
        Item.of('thermal:iron_dust').withChance(0.25)
    ], 'dustrial_decor:rusty_iron_ingot').id('kubejs:custom_items/milling/iron_oxide')
    e.recipes.createMilling(
        'kubejs:mote_of_power',
        'create:large_cogwheel'
    ).id('kubejs:custom_items/milling/mote_of_power')

    e.recipes.createCrushing([
        '6x kubejs:iron_oxide',
        Item.of('2x kubejs:iron_oxide').withChance(0.75),
        Item.of('thermal:iron_dust').withChance(0.5)
    ], 'dustrial_decor:rusty_iron_ingot').id('kubejs:custom_items/crushing/iron_oxide')
})
