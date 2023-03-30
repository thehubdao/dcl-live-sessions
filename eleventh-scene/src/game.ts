import { SceneFactory } from "dcl-edit/build/scripts/scenes";
import { BoxColorChanger } from "./boxColorChange";  

const scene = SceneFactory.createMultiPlayerScene();

new BoxColorChanger(scene.exposed.ChangeBox, scene.exposed.Button)

