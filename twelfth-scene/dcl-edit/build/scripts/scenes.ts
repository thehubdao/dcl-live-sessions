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

export type NewScene = DceScene & {
    exposed: {
    }
}
export type NewScene2 = DceScene & {
    exposed: {
        ColorChange: DceEntity & WithBoxShape,
        Button: DceEntity & WithBoxShape,
    }
}
export type MainScene = DceScene & {
    exposed: {
        Button: DceEntity & WithBoxShape,
        ColorChange: DceEntity & WithBoxShape,
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

        const ColorChange = new Entity("Color Change")
        const ColorChangeTransform = new Transform()
        ColorChangeTransform.position = new Vector3(7.5, 0.75, 7.25)
        ColorChangeTransform.rotation = new Quaternion(0, 0, 0, 1)
        ColorChangeTransform.scale = new Vector3(1, 1, 1)
        ColorChange.addComponent(ColorChangeTransform)
        const ColorChangeBoxShape = new BoxShape()
        ColorChange.addComponent(ColorChangeBoxShape)

        const Button = new Entity("Button")
        const ButtonTransform = new Transform()
        ButtonTransform.position = new Vector3(7.5, 0.75, 5.5)
        ButtonTransform.rotation = new Quaternion(0, 0, 0, 1)
        ButtonTransform.scale = new Vector3(1, 1, 1)
        Button.addComponent(ButtonTransform)
        const ButtonBoxShape = new BoxShape()
        Button.addComponent(ButtonBoxShape)

        ColorChange.setParent(rootEntity)
        Button.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
                ColorChange: {
                    entity: ColorChange,
                    transform: ColorChangeTransform,
                    boxShape: ColorChangeBoxShape,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
                Button: {
                    entity: Button,
                    transform: ButtonTransform,
                    boxShape: ButtonBoxShape,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
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

        const Button = new Entity("Button")
        const ButtonTransform = new Transform()
        ButtonTransform.position = new Vector3(7.5, 0.75, 5.5)
        ButtonTransform.rotation = new Quaternion(0, 0, 0, 1)
        ButtonTransform.scale = new Vector3(0.5, 0.5, 0.5)
        Button.addComponent(ButtonTransform)
        const ButtonBoxShape = new BoxShape()
        Button.addComponent(ButtonBoxShape)

        const ColorChange = new Entity("Color Change")
        const ColorChangeTransform = new Transform()
        ColorChangeTransform.position = new Vector3(7.5, 0.75, 7.25)
        ColorChangeTransform.rotation = new Quaternion(0, 0, 0, 1)
        ColorChangeTransform.scale = new Vector3(2, 2, 2)
        ColorChange.addComponent(ColorChangeTransform)
        const ColorChangeBoxShape = new BoxShape()
        ColorChange.addComponent(ColorChangeBoxShape)

        Button.setParent(rootEntity)
        ColorChange.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
                Button: {
                    entity: Button,
                    transform: ButtonTransform,
                    boxShape: ButtonBoxShape,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
                ColorChange: {
                    entity: ColorChange,
                    transform: ColorChangeTransform,
                    boxShape: ColorChangeBoxShape,
                    show() { engine.addEntity(this.entity) },
                    hide() { engine.removeEntity(this.entity) }
                },
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
}
