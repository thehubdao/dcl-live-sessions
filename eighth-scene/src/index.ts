export * from '@dcl/sdk'
import { MeshCollider, MeshRenderer, Transform, engine } from "@dcl/sdk/ecs"
import { RotateComponent } from './components/rotate-component'


let boxEntity = engine.addEntity()

Transform.create(boxEntity, {
  position: { x: 8, y: 1, z: 8 }
})

MeshRenderer.setBox(boxEntity)
MeshCollider.setBox(boxEntity)

RotateComponent.create(boxEntity,{
  isRotating: true,
  speed: 90
})

engine.addSystem(function(dt:number){
  let t = Transform.getMutable(boxEntity)
  t.position.x += 0.5 * dt;
})

let boxEntity2 = engine.addEntity()

Transform.create(boxEntity2, {
  position: { x: 8, y: 1, z: 4 }
})

MeshRenderer.setBox(boxEntity2)
MeshCollider.setBox(boxEntity2)

RotateComponent.create(boxEntity2,{
  isRotating: false,
  speed: -45
})
