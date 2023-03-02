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

export type WithBoxShape = {
    boxShape: BoxShape
}

export type WithGLTFShape = {
    gLTFShape: GLTFShape
}

export type WithSphereShape = {
    sphereShape: SphereShape
}

export type WithChildSceneOtherScene = {
    childScene: OtherScene
}

export type NewScene = DceScene & {
    exposed: {
    }
}
export type NewScene2 = DceScene & {
    exposed: {
    }
}
export type MainScene = DceScene & {
    exposed: {
        BoxEntity: DceEntity & WithBoxShape,
        SphereEntity: DceEntity & WithSphereShape,
        ChildSceneentity: DceEntity & WithChildSceneOtherScene,
    }
}
export type NewScene3 = DceScene & {
    exposed: {
    }
}
export type OtherScene = DceScene & {
    exposed: {
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


        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
    /**
     * Creates a new instance of the scene NewScene2
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createNewScene2(rootEntity: Entity | null = null): NewScene2 {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }

        const BoxEntity = new Entity("Box Entity")
        const BoxEntityTransform = new Transform()
        BoxEntityTransform.position = new Vector3(8.97465, 3.083416, 5.825765)
        BoxEntityTransform.rotation = new Quaternion(0, 0, 0, 1)
        BoxEntityTransform.scale = new Vector3(1, 1, 1)
        BoxEntity.addComponent(BoxEntityTransform)
        const BoxEntityBoxShape = new BoxShape()
        BoxEntity.addComponent(BoxEntityBoxShape)

        BoxEntity.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
    /**
     * Creates a new instance of the scene MainScene
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createMainScene(rootEntity: Entity | null = null): MainScene {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }

        const BoxEntity = new Entity("Box Entity")
        const BoxEntityTransform = new Transform()
        BoxEntityTransform.position = new Vector3(16, 1, 16)
        BoxEntityTransform.rotation = new Quaternion(0, 0, 0, 1)
        BoxEntityTransform.scale = new Vector3(1, 1, 1)
        BoxEntity.addComponent(BoxEntityTransform)
        const BoxEntityBoxShape = new BoxShape()
        BoxEntity.addComponent(BoxEntityBoxShape)

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

        const BeachSand1 = new Entity("Beach Sand")
        const BeachSand1Transform = new Transform()
        BeachSand1Transform.position = new Vector3(8, 0, 24)
        BeachSand1Transform.rotation = new Quaternion(0, 0, 0, 1)
        BeachSand1Transform.scale = new Vector3(1, 1, 1)
        BeachSand1.addComponent(BeachSand1Transform)
        const BeachSand1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/FloorBaseSand_01/FloorBaseSand_01.glb")
        BeachSand1GLTFShape.visible = true
        BeachSand1GLTFShape.withCollisions = true
        BeachSand1GLTFShape.isPointerBlocker = true
        BeachSand1.addComponent(BeachSand1GLTFShape)

        const BeachSand2 = new Entity("Beach Sand")
        const BeachSand2Transform = new Transform()
        BeachSand2Transform.position = new Vector3(24, 0, 24)
        BeachSand2Transform.rotation = new Quaternion(0, 0, 0, 1)
        BeachSand2Transform.scale = new Vector3(1, 1, 1)
        BeachSand2.addComponent(BeachSand2Transform)
        const BeachSand2GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/FloorBaseSand_01/FloorBaseSand_01.glb")
        BeachSand2GLTFShape.visible = true
        BeachSand2GLTFShape.withCollisions = true
        BeachSand2GLTFShape.isPointerBlocker = true
        BeachSand2.addComponent(BeachSand2GLTFShape)

        const BeachSand3 = new Entity("Beach Sand")
        const BeachSand3Transform = new Transform()
        BeachSand3Transform.position = new Vector3(24, 0, 8)
        BeachSand3Transform.rotation = new Quaternion(0, 0, 0, 1)
        BeachSand3Transform.scale = new Vector3(1, 1, 1)
        BeachSand3.addComponent(BeachSand3Transform)
        const BeachSand3GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/FloorBaseSand_01/FloorBaseSand_01.glb")
        BeachSand3GLTFShape.visible = true
        BeachSand3GLTFShape.withCollisions = true
        BeachSand3GLTFShape.isPointerBlocker = true
        BeachSand3.addComponent(BeachSand3GLTFShape)

        const Ground = new Entity("Ground")
        const GroundTransform = new Transform()
        GroundTransform.position = new Vector3(0, 0, 0)
        GroundTransform.rotation = new Quaternion(0, 0, 0, 1)
        GroundTransform.scale = new Vector3(1, 1, 1)
        Ground.addComponent(GroundTransform)

        const SphereEntity = new Entity("Sphere Entity")
        const SphereEntityTransform = new Transform()
        SphereEntityTransform.position = new Vector3(15, 0.5, 12.5)
        SphereEntityTransform.rotation = new Quaternion(0, 0, 0, 1)
        SphereEntityTransform.scale = new Vector3(1, 1, 1)
        SphereEntity.addComponent(SphereEntityTransform)
        const SphereEntitySphereShape = new SphereShape()
        SphereEntity.addComponent(SphereEntitySphereShape)

        const EmptyEntity = new Entity("Empty Entity")
        const EmptyEntityTransform = new Transform()
        EmptyEntityTransform.position = new Vector3(28, 0, 4)
        EmptyEntityTransform.rotation = new Quaternion(0, 0, 0, 1)
        EmptyEntityTransform.scale = new Vector3(1, 1, 1)
        EmptyEntity.addComponent(EmptyEntityTransform)
        const EmptyEntityScene = SceneFactory.createOtherScene(EmptyEntity)

        const ChildSceneentity = new Entity("Child Scene entity")
        const ChildSceneentityTransform = new Transform()
        ChildSceneentityTransform.position = new Vector3(24, 0, 4)
        ChildSceneentityTransform.rotation = new Quaternion(0, 0, 0, 1)
        ChildSceneentityTransform.scale = new Vector3(1, 1, 1)
        ChildSceneentity.addComponent(ChildSceneentityTransform)
        const ChildSceneentityScene = SceneFactory.createOtherScene(ChildSceneentity)

        BoxEntity.setParent(rootEntity)
        BeachSand.setParent(Ground)
        BeachSand1.setParent(Ground)
        BeachSand2.setParent(Ground)
        BeachSand3.setParent(Ground)
        Ground.setParent(rootEntity)
        SphereEntity.setParent(rootEntity)
        EmptyEntity.setParent(rootEntity)
        ChildSceneentity.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
                BoxEntity: {
                    entity: BoxEntity,
                    transform: BoxEntityTransform,
                    boxShape: BoxEntityBoxShape,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
                SphereEntity: {
                    entity: SphereEntity,
                    transform: SphereEntityTransform,
                    sphereShape: SphereEntitySphereShape,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
                ChildSceneentity: {
                    entity: ChildSceneentity,
                    transform: ChildSceneentityTransform,
                    childScene: ChildSceneentityScene,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
    /**
     * Creates a new instance of the scene NewScene3
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createNewScene3(rootEntity: Entity | null = null): NewScene3 {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }


        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
    /**
     * Creates a new instance of the scene OtherScene
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createOtherScene(rootEntity: Entity | null = null): OtherScene {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }

        const ClosedWoodenCrate = new Entity("Closed Wooden Crate")
        const ClosedWoodenCrateTransform = new Transform()
        ClosedWoodenCrateTransform.position = new Vector3(0.04291725, 0, 0.07531166)
        ClosedWoodenCrateTransform.rotation = new Quaternion(0, 0, 0, 1)
        ClosedWoodenCrateTransform.scale = new Vector3(1, 1, 1)
        ClosedWoodenCrate.addComponent(ClosedWoodenCrateTransform)
        const ClosedWoodenCrateGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Crate_01/Crate_01.glb")
        ClosedWoodenCrateGLTFShape.visible = true
        ClosedWoodenCrateGLTFShape.withCollisions = true
        ClosedWoodenCrateGLTFShape.isPointerBlocker = true
        ClosedWoodenCrate.addComponent(ClosedWoodenCrateGLTFShape)

        const Chalice = new Entity("Chalice")
        const ChaliceTransform = new Transform()
        ChaliceTransform.position = new Vector3(-0.08694667, 0.7202142, 0)
        ChaliceTransform.rotation = new Quaternion(0, 0, 0, 1)
        ChaliceTransform.scale = new Vector3(1, 1, 1)
        Chalice.addComponent(ChaliceTransform)
        const ChaliceGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Chalice_01/Chalice_01.glb")
        ChaliceGLTFShape.visible = true
        ChaliceGLTFShape.withCollisions = true
        ChaliceGLTFShape.isPointerBlocker = true
        Chalice.addComponent(ChaliceGLTFShape)

        const Compass = new Entity("Compass")
        const CompassTransform = new Transform()
        CompassTransform.position = new Vector3(0.179373, 0.7126928, -0.04644617)
        CompassTransform.rotation = new Quaternion(0, 0, 0, 1)
        CompassTransform.scale = new Vector3(1, 1, 1)
        Compass.addComponent(CompassTransform)
        const CompassGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Compass_01/Compass_01.glb")
        CompassGLTFShape.visible = true
        CompassGLTFShape.withCollisions = true
        CompassGLTFShape.isPointerBlocker = true
        Compass.addComponent(CompassGLTFShape)

        const CountdownTimer = new Entity("Countdown Timer")
        const CountdownTimerTransform = new Transform()
        CountdownTimerTransform.position = new Vector3(0.06115764, 0, -0.3846134)
        CountdownTimerTransform.rotation = new Quaternion(5.648393E-09, 0.991616, 0.1292202, 4.334491E-08)
        CountdownTimerTransform.scale = new Vector3(1, 1, 1)
        CountdownTimer.addComponent(CountdownTimerTransform)
        const CountdownTimerGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/models/Countdown_Timer_Pirate.glb")
        CountdownTimerGLTFShape.visible = true
        CountdownTimerGLTFShape.withCollisions = true
        CountdownTimerGLTFShape.isPointerBlocker = true
        CountdownTimer.addComponent(CountdownTimerGLTFShape)

        ClosedWoodenCrate.setParent(rootEntity)
        Chalice.setParent(rootEntity)
        Compass.setParent(rootEntity)
        CountdownTimer.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
}
