export type DceScene = {
    /**
     * The root entity of the scene. All entities in this scene are children of either this scene root entity, or of another entity in the scene
     */
    sceneRoot: DceEntity

    /**
     * Shows the scene with all its entities. Shortcut for `sceneRoot.show()`
     */
    show: () => void;

    /**
     * Hides the scene with all its entities. Shortcut for `sceneRoot.hide()`
     */
    hide: () => void
}

export type DceEntity = {
    /**
     * The Decentraland entity
     */
    entity: Entity

    /**
     * The Transform component of the entity. Although, it is not required by Decentraland, every DceEntity will have a Transform added
     */
    transform: Transform

    /**
     * Show this entity and all its children. This calls `engine.addEntity(entity)` internally.
     */
    show: () => void

    /**
     * Hide this entity and all its children. This calls `engine.removeEntity(entity)` internally.
     */
    hide: () => void
}

export type WithGLTFShape = {
    gLTFShape: GLTFShape
}

export type WithBoxShape = {
    boxShape: BoxShape
}

export type NewScene = DceScene & {
    exposed: {
        TelepoterButtonBarrel: DceEntity & WithGLTFShape,
        TeleportTarget1: DceEntity,
        TeleportViewTarget: DceEntity,
        TeleportTarget2: DceEntity,
        Teleporttrigger: DceEntity & WithBoxShape,
    }
}

export class SceneFactory {
    /**
     * Creates a new instance of the scene NewScene
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createNewScene(rootEntity: Entity | null = null): NewScene {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }

        const WoodenTavernTable = new Entity("Wooden Tavern Table")
        const WoodenTavernTableTransform = new Transform()
        WoodenTavernTableTransform.position = new Vector3(5.969097, 0, 7.642987)
        WoodenTavernTableTransform.rotation = new Quaternion(0, 0, 0, 1)
        WoodenTavernTableTransform.scale = new Vector3(1, 1, 1)
        WoodenTavernTable.addComponent(WoodenTavernTableTransform)
        const WoodenTavernTableGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/TableWood_01/TableWood_01.glb")
        WoodenTavernTableGLTFShape.visible = true
        WoodenTavernTableGLTFShape.withCollisions = true
        WoodenTavernTableGLTFShape.isPointerBlocker = true
        WoodenTavernTable.addComponent(WoodenTavernTableGLTFShape)

        const RusticRoundStool = new Entity("Rustic Round Stool")
        const RusticRoundStoolTransform = new Transform()
        RusticRoundStoolTransform.position = new Vector3(5.298362, 0, 6.41275)
        RusticRoundStoolTransform.rotation = new Quaternion(0, 0.09121164, 0, 0.9958315)
        RusticRoundStoolTransform.scale = new Vector3(1, 1, 1)
        RusticRoundStool.addComponent(RusticRoundStoolTransform)
        const RusticRoundStoolGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Chairwood_01/Chairwood_01.glb")
        RusticRoundStoolGLTFShape.visible = true
        RusticRoundStoolGLTFShape.withCollisions = true
        RusticRoundStoolGLTFShape.isPointerBlocker = true
        RusticRoundStool.addComponent(RusticRoundStoolGLTFShape)

        const RusticRoundStool1 = new Entity("Rustic Round Stool")
        const RusticRoundStool1Transform = new Transform()
        RusticRoundStool1Transform.position = new Vector3(6.654417, 0, 6.357146)
        RusticRoundStool1Transform.rotation = new Quaternion(0, -0.08030233, 0, 0.9967706)
        RusticRoundStool1Transform.scale = new Vector3(1, 1, 1)
        RusticRoundStool1.addComponent(RusticRoundStool1Transform)
        const RusticRoundStool1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Chairwood_01/Chairwood_01.glb")
        RusticRoundStool1GLTFShape.visible = true
        RusticRoundStool1GLTFShape.withCollisions = true
        RusticRoundStool1GLTFShape.isPointerBlocker = true
        RusticRoundStool1.addComponent(RusticRoundStool1GLTFShape)

        const RusticRoundStool2 = new Entity("Rustic Round Stool")
        const RusticRoundStool2Transform = new Transform()
        RusticRoundStool2Transform.position = new Vector3(6.97204, 0, 8.70839)
        RusticRoundStool2Transform.rotation = new Quaternion(0, 0.0891602, 0, 0.9960173)
        RusticRoundStool2Transform.scale = new Vector3(1, 1, 1)
        RusticRoundStool2.addComponent(RusticRoundStool2Transform)
        const RusticRoundStool2GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Chairwood_01/Chairwood_01.glb")
        RusticRoundStool2GLTFShape.visible = true
        RusticRoundStool2GLTFShape.withCollisions = true
        RusticRoundStool2GLTFShape.isPointerBlocker = true
        RusticRoundStool2.addComponent(RusticRoundStool2GLTFShape)

        const RusticRoundStool3 = new Entity("Rustic Round Stool")
        const RusticRoundStool3Transform = new Transform()
        RusticRoundStool3Transform.position = new Vector3(5.352579, 0, 8.599655)
        RusticRoundStool3Transform.rotation = new Quaternion(0, -0.09747941, 0, 0.9952375)
        RusticRoundStool3Transform.scale = new Vector3(1, 1, 1)
        RusticRoundStool3.addComponent(RusticRoundStool3Transform)
        const RusticRoundStool3GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Chairwood_01/Chairwood_01.glb")
        RusticRoundStool3GLTFShape.visible = true
        RusticRoundStool3GLTFShape.withCollisions = true
        RusticRoundStool3GLTFShape.isPointerBlocker = true
        RusticRoundStool3.addComponent(RusticRoundStool3GLTFShape)

        const BeachSand = new Entity("Beach Sand")
        const BeachSandTransform = new Transform()
        BeachSandTransform.position = new Vector3(8, 0, 8)
        BeachSandTransform.rotation = new Quaternion(0, 0, 0, 1)
        BeachSandTransform.scale = new Vector3(1, 1, 1)
        BeachSand.addComponent(BeachSandTransform)
        const BeachSandGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/FloorBaseSand_01/FloorBaseSand_01.glb")
        BeachSandGLTFShape.visible = true
        BeachSandGLTFShape.withCollisions = true
        BeachSandGLTFShape.isPointerBlocker = true
        BeachSand.addComponent(BeachSandGLTFShape)

        const GunpowderBarrel = new Entity("Gunpowder Barrel")
        const GunpowderBarrelTransform = new Transform()
        GunpowderBarrelTransform.position = new Vector3(7.390959, 0.01909405, 12.13016)
        GunpowderBarrelTransform.rotation = new Quaternion(0, 0, 0, 1)
        GunpowderBarrelTransform.scale = new Vector3(1, 1, 1)
        GunpowderBarrel.addComponent(GunpowderBarrelTransform)
        const GunpowderBarrelGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Barrel_01/Barrel_01.glb")
        GunpowderBarrelGLTFShape.visible = true
        GunpowderBarrelGLTFShape.withCollisions = true
        GunpowderBarrelGLTFShape.isPointerBlocker = true
        GunpowderBarrel.addComponent(GunpowderBarrelGLTFShape)

        const GunpowderBarrel1 = new Entity("Gunpowder Barrel")
        const GunpowderBarrel1Transform = new Transform()
        GunpowderBarrel1Transform.position = new Vector3(7.315145, 0.01909405, 13.10256)
        GunpowderBarrel1Transform.rotation = new Quaternion(0, 0, 0, 1)
        GunpowderBarrel1Transform.scale = new Vector3(1, 1, 1)
        GunpowderBarrel1.addComponent(GunpowderBarrel1Transform)
        const GunpowderBarrel1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Barrel_01/Barrel_01.glb")
        GunpowderBarrel1GLTFShape.visible = true
        GunpowderBarrel1GLTFShape.withCollisions = true
        GunpowderBarrel1GLTFShape.isPointerBlocker = true
        GunpowderBarrel1.addComponent(GunpowderBarrel1GLTFShape)

        const TelepoterButtonBarrel = new Entity("Telepoter Button Barrel")
        const TelepoterButtonBarrelTransform = new Transform()
        TelepoterButtonBarrelTransform.position = new Vector3(8.311408, 0.01909405, 12.57629)
        TelepoterButtonBarrelTransform.rotation = new Quaternion(0, 0, 0, 1)
        TelepoterButtonBarrelTransform.scale = new Vector3(1, 1, 1)
        TelepoterButtonBarrel.addComponent(TelepoterButtonBarrelTransform)
        const TelepoterButtonBarrelGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Barrel_01/Barrel_01.glb")
        TelepoterButtonBarrelGLTFShape.visible = true
        TelepoterButtonBarrelGLTFShape.withCollisions = true
        TelepoterButtonBarrelGLTFShape.isPointerBlocker = true
        TelepoterButtonBarrel.addComponent(TelepoterButtonBarrelGLTFShape)

        const GunpowderBarrel2 = new Entity("Gunpowder Barrel")
        const GunpowderBarrel2Transform = new Transform()
        GunpowderBarrel2Transform.position = new Vector3(8.281716, 0.01909405, 13.51694)
        GunpowderBarrel2Transform.rotation = new Quaternion(0, 0, 0, 1)
        GunpowderBarrel2Transform.scale = new Vector3(1, 1, 1)
        GunpowderBarrel2.addComponent(GunpowderBarrel2Transform)
        const GunpowderBarrel2GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Barrel_01/Barrel_01.glb")
        GunpowderBarrel2GLTFShape.visible = true
        GunpowderBarrel2GLTFShape.withCollisions = true
        GunpowderBarrel2GLTFShape.isPointerBlocker = true
        GunpowderBarrel2.addComponent(GunpowderBarrel2GLTFShape)

        const RumBarrel = new Entity("Rum Barrel")
        const RumBarrelTransform = new Transform()
        RumBarrelTransform.position = new Vector3(7.809919, 1.122237, 12.3332)
        RumBarrelTransform.rotation = new Quaternion(0, 0, 0, 1)
        RumBarrelTransform.scale = new Vector3(1, 1, 1)
        RumBarrel.addComponent(RumBarrelTransform)
        const RumBarrelGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Barrel_02/Barrel_02.glb")
        RumBarrelGLTFShape.visible = true
        RumBarrelGLTFShape.withCollisions = true
        RumBarrelGLTFShape.isPointerBlocker = true
        RumBarrel.addComponent(RumBarrelGLTFShape)

        const BeachRock = new Entity("Beach Rock")
        const BeachRockTransform = new Transform()
        BeachRockTransform.position = new Vector3(12.54585, -0.2124952, 4.242023)
        BeachRockTransform.rotation = new Quaternion(0, 0.6051673, 0, 0.7960984)
        BeachRockTransform.scale = new Vector3(0.9102893, 0.9102893, 0.9102893)
        BeachRock.addComponent(BeachRockTransform)
        const BeachRockGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/RockBig_04/RockBig_04.glb")
        BeachRockGLTFShape.visible = true
        BeachRockGLTFShape.withCollisions = true
        BeachRockGLTFShape.isPointerBlocker = true
        BeachRock.addComponent(BeachRockGLTFShape)

        const BeachRock1 = new Entity("Beach Rock")
        const BeachRock1Transform = new Transform()
        BeachRock1Transform.position = new Vector3(12.44189, -0.1835505, 9.66602)
        BeachRock1Transform.rotation = new Quaternion(0, -0.6117406, 0, 0.7910584)
        BeachRock1Transform.scale = new Vector3(1, 1, 1)
        BeachRock1.addComponent(BeachRock1Transform)
        const BeachRock1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/RockBig_04/RockBig_04.glb")
        BeachRock1GLTFShape.visible = true
        BeachRock1GLTFShape.withCollisions = true
        BeachRock1GLTFShape.isPointerBlocker = true
        BeachRock1.addComponent(BeachRock1GLTFShape)

        const BeachRock2 = new Entity("Beach Rock")
        const BeachRock2Transform = new Transform()
        BeachRock2Transform.position = new Vector3(12.41203, 0.01909503, 12.17779)
        BeachRock2Transform.rotation = new Quaternion(0, 0.1194296, 0, 0.9928427)
        BeachRock2Transform.scale = new Vector3(1, 1, 1)
        BeachRock2.addComponent(BeachRock2Transform)
        const BeachRock2GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/RockBig_04/RockBig_04.glb")
        BeachRock2GLTFShape.visible = true
        BeachRock2GLTFShape.withCollisions = true
        BeachRock2GLTFShape.isPointerBlocker = true
        BeachRock2.addComponent(BeachRock2GLTFShape)

        const BeachRock3 = new Entity("Beach Rock")
        const BeachRock3Transform = new Transform()
        BeachRock3Transform.position = new Vector3(10.11868, 0.01909503, 2.723911)
        BeachRock3Transform.rotation = new Quaternion(0, -0.6983046, 0, 0.7158008)
        BeachRock3Transform.scale = new Vector3(1, 1, 1)
        BeachRock3.addComponent(BeachRock3Transform)
        const BeachRock3GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/RockBig_04/RockBig_04.glb")
        BeachRock3GLTFShape.visible = true
        BeachRock3GLTFShape.withCollisions = true
        BeachRock3GLTFShape.isPointerBlocker = true
        BeachRock3.addComponent(BeachRock3GLTFShape)

        const RumBarrel1 = new Entity("Rum Barrel")
        const RumBarrel1Transform = new Transform()
        RumBarrel1Transform.position = new Vector3(7.809919, 1.122237, 13.42396)
        RumBarrel1Transform.rotation = new Quaternion(0, 0, 0, 1)
        RumBarrel1Transform.scale = new Vector3(1, 1, 1)
        RumBarrel1.addComponent(RumBarrel1Transform)
        const RumBarrel1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Barrel_02/Barrel_02.glb")
        RumBarrel1GLTFShape.visible = true
        RumBarrel1GLTFShape.withCollisions = true
        RumBarrel1GLTFShape.isPointerBlocker = true
        RumBarrel1.addComponent(RumBarrel1GLTFShape)

        const CurvedOldDockModule = new Entity("Curved Old Dock Module")
        const CurvedOldDockModuleTransform = new Transform()
        CurvedOldDockModuleTransform.position = new Vector3(12.08511, 6.743966, 4.909247)
        CurvedOldDockModuleTransform.rotation = new Quaternion(0, 0, 0, 1)
        CurvedOldDockModuleTransform.scale = new Vector3(1, 1, 1)
        CurvedOldDockModule.addComponent(CurvedOldDockModuleTransform)
        const CurvedOldDockModuleGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/DocksModuleCurve_02/DocksModuleCurve_02.glb")
        CurvedOldDockModuleGLTFShape.visible = true
        CurvedOldDockModuleGLTFShape.withCollisions = true
        CurvedOldDockModuleGLTFShape.isPointerBlocker = true
        CurvedOldDockModule.addComponent(CurvedOldDockModuleGLTFShape)

        const BeachRock4 = new Entity("Beach Rock")
        const BeachRock4Transform = new Transform()
        BeachRock4Transform.position = new Vector3(14.09243, 4.736693, 4.255553)
        BeachRock4Transform.rotation = new Quaternion(-0.5643274, 0.4268503, 0.4289828, 0.5615221)
        BeachRock4Transform.scale = new Vector3(0.9102893, 0.9102893, 0.9102893)
        BeachRock4.addComponent(BeachRock4Transform)
        const BeachRock4GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/RockBig_04/RockBig_04.glb")
        BeachRock4GLTFShape.visible = true
        BeachRock4GLTFShape.withCollisions = true
        BeachRock4GLTFShape.isPointerBlocker = true
        BeachRock4.addComponent(BeachRock4GLTFShape)

        const SmallStraightOldDockModule = new Entity("Small Straight Old Dock Module")
        const SmallStraightOldDockModuleTransform = new Transform()
        SmallStraightOldDockModuleTransform.position = new Vector3(8.589733, 6.775261, 3.135932)
        SmallStraightOldDockModuleTransform.rotation = new Quaternion(0, -0.7069343, 0, 0.7072792)
        SmallStraightOldDockModuleTransform.scale = new Vector3(1, 1, 1)
        SmallStraightOldDockModule.addComponent(SmallStraightOldDockModuleTransform)
        const SmallStraightOldDockModuleGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/DocksModuleSmall_02/DocksModuleSmall_02.glb")
        SmallStraightOldDockModuleGLTFShape.visible = true
        SmallStraightOldDockModuleGLTFShape.withCollisions = true
        SmallStraightOldDockModuleGLTFShape.isPointerBlocker = true
        SmallStraightOldDockModule.addComponent(SmallStraightOldDockModuleGLTFShape)

        const RusticOldRopeBridge = new Entity("Rustic Old Rope Bridge")
        const RusticOldRopeBridgeTransform = new Transform()
        RusticOldRopeBridgeTransform.position = new Vector3(12.16387, 6.791759, 8.911049)
        RusticOldRopeBridgeTransform.rotation = new Quaternion(0, 0, 0, 1)
        RusticOldRopeBridgeTransform.scale = new Vector3(1, 1, 1)
        RusticOldRopeBridge.addComponent(RusticOldRopeBridgeTransform)
        const RusticOldRopeBridgeGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/DocksBridge_02/DocksBridge_02.glb")
        RusticOldRopeBridgeGLTFShape.visible = true
        RusticOldRopeBridgeGLTFShape.withCollisions = true
        RusticOldRopeBridgeGLTFShape.isPointerBlocker = true
        RusticOldRopeBridge.addComponent(RusticOldRopeBridgeGLTFShape)

        const SmallStraightOldDockModule1 = new Entity("Small Straight Old Dock Module")
        const SmallStraightOldDockModule1Transform = new Transform()
        SmallStraightOldDockModule1Transform.position = new Vector3(12.14086, 6.744282, 10.83865)
        SmallStraightOldDockModule1Transform.rotation = new Quaternion(0, 0, 0, 1)
        SmallStraightOldDockModule1Transform.scale = new Vector3(1, 1, 1)
        SmallStraightOldDockModule1.addComponent(SmallStraightOldDockModule1Transform)
        const SmallStraightOldDockModule1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/DocksModuleSmall_02/DocksModuleSmall_02.glb")
        SmallStraightOldDockModule1GLTFShape.visible = true
        SmallStraightOldDockModule1GLTFShape.withCollisions = true
        SmallStraightOldDockModule1GLTFShape.isPointerBlocker = true
        SmallStraightOldDockModule1.addComponent(SmallStraightOldDockModule1GLTFShape)

        const SmallStraightOldDockModule2 = new Entity("Small Straight Old Dock Module")
        const SmallStraightOldDockModule2Transform = new Transform()
        SmallStraightOldDockModule2Transform.position = new Vector3(12.14086, 6.744425, 12.75945)
        SmallStraightOldDockModule2Transform.rotation = new Quaternion(0, 0, 0, 1)
        SmallStraightOldDockModule2Transform.scale = new Vector3(1, 1, 1)
        SmallStraightOldDockModule2.addComponent(SmallStraightOldDockModule2Transform)
        const SmallStraightOldDockModule2GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/DocksModuleSmall_02/DocksModuleSmall_02.glb")
        SmallStraightOldDockModule2GLTFShape.visible = true
        SmallStraightOldDockModule2GLTFShape.withCollisions = true
        SmallStraightOldDockModule2GLTFShape.isPointerBlocker = true
        SmallStraightOldDockModule2.addComponent(SmallStraightOldDockModule2GLTFShape)

        const StickFenceEndModule = new Entity("Stick Fence End Module")
        const StickFenceEndModuleTransform = new Transform()
        StickFenceEndModuleTransform.position = new Vector3(11.17087, 4.78331, 10.65882)
        StickFenceEndModuleTransform.rotation = new Quaternion(0, 0, -0.03362763, 0.9994345)
        StickFenceEndModuleTransform.scale = new Vector3(2, 2, 2)
        StickFenceEndModule.addComponent(StickFenceEndModuleTransform)
        const StickFenceEndModuleGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/FenceSticksEnd_01/FenceSticksEnd_01.glb")
        StickFenceEndModuleGLTFShape.visible = true
        StickFenceEndModuleGLTFShape.withCollisions = true
        StickFenceEndModuleGLTFShape.isPointerBlocker = true
        StickFenceEndModule.addComponent(StickFenceEndModuleGLTFShape)

        const StickFenceEndModule1 = new Entity("Stick Fence End Module")
        const StickFenceEndModule1Transform = new Transform()
        StickFenceEndModule1Transform.position = new Vector3(8.782425, 6.724567, 4.125655)
        StickFenceEndModule1Transform.rotation = new Quaternion(-0.707742, 0.02381315, -0.02374345, 0.7056703)
        StickFenceEndModule1Transform.scale = new Vector3(2, 2, 2)
        StickFenceEndModule1.addComponent(StickFenceEndModule1Transform)
        const StickFenceEndModule1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/FenceSticksEnd_01/FenceSticksEnd_01.glb")
        StickFenceEndModule1GLTFShape.visible = true
        StickFenceEndModule1GLTFShape.withCollisions = true
        StickFenceEndModule1GLTFShape.isPointerBlocker = true
        StickFenceEndModule1.addComponent(StickFenceEndModule1GLTFShape)

        const StickFenceEndModule2 = new Entity("Stick Fence End Module")
        const StickFenceEndModule2Transform = new Transform()
        StickFenceEndModule2Transform.position = new Vector3(8.687857, 6.677635, 3.993324)
        StickFenceEndModule2Transform.rotation = new Quaternion(-0.7300385, -0.1866793, -0.6166344, 0.2279404)
        StickFenceEndModule2Transform.scale = new Vector3(2, 2, 2)
        StickFenceEndModule2.addComponent(StickFenceEndModule2Transform)
        const StickFenceEndModule2GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/FenceSticksEnd_01/FenceSticksEnd_01.glb")
        StickFenceEndModule2GLTFShape.visible = true
        StickFenceEndModule2GLTFShape.withCollisions = true
        StickFenceEndModule2GLTFShape.isPointerBlocker = true
        StickFenceEndModule2.addComponent(StickFenceEndModule2GLTFShape)

        const CaribbeanWaterwithSideRocks = new Entity("Caribbean Water with Side Rocks")
        const CaribbeanWaterwithSideRocksTransform = new Transform()
        CaribbeanWaterwithSideRocksTransform.position = new Vector3(15.90074, 0, 1.735029)
        CaribbeanWaterwithSideRocksTransform.rotation = new Quaternion(0, 0.7071068, 0, 0.7071068)
        CaribbeanWaterwithSideRocksTransform.scale = new Vector3(1, 1, 1)
        CaribbeanWaterwithSideRocks.addComponent(CaribbeanWaterwithSideRocksTransform)
        const CaribbeanWaterwithSideRocksGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/WaterPatchSide_01/WaterPatchSide_01.glb")
        CaribbeanWaterwithSideRocksGLTFShape.visible = true
        CaribbeanWaterwithSideRocksGLTFShape.withCollisions = true
        CaribbeanWaterwithSideRocksGLTFShape.isPointerBlocker = true
        CaribbeanWaterwithSideRocks.addComponent(CaribbeanWaterwithSideRocksGLTFShape)

        const TeleportTarget1 = new Entity("Teleport Target 1")
        const TeleportTarget1Transform = new Transform()
        TeleportTarget1Transform.position = new Vector3(12.11636, 7.714299, 12.30392)
        TeleportTarget1Transform.rotation = new Quaternion(0, 0, 0, 1)
        TeleportTarget1Transform.scale = new Vector3(1, 1, 1)
        TeleportTarget1.addComponent(TeleportTarget1Transform)

        const TeleportViewTarget = new Entity("Teleport View Target")
        const TeleportViewTargetTransform = new Transform()
        TeleportViewTargetTransform.position = new Vector3(12.20948, 7.220228, 6.831166)
        TeleportViewTargetTransform.rotation = new Quaternion(0, 0, 0, 1)
        TeleportViewTargetTransform.scale = new Vector3(1, 1, 1)
        TeleportViewTarget.addComponent(TeleportViewTargetTransform)

        const TeleportTarget2 = new Entity("Teleport Target 2")
        const TeleportTarget2Transform = new Transform()
        TeleportTarget2Transform.position = new Vector3(8.82373, 7.714299, 3.102036)
        TeleportTarget2Transform.rotation = new Quaternion(0, 0, 0, 1)
        TeleportTarget2Transform.scale = new Vector3(1, 1, 1)
        TeleportTarget2.addComponent(TeleportTarget2Transform)

        const Teleporttrigger = new Entity("Teleport trigger")
        const TeleporttriggerTransform = new Transform()
        TeleporttriggerTransform.position = new Vector3(12.90021, 2, 6.91321)
        TeleporttriggerTransform.rotation = new Quaternion(0, 0, 0, 1)
        TeleporttriggerTransform.scale = new Vector3(1, 1, 1)
        Teleporttrigger.addComponent(TeleporttriggerTransform)
        const TeleporttriggerBoxShape = new BoxShape()
        Teleporttrigger.addComponent(TeleporttriggerBoxShape)

        WoodenTavernTable.setParent(rootEntity)
        RusticRoundStool.setParent(rootEntity)
        RusticRoundStool1.setParent(rootEntity)
        RusticRoundStool2.setParent(rootEntity)
        RusticRoundStool3.setParent(rootEntity)
        BeachSand.setParent(rootEntity)
        GunpowderBarrel.setParent(rootEntity)
        GunpowderBarrel1.setParent(rootEntity)
        TelepoterButtonBarrel.setParent(rootEntity)
        GunpowderBarrel2.setParent(rootEntity)
        RumBarrel.setParent(rootEntity)
        BeachRock.setParent(rootEntity)
        BeachRock1.setParent(rootEntity)
        BeachRock2.setParent(rootEntity)
        BeachRock3.setParent(rootEntity)
        RumBarrel1.setParent(rootEntity)
        CurvedOldDockModule.setParent(rootEntity)
        BeachRock4.setParent(rootEntity)
        SmallStraightOldDockModule.setParent(rootEntity)
        RusticOldRopeBridge.setParent(rootEntity)
        SmallStraightOldDockModule1.setParent(rootEntity)
        SmallStraightOldDockModule2.setParent(rootEntity)
        StickFenceEndModule.setParent(rootEntity)
        StickFenceEndModule1.setParent(rootEntity)
        StickFenceEndModule2.setParent(rootEntity)
        CaribbeanWaterwithSideRocks.setParent(rootEntity)
        TeleportTarget1.setParent(rootEntity)
        TeleportViewTarget.setParent(rootEntity)
        TeleportTarget2.setParent(rootEntity)
        Teleporttrigger.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
                TelepoterButtonBarrel: {
                    entity: TelepoterButtonBarrel,
                    transform: TelepoterButtonBarrelTransform,
                    gLTFShape: TelepoterButtonBarrelGLTFShape,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
                TeleportTarget1: {
                    entity: TeleportTarget1,
                    transform: TeleportTarget1Transform,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
                TeleportViewTarget: {
                    entity: TeleportViewTarget,
                    transform: TeleportViewTargetTransform,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
                TeleportTarget2: {
                    entity: TeleportTarget2,
                    transform: TeleportTarget2Transform,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
                Teleporttrigger: {
                    entity: Teleporttrigger,
                    transform: TeleporttriggerTransform,
                    boxShape: TeleporttriggerBoxShape,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
}
