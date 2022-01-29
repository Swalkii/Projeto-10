var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 
var sofia=createSprite(50, 20, 15, 15);
sofia.shapeColor="brown";

var final=createSprite(390, 26, 20, 40);
final.shapeColor="orange";

var borda1=createSprite(3,400, 5, 800);
borda1.shapeColor= "darkgreen";
var borda2=createSprite(398, 400, 5, 800);
borda2.shapeColor="darkgreen";
var borda3=createSprite(400,2, 800, 5);
borda3.shapeColor= "darkgreen";
var borda4=createSprite(400, 398, 800, 5);
borda4.shapeColor="darkgreen";

var wall1=createSprite(30, 20, 5, 50);
wall1.shapeColor="darkgreen";
var wall2=createSprite(70, 20, 5, 50);
wall2.shapeColor="darkgreen";
var wall3=createSprite(113, 45, 90, 5);
wall3.shapeColor="darkgreen";
var wall4=createSprite(157, 74, 5, 60);
wall4.shapeColor="darkgreen";
var wall5=createSprite(100, 79, 112, 5);
wall5.shapeColor="darkgreen";
var wall6=createSprite(42, 107, 5, 60);
wall6.shapeColor="darkgreen";
var wall7=createSprite(177, 45, 40, 5);
wall7.shapeColor="darkgreen";
var wall8=createSprite(90, 135, 92, 5);
wall8.shapeColor="darkgreen";
var wall9=createSprite(112, 105, 95, 5);
wall9.shapeColor="darkgreen";
var wall10=createSprite(30, 170, 60, 5);
wall10.shapeColor="darkgreen";
var wall11=createSprite(135, 164, 5, 64);
wall11.shapeColor="darkgreen";
var wall12=createSprite(260, 44, 60, 5);
wall12.shapeColor="darkgreen";
var wall13=createSprite(288, 25, 5, 42);
wall13.shapeColor="darkgreen";
var wall12=createSprite(366, 44, 60, 5);
wall12.shapeColor="darkgreen";
var wall49=createSprite(366, 44, 60, 5);
wall49.shapeColor="darkgreen";
var wall14=createSprite(65, 200, 68, 5);
wall14.shapeColor="darkgreen";
var wall15=createSprite(34, 229, 5, 60);
wall15.shapeColor="darkgreen";
var wall16=createSprite(56, 233, 40, 5);
wall16.shapeColor="darkgreen";
var wall17=createSprite(56, 260, 50, 5);
wall17.shapeColor="darkgreen";
var wall18=createSprite(100, 210, 5, 25);
wall18.shapeColor="darkgreen";
var wall19=createSprite(80, 277, 5, 35);
wall19.shapeColor="darkgreen";
var wall20=createSprite(56, 295, 102, 5);
wall20.shapeColor="darkgreen";
var wall21=createSprite(95, 340, 112, 5);
wall21.shapeColor="darkgreen";
var wall22=createSprite(42, 350, 5, 25);
wall22.shapeColor="darkgreen";
var wall23=createSprite(90, 390, 5, 29);
wall23.shapeColor="darkgreen";
var wall24=createSprite(150, 307, 5, 130);
wall24.shapeColor="darkgreen";
var wall25=createSprite(162, 194, 55, 5);
wall25.shapeColor="darkgreen";
var wall26=createSprite(42, 350, 5, 25);
wall26.shapeColor="darkgreen";
var wall27=createSprite(196, 390, 5, 95);
wall27.shapeColor="darkgreen";
var wall28=createSprite(195, 245, 93, 5);
wall28.shapeColor="darkgreen";
var wall29=createSprite(250, 390, 5, 70);
wall29.shapeColor="darkgreen";
var wall30=createSprite(304, 355, 110, 5);
wall30.shapeColor="darkgreen";
var wall31=createSprite(360, 280, 5, 155);
wall31.shapeColor="darkgreen";
var wall32=createSprite(378, 200, 40, 5);
wall32.shapeColor="darkgreen";
var wall33=createSprite(239, 281, 5, 75);
wall33.shapeColor="darkgreen";
var wall34=createSprite(195, 275, 5, 60);
wall34.shapeColor="darkgreen";
var wall35=createSprite(257, 316, 40, 5);
wall35.shapeColor="darkgreen";
var wall36=createSprite(187, 178, 5, 35);
wall36.shapeColor="darkgreen";
var wall37=createSprite(174, 160, 30, 5);
wall37.shapeColor="darkgreen";
var wall38=createSprite(277, 238, 5, 159);
wall38.shapeColor="darkgreen";
var wall39=createSprite(265, 157, 30, 5);
wall39.shapeColor="darkgreen";
var wall40=createSprite(192, 105, 110, 5);
wall40.shapeColor="darkgreen";
var wall41=createSprite(248, 150, 5, 95);
wall41.shapeColor="darkgreen";
var wall42=createSprite(222, 133, 50, 5);
wall42.shapeColor="darkgreen";
var wall43=createSprite(315, 225, 5, 195);
wall43.shapeColor="darkgreen";
var wall44=createSprite(325, 130, 15, 5);
wall44.shapeColor="darkgreen";
var wall45=createSprite(230, 60, 5, 34);
wall45.shapeColor="darkgreen";
var wall46=createSprite(332, 105, 5, 55);
wall46.shapeColor="darkgreen";
var wall47=createSprite(280, 78, 105, 5);
wall47.shapeColor="darkgreen";
var wall48=createSprite(373, 123, 5, 85);
wall48.shapeColor="darkgreen";

var edgegroup = createGroup();
var wallgroup = createGroup();

edgegroup.add(borda1);
edgegroup.add(borda2);
edgegroup.add(borda3);
edgegroup.add(borda4);

wallgroup.add(wall1);
wallgroup.add(wall2);
wallgroup.add(wall3);
wallgroup.add(wall4);
wallgroup.add(wall5);
wallgroup.add(wall6);
wallgroup.add(wall7);
wallgroup.add(wall8);
wallgroup.add(wall9);
wallgroup.add(wall10);
wdd(wall11);
wallgroup.addallgroup.a(wall12);
wallgroup.add(wall13);
wallgroup.add(wall14);
wallgroup.add(wall15);
wallgroup.add(wall16);
wallgroup.add(wall17);
wallgroup.add(wall18);
wallgroup.add(wall19);
wallgroup.add(wall20);
wallgroup.add(wall21);
wallgroup.add(wall22);
wallgroup.add(wall23);
wallgroup.add(wall24);
wallgroup.add(wall25);
wallgroup.add(wall26);
wallgroup.add(wall27);
wallgroup.add(wall28);
wallgroup.add(wall29);
wallgroup.add(wall30);
wallgroup.add(wall31);
wallgroup.add(wall32);
wallgroup.add(wall33);
wallgroup.add(wall34);
wallgroup.add(wall35);
wallgroup.add(wall36);
wallgroup.add(wall38);
wallgroup.add(wall39);
wallgroup.add(wall40);
wallgroup.add(wall41);
wallgroup.add(wall42);
wallgroup.add(wall43);
wallgroup.add(wall44);
wallgroup.add(wall45);
wallgroup.add(wall46);
wallgroup.add(wall47);
wallgroup.add(wall48);
wallgroup.add(wall37);
wallgroup.add(wall49);


function draw() {
  background("lightgreen");

  
 
  
  sofia.velocityX=0;
  sofia.velocityY=0;
  
  
 if (keyDown("UP_ARROW")) {
    
    sofia.velocityY = -5;
  }
  
 if (keyDown("LEFT_ARROW")) {
    
    sofia.velocityX = -5;
    
  }
    
 if (keyDown("RIGHT_ARROW")) {
      
      sofia.velocityX = 5;
  }
    
 if (keyDown("DOWN_ARROW")) {
    
    sofia.velocityY = 5 ;    
  }
       
  if (keyDown("W")) {
    
    sofia.velocityY = -5;
  }
  
 if (keyDown("A")) {
    
    sofia.velocityX = -5;
    
  }
    
 if (keyDown("D")) {
      
      sofia.velocityX = 5;
  }
    
 if (keyDown("S")) {
    
    sofia.velocityY = 5 ;    
  }

if(sofia.isTouching(edgegroup)){
  
sofia.x = 50;
  
sofia.y = 20;
 }
  
  
 if(sofia.isTouching(wallgroup)){
  
sofia.x = 50;
  
sofia.y = 20;
 }
  
  
  if (sofia.collide(final)) {

  sofia.visible = false;
  edgegroup=false;
  wallgroup=false;
  final.visible=false;
}
  // sofia.bounceOff(wallgroup);
  //sofia.bounceOff(edgegroup);

  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
