let elevatorSystem: ElevatorSystem | null = null;

export function setupElevator(
    elevatorPlatformEntity: Entity,
    elevatorPlatformTransform: Transform,
    elevatorTarget: Transform) {

    if (elevatorSystem == null) {
        elevatorSystem = new ElevatorSystem();
        engine.addSystem(elevatorSystem);
    }

    let elevatorComponent = new ElevatorComponent(
        elevatorPlatformTransform.position.y,
        elevatorTarget.position.y
    )

    elevatorPlatformEntity.addComponent(elevatorComponent)

    elevatorPlatformEntity.addComponent(new OnPointerDown(() => {
        elevatorComponent.goingUp = !elevatorComponent.goingUp;
    }))
}

@Component("ElevatorComponent")
class ElevatorComponent {
    public goingUp: boolean = false;

    public minPos: number;
    public maxPos: number;

    public constructor(minPos: number, maxPos: number) {
        this.minPos = minPos;
        this.maxPos = maxPos;
    }
}

class ElevatorSystem implements ISystem {
    update(dt: number): void {
        var group = engine.getComponentGroup(ElevatorComponent)
        for (const e of group.entities) {
            let elevatorComponent = e.getComponent(ElevatorComponent)
            let elevatorTransform = e.getComponent(Transform)

            let direction = elevatorComponent.goingUp ? 1 : -1;

            elevatorTransform.translate(new Vector3(0, 1.5 * dt * direction, 0))

            if (elevatorTransform.position.y > elevatorComponent.maxPos) {
                elevatorTransform.position.y = elevatorComponent.maxPos
            }

            if (elevatorTransform.position.y < elevatorComponent.minPos) {
                elevatorTransform.position.y = elevatorComponent.minPos
            }
        }
    }
}