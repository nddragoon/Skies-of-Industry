onEvent ('recipes', e => {
    function sellProduce (inputItem, inputCount, coinCount) {
        let itemID = inputItem.split(':')[1]
        e.recipes.custommachinery.custom_machine('custommachinery:shipping_crate', 5)
            .requireItem(Item.of(inputItem, inputCount), 'input')
            .requireItem(Item.of('kubejs:shipping_stamp/sell_produce', 1), 'catalyst').chance(0)
            .produceItem(Item.of('thermal:gold_coin', coinCount))
            .id(`kubejs:trade/sell_produce/${itemID}`)
    }

    sellProduce('minecraft:dried_kelp_block', 5, 1)
    sellProduce('minecraft:hay_block', 3, 1)
})
