onEvent('jei.hide.items', e => {
    function simpleHide (namespace, items) {
        items.forEach (item => {
            e.hide(`${namespace}:${item}`)
        })
    }
    function hideOres (materials, strata) {
        materials.forEach (material => {
            strata.forEach (stratum => {
                e.hide(`emendatusenigmatica:${material}_${stratum}_ore`)
            }) 
        })
    }

    const emendatusMaterials = [
        'coal',
        'iron',
        'gold',
        'diamond',
        'emerald',
        'lapis',
        'redstone',
        'quartz',
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
        'certus_quartz',
        'charged_certus_quartz',
        'fluorite',
        'bitumen',
        'cinnabar',
        'apatite',
        'sulfur',
        'potassium_nitrate',
        'arcane',
        'dimensional'
    ]
    const emendatusStrata = [
        'andesite',
        'granite',
        'diorite',
        'sand',
        'gravel',
        'netherrack',
        'blackstone',
        'basalt',
        'soul_soil',
        'end_stone',
        'gabbro',
        'c_limestone',
        'scoria',
        'weathered_limestone',
        'jasper',
        'marble',
        'slate',
        'deepslate',
        'mossy_stone',
        'brimstone',
        'subzero_ash',
        'blue_netherrack',
        'nylium_soul_soil',
        'ether_stone',
        'cryptic_stone',
        'flavolite',
        'sulphuric_rock',
        'violecite',
        'raw_marble'
    ]

    simpleHide('biggerreactors', ['yellorium_ingot'])
    simpleHide('thermal', [
        'sawdust',
        'cinnabar_ore',
        'niter_ore', 'niter', 'niter_dust', 'niter_block',
        'sulfur_ore',
        'copper_ore', 'copper_plate', 'copper_ingot',
        'tin_ore', 'tin_plate', 'tin_ingot',
        'lead_ore', 'lead_plate', 'lead_ingot',
        'silver_ore', 'silver_plate', 'silver_ingot',
        'nickel_ore', 'nickel_plate', 'nickel_ingot',
        'gold_plate',
        'iron_plate',
        'bronze_plate', 'bronze_ingot',
        'electrum_plate', 'electrum_ingot',
        'invar_plate', 'invar_ingot',
        'constantan_plate', 'constantan_ingot',
        'signalum_plate', 'signalum_ingot',
        'lumium_plate', 'lumium_ingot',
        'enderium_plate', 'enderium_ingot'
    ])
    simpleHide('immersiveengineering', [
        'plate_copper', 'ingot_copper',
        'plate_aluminum', 'ingot_aluminum',
        'plate_lead', 'ingot_lead',
        'plate_silver', 'ingot_silver',
        'plate_nickel', 'ingot_nickel',
        'plate_uranium', 'ingot_uranium',
        'plate_constantan', 'ingot_constantan',
        'plate_electrum', 'ingot_electrum',
        'plate_steel', 'ingot_steel',
        'plate_iron', 
        'plate_gold'
    ])
    simpleHide('create', [
        'zinc_ingot', 'zinc_ore',
        'copper_ingot', 'copper_ore',
        'brass_ingot'
    ])
    simpleHide('mekanism', [
        'ingot_bronze',
        'ingot_steel',
        'ingot_osmium',
        'ingot_copper',
        'ingot_tin',
        'ingot_lead',
        'ingot_uranium'
    ])
    simpleHide('tconstruct', [
        'copper_ingot',
        'cobalt_ingot'
    ])
    
    e.hide('kubejs:shipping_crate')

    hideOres (emendatusMaterials, emendatusStrata)
})
