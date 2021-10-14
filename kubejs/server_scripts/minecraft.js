onEvent('recipes', e => {
    e.shaped('16x minecraft:stick', ['L', 'L'], {
        L: '#minecraft:logs'
    }).id('kubejs:minecraft/shaped/logs_to_sticks')

    e.shaped('minecraft:stone_pickaxe', ['SSS', ' R ', ' R '], {
        S: '#forge:stone',
        R: '#forge:rods/wooden'
    }).id('kubejs:minecraft/shaped/stone_pickaxe')



    e.smelting('minecraft:iron_ingot', 'compressium:gravel_1').id('kubejs:minecraft/smelting/iron_ingot')
})
