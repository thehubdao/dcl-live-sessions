import { scene } from "./scene"

scene.raft01.entity.addComponent(new OnPointerDown(()=>{
  scene.raft01.transform.position.y += 0.5;
}))

scene.button.entity.addComponent(new OnPointerDown(()=>{
  scene.doorPivot.transform.rotate(new Vector3(0,1,0),90)
}))
