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
    //For metals fully handled by EE. Takes an array
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

    e.replaceInput('#forge:ingots/yellorium', '#forge:ingots/uraniume')
    e.replaceInput('thermal:sawdust', '#forge:dusts/wood')

    e.replaceOutput('#forge:dusts/sulfur', 'emendatusenigmatica:sulfur_dust')
    e.replaceOutput('#forge:dusts/wood', 'emendatusenigmatica:wood_dust')
    e.replaceOutput([
        '#forge:dusts/potassium_nitrate',
        '#forge:dusts/niter',
        '#forge:dusts/saltpeter'
    ], 'emendatusenigmatica:potassium_nitrate_dust')
    e.replaceOutput([
        '#forge:gems/niter',
        '#forge:gems/potassium_nitrate',
        '#forge:gems/saltpeter'
    ], 'emendatusenigmatica:potassium_nitrate_gem')
    e.replaceOutput('#forge:dusts/lapis', 'emendatusenigmatica:lapis_dust')
    e.replaceOutput('#forge:dusts/diamond', 'emendatusenigmatica:diamond_dust')
    e.replaceOutput('#forge:dusts/emerald', 'emendatusenigmatica:emerald_dust')
    

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
