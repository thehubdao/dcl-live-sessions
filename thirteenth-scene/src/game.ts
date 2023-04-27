import { Pickup, SceneFactory } from "dcl-edit/build/scripts/scenes"

let currentPickup: Pickup

const promtCanvas = new UICanvas()

const fistPromptContainer = new UIContainerRect(promtCanvas)
const secondPromptContainer = new UIContainerRect(promtCanvas)

fistPromptContainer.visible = false
secondPromptContainer.visible = false

{
  // Setting up the first prompt container
  {
    fistPromptContainer.color = Color4.White()
    fistPromptContainer.positionX = 0
    fistPromptContainer.positionY = 0
    fistPromptContainer.width = 500
    fistPromptContainer.height = 200
  }

  // seting up the ui text for the first prompt
  {
    const text = new UIText(fistPromptContainer)
    text.value = "Are you sure you want to pick up this item?"
    text.hAlign = "left"
    text.hTextAlign = "left"
    text.vAlign = "top"
    text.vTextAlign = "top"
    text.textWrapping = true
    text.positionX = 10
    text.positionY = -10
    text.width = 480

    text.fontSize = 40
    text.color = Color4.Black()
  }

  // Setting up the yes button for the first prompt
  {
    const yesButton = new UIImage(fistPromptContainer, new Texture("images/YesButton.png"))
    yesButton.height = 99 / 2
    yesButton.width = 282 / 2
    yesButton.sourceHeight = 99
    yesButton.sourceWidth = 282
    yesButton.positionX = -(20 + (282 / 2))
    yesButton.positionY = 10
    yesButton.hAlign = "right"
    yesButton.vAlign = "bottom"
    yesButton.onClick = new OnPointerDown(() => {
      fistPromptContainer.visible = false
      secondPromptContainer.visible = true
    })
  }

  // Setting up the no button for the first prompt
  {
    const noButton = new UIImage(fistPromptContainer, new Texture("images/NoButton.png"))
    noButton.height = 99 / 2
    noButton.width = 282 / 2
    noButton.sourceHeight = 99
    noButton.sourceWidth = 282
    noButton.positionX = -10
    noButton.positionY = 10
    noButton.hAlign = "right"
    noButton.vAlign = "bottom"
    noButton.onClick = new OnPointerDown(() => {
      fistPromptContainer.visible = false
    })
  }
}


{
  // Setting up the second prompt container
  {
    secondPromptContainer.color = Color4.White()
    secondPromptContainer.positionX = 0
    secondPromptContainer.positionY = 0
    secondPromptContainer.width = 500
    secondPromptContainer.height = 200
  }

  // seting up the ui text for the second prompt
  {
    const text = new UIText(secondPromptContainer)
    text.value = "You should realy leave it alone!"
    text.hAlign = "left"
    text.hTextAlign = "left"
    text.vAlign = "top"
    text.vTextAlign = "top"
    text.textWrapping = true
    text.positionX = 10
    text.positionY = -10
    text.width = 480

    text.fontSize = 40
    text.color = Color4.Black()
  }

  // Setting up the yes button for the second prompt
  {
    const yesButton = new UIImage(secondPromptContainer, new Texture("images/YesButton.png"))
    yesButton.height = 99 / 2
    yesButton.width = 282 / 2
    yesButton.sourceHeight = 99
    yesButton.sourceWidth = 282
    yesButton.positionX = -(20 + (282 / 2))
    yesButton.positionY = 10
    yesButton.hAlign = "right"
    yesButton.vAlign = "bottom"
    yesButton.onClick = new OnPointerDown(() => {
      secondPromptContainer.visible = false
    })
  }

  // Setting up the no button for the second prompt
  {
    const noButton = new UIImage(secondPromptContainer, new Texture("images/NoButton.png"))
    noButton.height = 99 / 2
    noButton.width = 282 / 2
    noButton.sourceHeight = 99
    noButton.sourceWidth = 282
    noButton.positionX = -10
    noButton.positionY = 10
    noButton.hAlign = "right"
    noButton.vAlign = "bottom"
    noButton.onClick = new OnPointerDown(() => {
      secondPromptContainer.visible = false
      currentPickup.sceneRoot.hide()
      spanwNewPickup()
    })
  }
}


function spanwNewPickup() {
  currentPickup = SceneFactory.createPickup()

  currentPickup.sceneRoot.transform.position.x = (Math.random() * 14) + 1
  currentPickup.sceneRoot.transform.position.z = (Math.random() * 14) + 1

  currentPickup.exposed.Skull.entity.addComponent(new OnPointerDown(() => {
    fistPromptContainer.visible = true
  }))
}


spanwNewPickup()
