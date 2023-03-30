import { DceEntity, WithBoxShape } from "../dcl-edit/build/scripts/scenes";

export class BoxColorChanger {

    private box: DceEntity & WithBoxShape;
    private button: DceEntity;

    private sceneMessageBus: MessageBus;

    private greenMat: Material;
    private redMat: Material;

    private colorIsRed: boolean;

    constructor(box: DceEntity & WithBoxShape, button: DceEntity) {
        this.box = box;
        this.button = button;

        this.sceneMessageBus = new MessageBus();

        this.redMat = new Material();
        this.redMat.albedoColor = Color4.Red();

        this.greenMat = new Material();
        this.greenMat.albedoColor = Color4.Green();

        this.colorIsRed = false;

        this.setupMessageBus();

        this.askForCurrentColorSate();
    }

    private askForCurrentColorSate() {
        this.sceneMessageBus.emit("askForColor", {})
    }

    private setupMessageBus() {
        this.button.entity.addComponent(new OnPointerDown(() => {
            this.colorIsRed = !this.colorIsRed;

            this.sceneMessageBus.emit("boxColorChanged", { colorIsRed: this.colorIsRed })
        }))

        this.sceneMessageBus.on("boxColorChanged", (value, sender) => {
            log("Sender in on boxColorChanged: " + sender)

            this.colorIsRed = value.colorIsRed;
            this.updateMaterial();
        })

        this.sceneMessageBus.on("askForColor", (value, sender) => {
            log("Sender in on askForColor: " + sender)

            if (sender !== "self") {
                this.sceneMessageBus.emit("boxColorChanged", { colorIsRed: this.colorIsRed })
            }
        })
    }

    private updateMaterial() {
        if (this.colorIsRed) {
            this.box.entity.addComponentOrReplace(this.redMat);
        } else {
            this.box.entity.addComponentOrReplace(this.greenMat);
        }
    }
}
