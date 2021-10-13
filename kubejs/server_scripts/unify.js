onEvent('recipes', e => {
    function metals(metal, ingot, dust, block, nugget, plate) {
        e.replaceOutput(`#forge:ingots/${metal}`, ingot)
        e.replaceOutput(`#forge:dusts/${metal}`, dust)
        e.replaceOutput(`#forge:storage_blocks/${metal}`, block)
        e.replaceOutput(`#forge:nuggets/${metal}`, nugget)
        e.replaceOutput(`#forge:plates/${metal}`, plate)
    }

    metals('iron', 'minecraft:iron_ingot', 'thermal:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget', 'create:iron_sheet')
    metals('gold', 'minecraft:gold_ingot', 'thermal:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget', 'create:golden_sheet')
    metals('zinc', 'create:zinc_ingot', 'jaopca:dusts.zinc', 'create:zinc_block', 'create:zinc_nugget', 'createaddition:zinc_sheet')
    metals('uranium', 'mekanism:ingot_uranium', 'mekanism:dust_uranium', 'mekanism:block_uranium', 'mekanism:nugget_uranium', 'immersiveengineering:plate_uranium')
    metals('copper', 'create:copper_ingot', 'thermal:copper_dust', 'create:copper_block', 'create:copper_nugget', 'create:copper_sheet')
    metals('aluminum', 'immersiveengineering:ingot_aluminum', 'immersiveengineering:dust_aluminum', 'immersiveengineering:storage_aluminum', 'immersiveengineering:nugget_aluminum', 'immersiveengineering:plate_aluminum')
    

    function removeByID([recipes]) {
        for (i in recipes) {
            e.remove({id: i})
        }
    }
})
