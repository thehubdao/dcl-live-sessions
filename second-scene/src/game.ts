import { setupElevator } from "./elevator";
import { scene } from "./scene"


setupElevator(scene.elevatorplatform.entity, scene.elevatorplatform.transform,scene.elevatortarget.transform)
setupElevator(scene.elevatorplatform2.entity, scene.elevatorplatform2.transform,scene.elevatortarget2.transform)


let doorIsOpened = false;

scene.door.entity.addComponent(new OnPointerDown(() => {
    doorIsOpened = !doorIsOpened;
    engine.addSystem(doorSystem)
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