/**
 * @license
 * Copyright 2013 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Sample answers for Turtle levels. Used for prompts and marking.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Turtle.Answers');


/**
 * Sample solutions for each level.
 * To create an answer, just solve the level in Blockly, then paste the
 * resulting JavaScript here, moving any functions to the beginning of
 * this function.
 */
Turtle.answer = function() {
  // Helper functions.
  function drawStar(length) {
    for (var count = 0; count < 5; count++) {
      Turtle.move(length);
      Turtle.turn(144);
    }
  }

  switch (BlocklyGames.LEVEL) {
    case 1:
      // Square.
      for (var count = 0; count < 4; count++) {
        Turtle.move(100);
        Turtle.turn(90);
      }
      break;
    case 2:
      // Dashed Lines

      Turtle.penDown(false);
      Turtle.move(150);
      Turtle.turn(180);
      for (var count = 0; count < 5; count++) {
        Turtle.penDown(false);
        Turtle.move(30);
        Turtle.penDown(true);
        Turtle.move(30);
      }
      
      
      break;
    
  
    case 3:
      // Colored Lines.
      /* for (var count = 0; count < 3; count++) {
        Turtle.penDown(false);
        Turtle.move(150);
        Turtle.turn(120);
        Turtle.penDown(true);
        drawStar(50);
      } */
      Turtle.penDown(false);
      Turtle.turn(-90);
      Turtle.move(100);
      Turtle.penDown(true);
      /* Turtle.penColour('#ffffff'); */
      Turtle.penColour('#FFFF00');
      for (var count = 0; count < 4; count++) {
        Turtle.move(50);
        Turtle.move(-100);
        Turtle.move(50);
        Turtle.turn(45);
      }
      break;
    case 4:
      // Three stars and a circle.
      Turtle.penColour('#ffff00');
      for (var count = 0; count < 3; count++) {
        Turtle.penDown(false);
        Turtle.move(150);
        Turtle.turn(120);
        Turtle.penDown(true);
        drawStar(50);
      }
      Turtle.penDown(false);
      Turtle.turn(-90);
      Turtle.move(100);
      Turtle.penDown(true);
      Turtle.penColour('#ffffff');
      for (var count = 0; count < 360; count++) {
        Turtle.move(50);
        Turtle.move(-50);
        Turtle.turn(1);
      }
      break;
    case 5:
      
      // Smile Face.
      for (var count = 0; count < 2; count++) {
        for (var count_2 = 0; count_2 < 360; count_2++) {
        
          Turtle.move(50);
          Turtle.move(-50);
          Turtle.turn(1);
        }  
        Turtle.penColour('#000000');
        Turtle.move(5);
      }
      
      Turtle.penDown(false);
      Turtle.penColour('#ffffff');
      Turtle.turn(90);
      Turtle.move(30);
      Turtle.penDown(true);
      
      for (var count = 0; count < 2; count++) {
        Turtle.turn(-90);
        Turtle.move(30);
        Turtle.turn(-90);
        Turtle.penDown(false);
        Turtle.move(60);
        Turtle.penDown(true);
      }

      break;
      case 6:
        // Chrome
        Turtle.penDown(true);
        Turtle.move(-30);
        Turtle.turn(-90);
        Turtle.move(60);
        Turtle.turn(-300);
        Turtle.penDown(true);
        Turtle.penColour('#FF0000');
        for (var count = 0; count < 120; count++) {
          Turtle.move(120);
          Turtle.move(-120);
          Turtle.turn(1);
          Turtle.move(1);
        }
        Turtle.penColour('#FFFF00');
        for (var count = 0; count < 120; count++) {
          Turtle.move(120);
          Turtle.move(-120);
          Turtle.turn(1);
          Turtle.move(1);
        }
        Turtle.penColour('#00FF00');
        for (var count = 0; count < 120; count++) {
          Turtle.move(120);
          Turtle.move(-120);
          Turtle.turn(1);
          Turtle.move(1);
        }
        

        break;
  }
};

/**
 * Validate whether the user's answer is correct.
 * @param {number} pixelErrors Number of pixels that are wrong.
 * @return {boolean} True if the level is solved, false otherwise.
 */
Turtle.isCorrect = function(pixelErrors) {
  if (BlocklyGames.LEVEL == BlocklyGames.MAX_LEVEL) {
    // Any non-null answer is correct.
    return BlocklyInterface.workspace.getAllBlocks().length > 1;
  }
  console.log('Pixel errors: ' + pixelErrors);
  // There's an alternate solution for level 9 that has the moon rotated by
  // 12 degrees.  Allow that one to pass.
  // https://groups.google.com/forum/#!topic/blockly-games/xMwt-JHnZGY
  // There's also an alternate solution for level 8 that has multiple
  // redraws.  Allow that one to pass too.
  // https://groups.google.com/g/blockly-games/c/aOq4F5FIK64
  if (pixelErrors > (BlocklyGames.LEVEL == 9 ? 600 :
      (BlocklyGames.LEVEL == 8 ? 150 : 100))) {
    // Too many errors.
    return false;
  }
  var blockCount = BlocklyInterface.workspace.getAllBlocks().length;
  if ((BlocklyGames.LEVEL <= 2 && blockCount > 3) ||
      (BlocklyGames.LEVEL == 3 && blockCount > 4) ||
      (BlocklyGames.LEVEL == 5 && blockCount > 10)) {
    // Use a loop, dummy.
    var content = document.getElementById('helpUseLoop');
    var style = {
      'width': '30%',
      'left': '35%',
      'top': '12em'
    };
    BlocklyDialogs.showDialog(content, null, false, true, style,
        BlocklyDialogs.stopDialogKeyDown);
    BlocklyDialogs.startDialogKeyDown();
    return false;
  }
  return true;
};
