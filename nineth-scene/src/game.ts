import {SceneFactory, WithBoxShape} from "dcl-edit/build/scripts/scenes"

const mainScene = SceneFactory.createMainScene()

mainScene.exposed.BoxEntity.entity.addComponent(new OnPointerDown(()=>{
    mainScene.exposed.BoxEntity.transform.rotate(Vector3.Up(),30)
}))
















//hideBox(mainScene.exposed.BoxEntity)

//function hideBox(entity: WithBoxShape){
//    entity.boxShape.visible = false
//}
