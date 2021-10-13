onEvent('jei.hide.items', e => {
    function hideItems(items) {
        items.forEach(element => {
            e.hide(element)
        })
    }
    hideItems([
        'biggerreactors:yellorium_ingot',
        'immersiveengineering:ingot_copper',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_uranium',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:ingot_electrum',
        'mekanism:ingot_lead',
        'mekanism:ingot_tin',
        'mekanism:ingot_copper',
        'mekanism:ingot_bronze',
        'immersiveengineering:ingot_steel'
    ])
})
