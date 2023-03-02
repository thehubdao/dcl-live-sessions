import { Schemas, Transform, engine } from "@dcl/sdk/ecs"
import { Quaternion } from "@dcl/sdk/math"

export const RotateComponent = engine.defineComponent(
    "RotateComponent",
    {
        isRotating: Schemas.Boolean,
        speed: Schemas.Number
    })

engine.addSystem(function (dt: number) {
    for (const [entity, rotateComponent] of engine.getEntitiesWith(RotateComponent)) {
        if (rotateComponent.isRotating) {
            let transform = Transform.getMutable(entity)
            transform.rotation =
                Quaternion.multiply(
                    transform.rotation,
                    Quaternion.fromEulerDegrees(0, rotateComponent.speed * dt, 0))
        }
    }
})