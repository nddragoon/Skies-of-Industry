onEvent('recipes', e => {
    e.shaped('tconstruct:blaze_head', [
        'AAA',
        'AMA',
        'AAA'
    ], {
        A: 'minecraft:polished_andesite',
        M: 'kubejs:mote_of_power'
    }).id('kubejs:tconstruct/shaped/blaze_head')
})
