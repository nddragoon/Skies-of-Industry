onEvent('recipes', e => {
    e.shaped('create:andesite_alloy', [
        'PPP',
        'PAP',
        'PPP'
    ],{
        P: 'botania:pebble',
        A: 'minecraft:andesite'
    }).id('kubejs:create/shaped/crude_alloy')
})
