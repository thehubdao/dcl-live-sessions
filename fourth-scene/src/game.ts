import { setupElevator } from "./elevator";
import { setupWallMaterials } from "./material";
import { scene } from "./scene"
import * as utils from '@dcl/ecs-scene-utils'



scene.slidingDoorTrigger.entity.removeComponent(BoxShape)

let slidingStartPos = scene.slidingDoor.transform.position;
let slidingEndPos = slidingStartPos.add(new Vector3(0,0,-1));
let slidingDuration = .3;

scene.slidingDoorTrigger.entity.addComponent(
    new utils.TriggerComponent(
        new utils.TriggerBoxShape(scene.slidingDoorTrigger.transform.scale),
        {
            onCameraEnter: () => {
                scene.slidingDoor.entity.addComponentOrReplace(
                    new utils.MoveTransformComponent(
                        scene.slidingDoor.transform.position,
                        slidingEndPos,
                        slidingDuration))
            },
            onCameraExit: ()=>{
                scene.slidingDoor.entity.addComponentOrReplace(
                    new utils.MoveTransformComponent(
                        scene.slidingDoor.transform.position,
                        slidingStartPos,
                        slidingDuration))
            },
            //enableDebug: true
        }))



setupElevator(scene.elevatorplatform.entity, scene.elevatorplatform.transform, scene.elevatortarget.transform)
setupElevator(scene.elevatorplatform2.entity, scene.elevatorplatform2.transform, scene.elevatortarget2.transform)


setupWallMaterials(scene.walls.entity)

let doorIsOpened = false;


let doorAudioClip = new AudioClip("assets/sounds/DoorMovement.mp3")
let doorAudioSource = new AudioSource(doorAudioClip)
scene.door.entity.addComponent(doorAudioSource);

//scene.door.entity.addComponent(new OnPointerDown(() => {
//    doorIsOpened = !doorIsOpened;
//    engine.addSystem(doorSystem)
//
//    doorAudioSource.playOnce()
//}))

let minRotation = 90;
let maxRotation = 180;


scene.doorTrigger.entity.removeComponent(BoxShape)

scene.doorTrigger.entity.addComponent(
    new utils.TriggerComponent(
        new utils.TriggerBoxShape(scene.doorTrigger.transform.scale),
        {
            onCameraEnter: () => {
                doorIsOpened = true;
                engine.addSystem(doorSystem)

                doorAudioSource.playOnce()
            },
            onCameraExit: ()=>{
                doorIsOpened = false;
                engine.addSystem(doorSystem)

                doorAudioSource.playOnce()
            }
            //enableDebug: true
        }))

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