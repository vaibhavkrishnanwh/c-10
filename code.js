var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f81f5833-791f-46f7-bf9a-52d8ec6ba99f","878768e6-e237-4576-91ad-13605e341fa4","13ad2b18-1906-4339-94c2-9243c656ff3d","12e6e9fc-dc2a-4fd9-973c-d41ca03d767c","d645f757-792a-4fae-a689-5b498b030741","0c2f3d15-fc0c-4781-8db6-deba6ced6217","c84d4642-404f-45de-9dd7-2e92d803ed5c","a49a23c6-4919-481b-b7d4-c5a71103bcae","f4dccc58-b734-4c3b-b145-db88c3667f6e"],"propsByKey":{"f81f5833-791f-46f7-bf9a-52d8ec6ba99f":{"name":"treasure","sourceUrl":"assets/v3/animations/NezXSOOW2NCFcKip1N1mtB2S2FfR8eKxx75GAxBHJgg/f81f5833-791f-46f7-bf9a-52d8ec6ba99f.png","frameSize":{"x":513,"y":519},"frameCount":1,"looping":true,"frameDelay":4,"version":"xD80jPiO9qToKe_gYzPun1dZsSraiELY","loadedFromSource":true,"saved":true,"sourceSize":{"x":513,"y":519},"rootRelativePath":"assets/v3/animations/NezXSOOW2NCFcKip1N1mtB2S2FfR8eKxx75GAxBHJgg/f81f5833-791f-46f7-bf9a-52d8ec6ba99f.png"},"878768e6-e237-4576-91ad-13605e341fa4":{"name":"dr","sourceUrl":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png"},"13ad2b18-1906-4339-94c2-9243c656ff3d":{"name":"dv","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"12e6e9fc-dc2a-4fd9-973c-d41ca03d767c":{"name":"sw","sourceUrl":"assets/api/v1/animation-library/gamelab/PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T/category_video_games/gameplayobject_sword_01.png","frameSize":{"x":306,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PcUUrB8GsrN5vA93zZIOuA8ed_9zCB4T/category_video_games/gameplayobject_sword_01.png"},"d645f757-792a-4fae-a689-5b498b030741":{"name":"sr","sourceUrl":"assets/api/v1/animation-library/gamelab/vF8dmgMe65GlME9gDPM5mVu6LePu2wLZ/category_video_games/gameplayobject_sword_02.png","frameSize":{"x":278,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"vF8dmgMe65GlME9gDPM5mVu6LePu2wLZ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vF8dmgMe65GlME9gDPM5mVu6LePu2wLZ/category_video_games/gameplayobject_sword_02.png"},"0c2f3d15-fc0c-4781-8db6-deba6ced6217":{"name":"st","sourceUrl":"assets/api/v1/animation-library/gamelab/6xBlLV4TLpF1LqlpPDG1e.UAwjoVHYCv/category_video_games/gameplayobject_sword_03.png","frameSize":{"x":270,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"6xBlLV4TLpF1LqlpPDG1e.UAwjoVHYCv","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":270,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6xBlLV4TLpF1LqlpPDG1e.UAwjoVHYCv/category_video_games/gameplayobject_sword_03.png"},"c84d4642-404f-45de-9dd7-2e92d803ed5c":{"name":"pe","sourceUrl":"assets/api/v1/animation-library/gamelab/frw0EW8xV0YYRu6GlRKPmrKuYXObXnJb/category_fantasy/rpgcharacter_20.png","frameSize":{"x":280,"y":219},"frameCount":1,"looping":true,"frameDelay":2,"version":"frw0EW8xV0YYRu6GlRKPmrKuYXObXnJb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":280,"y":219},"rootRelativePath":"assets/api/v1/animation-library/gamelab/frw0EW8xV0YYRu6GlRKPmrKuYXObXnJb/category_fantasy/rpgcharacter_20.png"},"a49a23c6-4919-481b-b7d4-c5a71103bcae":{"name":"background_landscape04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/E0idw.1TCsifYp9.wBCGiUEEOv6cU3qn/category_backgrounds/background_landscape04.png","frameSize":{"x":400,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"E0idw.1TCsifYp9.wBCGiUEEOv6cU3qn","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/E0idw.1TCsifYp9.wBCGiUEEOv6cU3qn/category_backgrounds/background_landscape04.png"},"f4dccc58-b734-4c3b-b145-db88c3667f6e":{"name":"alienPink_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Af7NpLfOWHlazTmrOp5NbuJO_oHxQPBc/category_fantasy/alienPink_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"Af7NpLfOWHlazTmrOp5NbuJO_oHxQPBc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Af7NpLfOWHlazTmrOp5NbuJO_oHxQPBc/category_fantasy/alienPink_walk.png"}}};
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

var treasure = createSprite(350,50,2,20);
treasure.setAnimation("treasure");
treasure.scale = "0.2";

var dr = createSprite(270,50,2,20);
dr.setAnimation("dr");
dr.scale = "0.2";

var dv = createSprite(200,50,2,20);
dv.setAnimation("sr");
dv.scale = "0.2";

var sw = createSprite(150,50,2,20);
sw.setAnimation("sw");
sw.scale = "0.2";

var sw = createSprite(100,50,2,20);
sw.setAnimation("dv");
sw.scale = "0.2";

var sw = createSprite(20,50,2,20);
sw.setAnimation("st");
sw.scale = "0.3";

var p = createSprite(200,370,2,2);
p.setAnimation("pe");
p.scale = "0.2";

var d1 = createSprite(380,320,2,2);
d1.setAnimation("alienPink_walk_1");
d1.scale = "0.4";

var d2 = createSprite(380,230,2,2);
d2.setAnimation("alienPink_walk_1");
d2.scale = "0.4";

var d3 = createSprite(380,130,2,2);
d3.setAnimation("alienPink_walk_1");
d3.scale = "0.4";

var d4 = createSprite(20,320,2,2);
d4.setAnimation("alienPink_walk_1");
d4.scale = "0.4";

var d5 = createSprite(20,230,2,2);
d5.setAnimation("alienPink_walk_1");
d5.scale = "0.4";

var d6 = createSprite(20,130,2,2);
d6.setAnimation("alienPink_walk_1");
d6.scale = "0.4";

d1.velocityX = "-20";
d2.velocityX = "-20";
d3.velocityX = "-20";
d4.velocityX = "20";
d5.velocityX = "20";
d6.velocityX = "20";

function draw() {
  background("white");
  createEdgeSprites();
  
  d1.bounceOff(leftEdge);
  d2.bounceOff(leftEdge);
  d3.bounceOff(leftEdge);
  d4.bounceOff(rightEdge);
  d5.bounceOff(rightEdge);
  d6.bounceOff(rightEdge);
  d1.bounceOff(rightEdge);
  d2.bounceOff(rightEdge);
  d3.bounceOff(rightEdge);
  d4.bounceOff(leftEdge);
  d5.bounceOff(leftEdge);
  d6.bounceOff(leftEdge);
  p.bounceOff(edges);
  drawSprites();
  
 if(keyDown("right")){
    p.x = p.x+5;
  }
  
  if(keyDown("left")){
    p.x = p.x-5;
  }
  
  if(keyDown("down")){
    p.y = p.y+5;
  }
  
  if(keyDown("up")){
    p.y = p.y-5;
  }
  
  if(p.isTouching(d1) || p.isTouching(d2) || p.isTouching(d3) || p.isTouching(d4) || p.isTouching(d5) || p.isTouching(d6)){
    p.x = 200;
    p.y = 370;
    
    
    
    
  }
  
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
