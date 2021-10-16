onEvent('recipes', e => {
    e.shapeless(
        'emendatusenigmatica:copper_chunk',
        ['emendatusenigmatica:iron_chunk', '8x minecraft:redstone']
    ).id('kubejs:emendatusenigmatica/shapeless/copper_chunk')

    e.smelting('emendatusenigmatica:iron_chunk', 'compressium:gravel_1').id('kubejs:emendatusenigmatica/smelting/iron_chunk')
})
