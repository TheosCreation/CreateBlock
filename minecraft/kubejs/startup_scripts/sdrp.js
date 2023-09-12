/*
ForgeEvents.onEvent(
    "net.minecraftforge.event.entity.EntityJoinWorldEvent",
    (event) => {
    if (event.getEntity().type === "entity.minecraft.player") {
        if (event.getWorld().isClientSide()) {
            const dimPath = event.getWorld().dimension().location().getPath();
            SDRP.setState(`sdrp.${dimPath}.in`, `sdrp.${dimPath}`, "dimPath");
        }
    }
    })
*/