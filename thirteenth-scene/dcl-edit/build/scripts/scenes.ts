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

export type NewScene = DceScene & {
    exposed: {
    }
}
export type NewScene2 = DceScene & {
    exposed: {
    }
}
export type Pickup = DceScene & {
    exposed: {
        Skull: DceEntity & WithGLTFShape,
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

        const Skull = new Entity("Skull")
        const SkullTransform = new Transform()
        SkullTransform.position = new Vector3(0, 0, 0)
        SkullTransform.rotation = new Quaternion(0, 0, 0, 1)
        SkullTransform.scale = new Vector3(1, 1, 1)
        Skull.addComponent(SkullTransform)
        const SkullGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/BonesSkull_01/BonesSkull_01.glb")
        SkullGLTFShape.visible = true
        SkullGLTFShape.withCollisions = true
        SkullGLTFShape.isPointerBlocker = true
        Skull.addComponent(SkullGLTFShape)

        Skull.setParent(rootEntity)

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
     * Creates a new instance of the scene Pickup
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createPickup(rootEntity: Entity | null = null): Pickup {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }

        const Skull = new Entity("Skull")
        const SkullTransform = new Transform()
        SkullTransform.position = new Vector3(0, 0, 0)
        SkullTransform.rotation = new Quaternion(0, 0, 0, 1)
        SkullTransform.scale = new Vector3(2.25, 2.25, 2.25)
        Skull.addComponent(SkullTransform)
        const SkullGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/BonesSkull_01/BonesSkull_01.glb")
        SkullGLTFShape.visible = true
        SkullGLTFShape.withCollisions = true
        SkullGLTFShape.isPointerBlocker = true
        Skull.addComponent(SkullGLTFShape)

        Skull.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
                Skull: {
                    entity: Skull,
                    transform: SkullTransform,
                    gLTFShape: SkullGLTFShape,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
}
