import { imageBaseUrl } from "./sources";


export function setupImage(
    entity: { entity: Entity; transform: Transform; planeShape: PlaneShape },
    imageName: string
) {
    let mat = new Material
    mat.albedoTexture = new Texture(imageBaseUrl+imageName)
    entity.entity.addComponent(mat)

    entity.planeShape.uvs = [
        // North side of unrortated plane
        0,0, //lower-left corner
        
        1,0, //lower-right corner
        
        1,1, //upper-right corner
        
        0,1, //upper left-corner
        
    
        // South side of unrortated plane
        0,0, // lower-right corner
            
        1,0, // lower-left corner
        
        1,1, // upper-left corner
            
        0,1, // upper-right corner
    ]
}

export function setupVideo(
    entity: { entity: Entity; transform: Transform; planeShape: PlaneShape },
    videoName: string
) {
    let mat = new Material
    let clip = new VideoClip(imageBaseUrl+videoName)
    let videoTexture = new VideoTexture(clip)
    mat.albedoTexture = videoTexture
    entity.entity.addComponent(mat)

    videoTexture.seek=0
    videoTexture.play()
    videoTexture.loop = true

    /* entity.planeShape.uvs = [
        // North side of unrortated plane
        0,1, //lower-left corner
        
        1,1, //lower-right corner
        
        1,0, //upper-right corner
        
        0,0, //upper left-corner
        
    
        // South side of unrortated plane
        0,1, // lower-right corner
            
        1,1, // lower-left corner
        
        1,0, // upper-left corner
            
        0,0, // upper-right corner
    ] */
}
