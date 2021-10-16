onEvent('recipes', e => {
    //Explicitly declares each item type for metals that lack one of them in Emendatus Enigmatica, particularly vanilla ones
    function miscMetals(metal, ingot, dust, block, nugget, plate, gear, rod) {
        e.replaceOutput(`#forge:ingots/${metal}`, ingot)
        e.replaceOutput(`#forge:dusts/${metal}`, dust)
        e.replaceOutput(`#forge:storage_blocks/${metal}`, block)
        e.replaceOutput(`#forge:nuggets/${metal}`, nugget)
        e.replaceOutput(`#forge:plates/${metal}`, plate)
        e.replaceOutput(`#forge:gears/${metal}`, gear)
        e.replaceOutput(`#forge:rods/${metal}`, rod)
    }

    //For metals fully handled by EE
    function emendatusMetals(metals) {
        metals.forEach(element => {
            e.replaceOutput(`#forge:ingots/${element}`, `emendatusenigmatica:${element}_ingot`)
            e.replaceOutput(`#forge:dusts/${element}`, `emendatusenigmatica:${element}_dust`)
            e.replaceOutput(`#forge:storage_blocks/${element}`, `emendatusenigmatica:${element}_block`)
            e.replaceOutput(`#forge:nuggets/${element}`, `emendatusenigmatica:${element}_nugget`)
            e.replaceOutput(`#forge:plates/${element}`, `emendatusenigmatica:${element}_plate`)
            e.replaceOutput(`#forge:gears/${element}`, `emendatusenigmatica:${element}_gear`)
            e.replaceOutput(`#forge:rods/${element}`, `emendatusenigmatica:${element}_rod`)
        })
    }

    function removeByID([recipes]) {
        for (i in recipes) {
            e.remove({id: i})
        }
    }


    miscMetals(
        'iron',
        'minecraft:iron_ingot',
        'emendatusenigmatica:iron_dust',
        'minecraft:iron_block',
        'minecraft:iron_nugget',
        'emendatusenigmatica:iron_plate',
        'emendatusenigmatica:iron_gear',
        'emendatusenigmatica:iron_rod'
    )

    miscMetals(
        'gold',
        'minecraft:gold_ingot',
        'emendatusenigmatica:gold_dust',
        'minecraft:gold_block',
        'minecraft:gold_nugget',
        'emendatusenigmatica:gold_plate',
        'emendatusenigmatica:gold_gear',
        'emendatusenigmatica:gold_rod'
    )


    emendatusMetals([
        'copper',
        'aluminum',
        'silver',
        'lead',
        'nickel',
        'uranium',
        'osmium',
        'tin',
        'zinc',
        'cobalt',
        'bronze',
        'brass',
        'constantan',
        'electrum',
        'steel',
        'invar',
        'signalum',
        'lumium',
        'enderium'
    ])
})
