onEvent('recipes', e => {
    function metals(metal, ingot, dust, block, nugget) {
        e.replaceOutput(`#forge:ingots/${metal}`, ingot)
        e.replaceOutput(`#forge:dusts/${metal}`, dust)
        e.replaceOutput(`#forge:storage_blocks/${metal}`, block)
        e.replaceOutput(`#forge:nuggets/${metal}`, nugget)


    }

    metals('uranium', 'mekanism:ingot_uranium', 'mekanism:dust_uranium', 'mekanism:block_uranium', 'mekanism:nugget_uranium')

    function removeByID([recipes]) {
        for (i in recipes) {
            e.remove({id: i})
        }
    }
})
