import { scene } from "./scene";
import { setupDisapearingPlatform } from "./dispPlattform";

log("Start up")

setupDisapearingPlatform(scene.platformDisp1)
setupDisapearingPlatform(scene.platformDisp2, 0)
setupDisapearingPlatform(scene.platformDisp3, 1000)
setupDisapearingPlatform(scene.platformDisp4, 2000)
