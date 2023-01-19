import * as utils from "@dcl/ecs-scene-utils"


export function setupDisapearingPlatform(
    ent: { entity: Entity, transform: Transform, boxShape: BoxShape },
    delayedStart: number = 0) {

    if (delayedStart > 0) {
        ent.entity.addComponent(new utils.Delay(delayedStart, () => {
            setupPlatformInternal(ent)
        }))
    } else {
        setupPlatformInternal(ent)
    }
} 

function setupPlatformInternal(ent: { entity: Entity, transform: Transform, boxShape: BoxShape }) {

    let isPlatformVisisble = true
    ent.entity.addComponent(new utils.Interval(3000, () => {
        if (isPlatformVisisble) {
            // Hide platform
            ent.boxShape.visible = false
            ent.boxShape.withCollisions = false
            isPlatformVisisble = false
        } else {
            // Show platform
            ent.boxShape.visible = true
            ent.boxShape.withCollisions = true
            isPlatformVisisble = true
        }
    }))
}