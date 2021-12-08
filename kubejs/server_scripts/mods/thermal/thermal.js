onEvent ('recipes', e => {
    function removeCoinRecipes (metals) {
        metals.forEach(element => {
            e.remove({ id: `tconstruct:smeltery/casting/metal/${element}/coin_gold_cast` })
            e.remove({ id: `tconstruct:smeltery/casting/metal/${element}/coin_sand_cast` })
            e.remove({ id: `thermal:machine/press/press_${element}_nugget_to_coin` })
            e.remove({ id: `thermal:machine/press/press_${element}_ingot_to_coin` })
        })
    }

    e.remove({output: [
        'tconstruct:coin_cast',
        'tconstruct:coin_sand_cast',
        'tconstruct:coin_red_sand_cast'
    ]})

    removeCoinRecipes([
        'iron',
        'gold',
        'copper',
        'tin',
        'lead',
        'silver',
        'nickel',
        'bronze',
        'electrum',
        'invar',
        'constantan',
        'signalum',
        'lumium',
        'enderium'
    ])

    e.recipes.createCutting('10x thermal:silver_coin', 'thermal:gold_coin').id('kubejs:thermal/sawing/silver_coin')
})
