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

export type MultiPlayerScene = DceScene & {
    exposed: {
        ChangeBox: DceEntity & WithBoxShape,
        Button: DceEntity & WithBoxShape,
    }
}

export class SceneFactory {
    /**
     * Creates a new instance of the scene MultiPlayerScene
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createMultiPlayerScene(rootEntity: Entity | null = null): MultiPlayerScene {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }

        const ChangeBox = new Entity("ChangeBox")
        const ChangeBoxTransform = new Transform()
        ChangeBoxTransform.position = new Vector3(8, 0.5, 6)
        ChangeBoxTransform.rotation = new Quaternion(0, 0, 0, 1)
        ChangeBoxTransform.scale = new Vector3(1, 1, 1)
        ChangeBox.addComponent(ChangeBoxTransform)
        const ChangeBoxBoxShape = new BoxShape()
        ChangeBox.addComponent(ChangeBoxBoxShape)

        const Button = new Entity("Button")
        const ButtonTransform = new Transform()
        ButtonTransform.position = new Vector3(8, 0.75, 4)
        ButtonTransform.rotation = new Quaternion(0, 0, 0, 1)
        ButtonTransform.scale = new Vector3(0.5, 0.5, 0.25)
        Button.addComponent(ButtonTransform)
        const ButtonBoxShape = new BoxShape()
        Button.addComponent(ButtonBoxShape)

        ChangeBox.setParent(rootEntity)
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
                ChangeBox: {
                    entity: ChangeBox,
                    transform: ChangeBoxTransform,
                    boxShape: ChangeBoxBoxShape,
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
}
