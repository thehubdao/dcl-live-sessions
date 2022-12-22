import { setupElevator } from "./elevator";
import { setupWallMaterials } from "./material";
import { scene } from "./scene"



setupElevator(scene.elevatorplatform.entity, scene.elevatorplatform.transform,scene.elevatortarget.transform)
setupElevator(scene.elevatorplatform2.entity, scene.elevatorplatform2.transform,scene.elevatortarget2.transform)


setupWallMaterials(scene.walls.entity)

let doorIsOpened = false;


let doorAudioClip = new AudioClip("assets/sounds/DoorMovement.mp3")
let doorAudioSource = new AudioSource(doorAudioClip)
scene.door.entity.addComponent(doorAudioSource);

scene.door.entity.addComponent(new OnPointerDown(() => {
    doorIsOpened = !doorIsOpened;
    engine.addSystem(doorSystem)

    doorAudioSource.playOnce()
}))

let minRotation = 90;
let maxRotation = 180;


class DoorOpenSystem implements ISystem {

    update(dt: number): void {
        if (doorIsOpened) {
            scene.door.transform.rotate(Vector3.Up(), 90 * dt)

            if (scene.door.transform.eulerAngles.y > maxRotation) {
                scene.door.transform.rotation = Quaternion.Euler(0, maxRotation, 0);
                engine.removeSystem(doorSystem)
            }
        } else {
            scene.door.transform.rotate(Vector3.Up(), -90 * dt)

            if (scene.door.transform.eulerAngles.y < minRotation) {
                scene.door.transform.rotation = Quaternion.Euler(0, minRotation, 0);
                engine.removeSystem(doorSystem)
            }
        }
    }
}


let doorSystem = new DoorOpenSystem()