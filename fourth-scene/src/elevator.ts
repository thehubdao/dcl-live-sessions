let elevatorSystem: ElevatorSystem | null = null;

export function setupElevator(
    elevatorPlatformEntity: Entity,
    elevatorPlatformTransform: Transform,
    elevatorTarget: Transform) {

    // sound from: https://freesound.org/people/marcel_farres/sounds/186104/
    let audioSource = new AudioSource(new AudioClip("assets/sounds/ElevatorMovement.mp3"))
    audioSource.pitch += Math.random() * 0.1
    elevatorPlatformEntity.addComponent(audioSource)

    audioSource.loop = true;
    audioSource.playing = true;
    audioSource.volume = 0.5;

    if (elevatorSystem == null) {
        elevatorSystem = new ElevatorSystem();
        engine.addSystem(elevatorSystem);
    }

    let elevatorComponent = new ElevatorComponent(
        elevatorPlatformTransform.position.y,
        elevatorTarget.position.y,
        audioSource
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

    // Audio
    public moveAudioSource: AudioSource;

    public constructor(minPos: number, maxPos: number, moveAudioSource: AudioSource) {
        this.minPos = minPos;
        this.maxPos = maxPos;
        this.moveAudioSource = moveAudioSource;
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
                elevatorComponent.moveAudioSource.playing = false
            } else if (elevatorTransform.position.y < elevatorComponent.minPos) {
                elevatorTransform.position.y = elevatorComponent.minPos
                elevatorComponent.moveAudioSource.playing = false
            } else {
                elevatorComponent.moveAudioSource.playing = true
            }
        }
    }
}