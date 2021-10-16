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

    simpleHide('thermal', [
        'sawdust',
        'cinnabar_ore',
        'niter_ore', 'niter', 'niter_dust', 'niter_block',
        'sulfur_ore',
        'copper_ore',
        'tin_ore',
        'lead_ore',
        'silver_ore',
        'nickel_ore'
    ])

    hideOres (emendatusMaterials, emendatusStrata)
})
