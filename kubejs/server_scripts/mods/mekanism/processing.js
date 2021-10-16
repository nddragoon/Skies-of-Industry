onEvent('recipes', e => {
    //These are hardcoded to copy mek's default processing recipes to simplify the processing compatibility. For any custom recipes, make it elsewhere.
    //Takes in a metal name String
    function mekDissolution(metal) {
        e.custom({
            type: "mekanism:dissolution",
            itemInput: {
                ingredient: {
                    "tag": `forge:ores/${metal}`
                }
            },
            gasInput: {
                amount: 1,
                gas: "mekanism:sulfuric_acid"
            },
            output: {
                slurry: `emendatusenigmatica:dirty_${metal}`,
                amount: 1000,
                chemicalType: "slurry"
            }
        }).id(`kubejs:mekanism/dissolution/${metal}`)
    }
    function mekWashing(metal) {
        e.custom({
            type: 'mekanism:washing',
            fluidInput: {
                tag: 'minecraft:water',
                amount: 5
            },
            slurryInput: {
                slurry: `emendatusenigmatica:dirty_${metal}`,
                amount: 1
            },
            output: {
                slurry: `emendatusenigmatica:clean_${metal}`,
                amount: 1
            }
        }).id(`kubejs:mekanism/washing/${metal}`)
    }
    function mekCrystallizing(metal) {
        e.custom({
            type: "mekanism:crystallizing",
            chemicalType: "slurry",
            input: {
                slurry: `emendatusenigmatica:clean_${metal}`,
                amount: 200
            },
            output: {item: `emendatusenigmatica:${metal}_crystal`}
        }).id(`kubejs:mekanism/crystallizing/${metal}`)
    }
    function processingChain(metals) {
        metals.forEach(metal => {
            mekDissolution(metal)
            mekWashing(metal)
            mekCrystallizing(metal)
            e.recipes.mekanismInjecting(
                `emendatusenigmatica:${metal}_shard`,
                `emendatusenigmatica:${metal}_crystal`,
                {gas: 'mekanism:hydrogen_chloride', amount: 1}
            ).id(`kubejs:mekanism/injecting/${metal}`)
            e.recipes.mekanismPurifying(
                `emendatusenigmatica:${metal}_clump`,
                `emendatusenigmatica:${metal}_shard`,
                {gas: 'mekanism:oxygen', amount: 1}
            ).id(`kubejs:mekanism/purifying/${metal}`)
            e.recipes.mekanismCrushing(
                `emendatusenigmatica:${metal}_dirty_dust`,
                `emendatusenigmatica:${metal}_clump`
            ).id(`kubejs:mekanism/crushing/${metal}_clump`)
            e.recipes.mekanismEnriching(
                `emendatusenigmatica:${metal}_dust`,
                `emendatusenigmatica:${metal}_dirty_dust`
            ).id(`kubejs:mekanism/enriching/${metal}_dirty_dust`)
        })
    }
    function oreProcessing(metals) {
        metals.forEach(metal => {
            e.recipes.mekanismInjecting(
                `emendatusenigmatica:${metal}_shard`,
                `#forge:ores/${metal}`,
                { gas: 'mekanism:hydrogen_chloride', amount: 1 }
            ).id(`kubejs:mekanism/injecting/${metal}/from_ore`)
            e.recipes.mekanismPurifying(
                `emendatusenigmatica:${metal}_clump`,
                `#forge:ores/${metal}`,
                { gas: 'mekanism:oxygen', amount: 1 }
            ).id(`kubejs:mekanism/purifying/${metal}/from_ore`)
        })
    }

    const emendatusMetals = [
        'aluminum',
        'silver',
        'nickel',
        'zinc',
        'cobalt'
    ]

    processingChain(emendatusMetals)
    oreProcessing(emendatusMetals)
})
