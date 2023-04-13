import {SceneFactory} from "dcl-edit/build/scripts/scenes"

const scene = SceneFactory.createMainScene()


const redMat = new Material
redMat.albedoColor = Color4.Red()

const greenMat = new Material
greenMat.albedoColor = Color4.Green()

function setColor(isRed:boolean){
  scene.exposed.ColorChange.entity.addComponentOrReplace(isRed ? redMat: greenMat)
}

const ws = new WebSocket("ws://localhost:8080")

ws.onmessage = ev =>{
  setColor(ev.data === "1")
}

scene.exposed.Button.entity.addComponent(new OnPointerDown(()=>{
  ws.send("toggle")
}))
