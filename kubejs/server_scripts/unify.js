onEvent('recipes', e => {
    function metals(metal, ingot, dust, block, nugget, plate) {
        e.replaceOutput(`#forge:ingots/${metal}`, ingot)
        e.replaceOutput(`#forge:dusts/${metal}`, dust)
        e.replaceOutput(`#forge:storage_blocks/${metal}`, block)
        e.replaceOutput(`#forge:nuggets/${metal}`, nugget)
        e.replaceOutput(`#forge:plates/${metal}`, plate)
    }

    function removeByID([recipes]) {
        for (i in recipes) {
            e.remove({id: i})
        }
    }

    metals('iron', 'minecraft:iron_ingot', 'thermal:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget', 'create:iron_sheet')
    metals('gold', 'minecraft:gold_ingot', 'thermal:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget', 'create:golden_sheet')
    metals('zinc', 'create:zinc_ingot', 'jaopca:dusts.zinc', 'create:zinc_block', 'create:zinc_nugget', 'createaddition:zinc_sheet')
    metals('uranium', 'mekanism:ingot_uranium', 'mekanism:dust_uranium', 'mekanism:block_uranium', 'mekanism:nugget_uranium', 'immersiveengineering:plate_uranium')
    metals('copper', 'create:copper_ingot', 'thermal:copper_dust', 'create:copper_block', 'create:copper_nugget', 'create:copper_sheet')
    metals('aluminum', 'immersiveengineering:ingot_aluminum', 'immersiveengineering:dust_aluminum', 'immersiveengineering:storage_aluminum', 'immersiveengineering:nugget_aluminum', 'immersiveengineering:plate_aluminum')
    metals('nickel', 'thermal:nickel_ingot', 'thermal:nickel_dust', 'thermal:nickel_block', 'thermal:nickel_nugget', 'thermal:nickel_plate')
    metals('lead', 'thermal:lead_ingot', 'thermal:lead_dust', 'thermal:lead_block', 'thermal:lead_nugget', 'thermal:lead_plate')
    metals('silver', 'thermal:silver_ingot', 'thermal:silver_dust', 'thermal:silver_block', 'thermal:silver_nugget', 'thermal:silver_plate')
    metals('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget', 'thermal:constantan_plate')
    metals('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget', 'thermal:electrum_plate')
    metals('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel', 'immersiveengineering:plate_steel')
    metals('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget', 'thermal:bronze_plate')
    metals('tin', 'thermal:tin_ingot', 'thermal:tin_dust', 'thermal:tin_block', 'thermal:tin_nugget', 'thermal:tin_plate')
})
