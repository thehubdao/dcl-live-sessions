import { SceneFactory } from "dcl-edit/build/scripts/scenes"
import { movePlayerTo } from '@decentraland/RestrictedActions'
import * as utils from "@dcl/ecs-scene-utils"
const scene = SceneFactory.createNewScene()


scene.exposed.TelepoterButtonBarrel.entity.addComponent(new OnPointerDown(() => {
  log("teleporting...")
  movePlayerTo(
    scene.exposed.TeleportTarget1.transform.position,
    scene.exposed.TeleportViewTarget.transform.position)
}))

scene.exposed.Teleporttrigger.entity.removeComponent(BoxShape)

scene.exposed.Teleporttrigger.entity.addComponent(
  new utils.TriggerComponent(
    new utils.TriggerBoxShape(scene.exposed.Teleporttrigger.transform.scale),
    {
      onCameraEnter: () => {
        log("Teleporting from trigger...")
        movePlayerTo(
          scene.exposed.TeleportTarget2.transform.position,
          scene.exposed.TeleportViewTarget.transform.position)
      }
      //enableDebug: true
    }))

