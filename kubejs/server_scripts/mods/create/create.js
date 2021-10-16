onEvent('recipes', e => {
    e.shaped('create:andesite_alloy', [
        'PPP',
        'PAP',
        'PPP'
    ],{
        P: 'botania:pebble',
        A: 'minecraft:andesite'
    }).id('kubejs:create/shaped/crude_alloy')

    e.recipes.createSplashing('emendatusenigmatica:zinc_chunk', 'compressium:gravel_1').id('kubejs:create/washing/zinc_nugget')
})
