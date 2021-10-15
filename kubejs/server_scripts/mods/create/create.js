onEvent('recipes', e => {
    e.shaped('create:andesite_alloy', [
        'PPP',
        'PAP',
        'PPP'
    ],{
        P: 'botania:pebble',
        A: 'minecraft:andesite'
    }).id('kubejs:create/shaped/crude_alloy')



    e.recipes.createSplashing([
        '5x create:zinc_nugget',
        Item.of('4x create:zinc_nugget').withChance(0.5)
    ], 'compressium:gravel_1').id('kubejs:create/washing/zinc_nugget')
})
