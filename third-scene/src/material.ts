export function setupWallMaterials(parentEntity:Entity){
    for (const wallKey in parentEntity.children) {
        const wallEntity = parentEntity.children[wallKey]

        let mat = new Material()

        mat.albedoColor = Color4.White()

        
        mat.emissiveTexture = new Texture("assets/textures/brick-texture.jpg")

        mat.emissiveColor = Color3.White()

        mat.emissiveIntensity = 10

        mat.roughness = 1;

        wallEntity.addComponent(mat)
    }
}