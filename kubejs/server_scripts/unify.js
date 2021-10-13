onEvent('recipes', e => {
    function metals(metal, ingot, dust, block, nugget) {
        e.replaceOutput(`#forge:ingots/${metal}`, ingot)
        e.replaceOutput(`#forge:dusts/${metal}`, dust)
        e.replaceOutput(`#forge:storage_blocks/${metal}`, block)
        e.replaceOutput(`#forge:nuggets/${metal}`, nugget)


    }

    metals('uranium', 'mekanism:ingot_uranium', 'mekanism:dust_uranium', 'mekanism:block_uranium', 'mekanism:nugget_uranium')
    metals('copper', 'create:copper_ingot', 'thermal:copper_dust', 'create:copper_block', 'create:copper_nugget')

    function removeByID([recipes]) {
        for (i in recipes) {
            e.remove({id: i})
        }
    }
})
