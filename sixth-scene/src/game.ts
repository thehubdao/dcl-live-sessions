import { scene } from "./scene";
import { setupDisapearingPlatform } from "./dispPlattform";
import { imageBaseUrl } from "./sources";
import { setupImage, setupVideo } from "./images";
import { setupWeather } from "./weather";

log("Start up")

setupDisapearingPlatform(scene.platformDisp1)
setupDisapearingPlatform(scene.platformDisp2, 0)
setupDisapearingPlatform(scene.platformDisp3, 1000)
setupDisapearingPlatform(scene.platformDisp4, 2000)

setupImage(scene.imageScreen, "Background.jpg")
setupVideo(scene.videosScreen, "Background.mp4")

setupWeather(scene.temperatureText)