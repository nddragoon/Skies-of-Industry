onEvent('recipes', e => {
    e.shaped('16x minecraft:stick', ['L', 'L'], {
        L: '#minecraft:logs'
    }).id('kubejs:minecraft/shaped/logs_to_sticks')
    e.shaped('minecraft:stone_pickaxe', ['SSS', ' R ', ' R '], {
        S: '#forge:stone',
        R: '#forge:rods/wooden'
    }).id('kubejs:minecraft/shaped/stone_pickaxe')
    e.shaped('minecraft:hopper', ['A A', 'ACA', ' A '], {
        A: 'create:andesite_alloy',
        C: '#forge:chests/wooden'
    }).id('kubejs:minecraft/shaped/andesite_alloy_hopper')
    e.shaped('minecraft:hopper', ['ILI', 'ILI', ' I '], {
        I: 'minecraft:iron_ingot',
        L: '#minecraft:logs'
    }).id('kubejs:minecraft/shaped/log_hopper')
    e.shaped('minecraft:hopper', ['ALA', 'ALA', ' A '], {
        A: 'create:andesite_alloy',
        L: '#minecraft:logs'
    }).id('kubejs:minecraft/shaped/log_andesite_alloy_hopper')
    e.shaped('minecraft:oak_sapling', ['BBB',  'BLB', ' L '], {
        B: 'kubejs:plant_ball',
        L: '#minecraft:logs'
    }).id('kubejs:minecraft/shaped/sapling')

    e.shapeless('8x minecraft:redstone', ['kubejs:mote_of_power', '8x kubejs:iron_oxide']).id('kubejs:minecraft/shapeless/redstone')

    e.smelting('minecraft:slime_ball', 'kubejs:plant_ball').id('kubejs:minecraft/smelting/slime_ball')

    e.recipes.createSplashing('minecraft:clay', 'create:limesand')
})
