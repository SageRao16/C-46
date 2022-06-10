class Form {
constructor() {
    this.input = createInput("").attribute("placeholder", " Enter your Username ");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition(){
    
    this.titleImg.position(120,50);
    this.input.position(120,200);
    this.playButton.position(120,250)
    this.greeting.position(120,175);
    
  }
  setElementsStyle (){
   
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");

  }
  hide(){
    this.input.hide()
    this.playButton.hide()
    this.greeting.hide()

  }
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
    })
  }
  display(){
    this.handleMousePressed()
    this.setElementsPosition()
    this.setElementsStyle()
  }
}