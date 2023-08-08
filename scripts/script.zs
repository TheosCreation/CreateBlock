import mods.create.MillingManager;
import mods.create.MixingManager;
import mods.create.FillingManager;
import mods.create.CompactingManager;
import mods.create.CrushingManager;
import mods.create.HauntingManager;
import mods.create.MechanicalCrafterManager;
import mods.create.SplashingManager;
import crafttweaker.api.tag.manager.ITagManager;

<tagmanager:items>.addId(<tag:items:forge:tools/knives>, <resource:farmersdelight:diamond_knife>);
<tagmanager:items>.addId(<tag:items:forge:tools/knives>, <resource:farmersdelight:iron_knife>);
<tagmanager:items>.addId(<tag:items:forge:tools/knives>, <resource:farmersdelight:flint_knife>);
<tagmanager:items>.addId(<tag:items:forge:tools/knives>, <resource:farmersdelight:netherite_knife>);
<tagmanager:items>.addId(<tag:items:forge:tools/knives>, <resource:farmersdelight:golden_knife>);


//Mixing
//<recipetype:create:mixing>.addRecipe("mixing_salt_water", <constant:create:heat_condition:none>, [<fluid:kubejs:salt_water> * 1000], [<item:kubejs:salt>], [<fluid:minecraft:water> * 1000], 200);
<recipetype:create:mixing>.addRecipe("mixing_chromatic_compound", <constant:create:heat_condition:superheated>, [<item:create:chromatic_compound>], [<item:minecraft:glowstone_dust> * 3, <item:create:powdered_obsidian> * 3, <item:create:polished_rose_quartz>], [], 200);

//Filling

//Crushing
<recipetype:create:crushing>.addRecipe("crushing_prismarine_bricks", [<item:minecraft:prismarine_shard> * 8], <item:minecraft:prismarine_bricks>, 200);
<recipetype:create:crushing>.addRecipe("crushing_prismarine", [<item:minecraft:prismarine_shard> * 3], <item:minecraft:prismarine>, 200);
<recipetype:create:crushing>.addRecipe("crushing_sea_lantern", [<item:minecraft:prismarine_crystals> * 4], <item:minecraft:sea_lantern>, 200);

//Milling
//<recipetype:create:milling>.addRecipe("milling_netherrack", [<item:kubejs:crushed_netherrack>], <item:minecraft:netherrack>, 200);

//Compacting
<recipetype:create:compacting>.addRecipe("compacting_diorite", <constant:create:heat_condition:none>, [<item:minecraft:diorite>], [<item:minecraft:flint> * 2, <item:minecraft:sand>], [<fluid:minecraft:lava> * 100], 200);
<recipetype:create:compacting>.addRecipe("compacting_packed_mud", <constant:create:heat_condition:none>, [<item:minecraft:packed_mud>], [<item:minecraft:mud>, <item:minecraft:wheat>], [], 200);
<recipetype:create:compacting>.addRecipe("compacting_packed_mud2", <constant:create:heat_condition:none>, [<item:minecraft:packed_mud>], [<item:minecraft:mud> * 2, <item:farmersdelight:straw>], [], 200);
<recipetype:create:compacting>.addRecipe("compacting_ice", <constant:create:heat_condition:none>, [<item:minecraft:ice>], [<item:minecraft:snowball>], [<fluid:minecraft:water> * 1000], 200);
<recipetype:create:compacting>.addRecipe("compacting_packed_ice", <constant:create:heat_condition:none>, [<item:minecraft:packed_ice>], [<item:minecraft:ice>], [<fluid:minecraft:water> * 200], 200);
<recipetype:create:compacting>.addRecipe("compacting_blue_ice", <constant:create:heat_condition:none>, [<item:minecraft:blue_ice>], [<item:minecraft:blue_dye>, <item:minecraft:packed_ice>], [<fluid:minecraft:water> * 200], 200);
<recipetype:create:compacting>.addRecipe("compacting_end_stone", <constant:create:heat_condition:superheated>, [<item:minecraft:end_stone>], [<item:minecraft:cobblestone>, <item:minecraft:popped_chorus_fruit>], [], 200);
<recipetype:create:compacting>.addRecipe("compacting_arcane_crystal", <constant:create:heat_condition:none>, [<item:forbidden_arcanus:arcane_crystal>], [<item:forbidden_arcanus:arcane_crystal_dust>], [], 200);

<recipetype:create:compacting>.addRecipe("compacting_chromatic_compound", <constant:create:heat_condition:superheated>, [<fluid:kubejs:rainbow> * 1000], [<item:create:chromatic_compound>], [], 200);
<recipetype:create:compacting>.addRecipe("compacting_magic", <constant:create:heat_condition:none>, [<fluid:kubejs:magic> * 100], [<item:ars_nouveau:source_berry>], [], 200);

//Splashing
//<recipetype:create:splashing>.addRecipe("splashing_clay", [<item:mekanism:fluorite_gem> % 50], <item:minecraft:clay>, 200);

//Haunting
<recipetype:create:haunting>.addRecipe("haunting_coal", [<item:minecraft:coal>], <item:minecraft:charcoal>, 200);
<recipetype:create:haunting>.addRecipe("haunting_echo_shard", [<item:minecraft:echo_shard>], <item:minecraft:amethyst_shard>, 200);

<recipetype:create:mechanical_crafting>.addRecipe("crafting_terminal", <item:toms_storage:ts.crafting_terminal>, 
[[<item:minecraft:air>, <item:toms_storage:ts.storage_terminal>, <item:minecraft:air>], 
 [<item:create:mechanical_crafter>, <item:create:mechanical_crafter>, <item:create:mechanical_crafter>], 
 [<item:create:mechanical_crafter>, <item:create:mechanical_crafter>, <item:create:mechanical_crafter>], 
 [<item:create:mechanical_crafter>, <item:create:mechanical_crafter>, <item:create:mechanical_crafter>],  
 [<item:create:sturdy_sheet>, <item:create:precision_mechanism>, <item:create:linked_controller>]]);