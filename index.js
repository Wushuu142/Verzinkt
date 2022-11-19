// Import stylesheets
import './style.css';

// Javascript code!
const canvas = document.getElementById('border');
const ctx = canvas.getContext('2d');
if (canvas.getContext) {
  // Code for Crystal creation
  const context = document.querySelector('canvas').getContext('2d');

  // declaration of necessary variables
  var bgPixelColor = [];
  var gPixelColor = [];
  var agPixelColor = [];
  var ag2PixelColor = [];
  var ag3PixelColor = [];
  var sgPixelColor = [];
  var cPixelColor = [];
  var c1PixelColor = [];
  var c2PixelColor = [];
  var rand_x = Math.round(Math.random() * 40);
  var rand_y = Math.round(Math.random() * 40);
  var white = [0, 0, 0, 0];
  var blueGray = [115, 147, 179, 255];
  var slateGray = [112, 128, 144, 255];
  var glaucousGray = [96, 130, 182, 255];
  var ashGray = [25, 25, 112, 255];
  var ashGray2 = [0, 0, 139, 255];
  var ashGray3 = [115, 147, 179, 255];
  var colorCrystal1 = [111, 143, 175, 255];
  var colorCrystal2 = [115, 147, 179, 255];
  var colorCrystal3 = [95, 158, 160, 255];

  // Creating the objects for each crystal
  const blueGrayCrystal = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 1,
    color: '#7393B3',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 40);
  var rand_y = Math.round(Math.random() * 40);

  const GlaucousCrystal = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 1,
    color: '#6082B6',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 40);
  var rand_y = Math.round(Math.random() * 40);

  const SlateGrayCrystal = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 1,
    color: '#708090',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 40);
  var rand_y = Math.round(Math.random() * 40);

  const AshGrayCrystal = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 1,
    color: '#191970',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 40);
  var rand_y = Math.round(Math.random() * 40);

  const AshGrayCrystalNo2 = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 1,
    color: '#00008B',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 40);
  var rand_y = Math.round(Math.random() * 40);

  const AshGrayCrystalNo3 = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 1,
    color: '#7393B3',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 40);
  var rand_y = Math.round(Math.random() * 40);

  const Crystal = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 1,
    color: '#6F8FAF',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 40);
  var rand_y = Math.round(Math.random() * 40);

  const Crystal2 = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 1,
    color: '#7393B3',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  var rand_x = Math.round(Math.random() * 40);
  var rand_y = Math.round(Math.random() * 40);

  const Crystal3 = {
    x: rand_x,
    y: rand_y,
    vx: 1,
    vh: 1,
    radius: 1,
    color: '#5F9EA0',
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
    },
  };

  // functions for expanding the crystal
  function drawBlueGrayCrystal() {
    var bgPathX = Math.round(Math.random() * 2 - Math.random() * 2);
    var bgPathY = Math.round(Math.random() * 2 - Math.random() * 2);

    // getting data of the pixel to expand into
    bgPixelColor = [
      context.getImageData(
        blueGrayCrystal.x + bgPathX,
        blueGrayCrystal.y + bgPathY,
        blueGrayCrystal.vx,
        blueGrayCrystal.vh
      ).data[0],
      context.getImageData(
        blueGrayCrystal.x + bgPathX,
        blueGrayCrystal.y + bgPathY,
        blueGrayCrystal.vx,
        blueGrayCrystal.vh
      ).data[1],
      context.getImageData(
        blueGrayCrystal.x + bgPathX,
        blueGrayCrystal.y + bgPathY,
        blueGrayCrystal.vx,
        blueGrayCrystal.vh
      ).data[2],
      context.getImageData(
        blueGrayCrystal.x + bgPathX,
        blueGrayCrystal.y + bgPathY,
        blueGrayCrystal.vx,
        blueGrayCrystal.vh
      ).data[3],
    ];

    // check if the new pixel is already a crystal
    if (
      (JSON.stringify(bgPixelColor) != JSON.stringify(blueGray) &&
        JSON.stringify(bgPixelColor) != JSON.stringify(white)) ||
      blueGrayCrystal.x + bgPathX > 49 ||
      blueGrayCrystal.y + bgPathY > 49 ||
      blueGrayCrystal.x + bgPathX < 1 ||
      blueGrayCrystal.y + bgPathY < 1
    ) {
      // if already a crystal start again
      window.requestAnimationFrame(drawBlueGrayCrystal);
    } else {
      // if not a crystal -> expand this one
      blueGrayCrystal.draw();
      blueGrayCrystal.x += bgPathX;
      blueGrayCrystal.y += bgPathY;
      blueGrayCrystal.vh += Math.random();
      blueGrayCrystal.vx += Math.random();
      window.requestAnimationFrame(drawBlueGrayCrystal);
    }
  }

  function drawSlateGrayCrystal() {
    var sgPathX = Math.round(Math.random() * 2 - Math.random() * 2);
    var sgPathY = Math.round(Math.random() * 2 - Math.random() * 2);

    sgPixelColor = [
      context.getImageData(
        SlateGrayCrystal.x + sgPathX,
        SlateGrayCrystal.y + sgPathY,
        SlateGrayCrystal.vx,
        SlateGrayCrystal.vh
      ).data[0],
      context.getImageData(
        SlateGrayCrystal.x + sgPathX,
        SlateGrayCrystal.y + sgPathY,
        SlateGrayCrystal.vx,
        SlateGrayCrystal.vh
      ).data[1],
      context.getImageData(
        SlateGrayCrystal.x + sgPathX,
        SlateGrayCrystal.y + sgPathY,
        SlateGrayCrystal.vx,
        SlateGrayCrystal.vh
      ).data[2],
      context.getImageData(
        SlateGrayCrystal.x + sgPathX,
        SlateGrayCrystal.y + sgPathY,
        SlateGrayCrystal.vx,
        SlateGrayCrystal.vh
      ).data[3],
    ];

    if (
      (JSON.stringify(sgPixelColor) != JSON.stringify(slateGray) &&
        JSON.stringify(sgPixelColor) != JSON.stringify(white)) ||
      SlateGrayCrystal.x + sgPathX > 49 ||
      SlateGrayCrystal.y + sgPathY > 49 ||
      SlateGrayCrystal.x + sgPathX < 1 ||
      SlateGrayCrystal.y + sgPathY < 1
    ) {
      window.requestAnimationFrame(drawSlateGrayCrystal);
    } else {
      SlateGrayCrystal.draw();
      SlateGrayCrystal.x += sgPathX;
      SlateGrayCrystal.y += sgPathY;
      SlateGrayCrystal.vh += Math.random();
      SlateGrayCrystal.vx += Math.random();
      window.requestAnimationFrame(drawSlateGrayCrystal);
    }
  }

  function drawGlaucousCrystal() {
    var gPathX = Math.round(Math.random() * 2 - Math.random() * 2);
    var gPathY = Math.round(Math.random() * 2 - Math.random() * 2);

    gPixelColor = [
      context.getImageData(
        GlaucousCrystal.x + gPathX,
        GlaucousCrystal.y + gPathY,
        GlaucousCrystal.vx,
        GlaucousCrystal.vh
      ).data[0],
      context.getImageData(
        GlaucousCrystal.x + gPathX,
        GlaucousCrystal.y + gPathY,
        GlaucousCrystal.vx,
        GlaucousCrystal.vh
      ).data[1],
      context.getImageData(
        GlaucousCrystal.x + gPathX,
        GlaucousCrystal.y + gPathY,
        GlaucousCrystal.vx,
        GlaucousCrystal.vh
      ).data[2],
      context.getImageData(
        GlaucousCrystal.x + gPathX,
        GlaucousCrystal.y + gPathY,
        GlaucousCrystal.vx,
        GlaucousCrystal.vh
      ).data[3],
    ];

    if (
      (JSON.stringify(gPixelColor) != JSON.stringify(glaucousGray) &&
        JSON.stringify(gPixelColor) != JSON.stringify(white)) ||
      GlaucousCrystal.x + gPathX > 49 ||
      GlaucousCrystal.y + gPathY > 49 ||
      GlaucousCrystal.x + gPathX < 1 ||
      GlaucousCrystal.y + gPathY < 1
    ) {
      window.requestAnimationFrame(drawGlaucousCrystal);
    } else {
      GlaucousCrystal.draw();
      GlaucousCrystal.x += gPathX;
      GlaucousCrystal.y += gPathY;
      GlaucousCrystal.vh += Math.random();
      GlaucousCrystal.vx += Math.random();
      window.requestAnimationFrame(drawGlaucousCrystal);
    }
  }

  function drawAshGrayCrystal() {
    var agPathX = Math.round(Math.random() * 2 - Math.random() * 2);
    var agPathY = Math.round(Math.random() * 2 - Math.random() * 2);

    agPixelColor = [
      context.getImageData(
        AshGrayCrystal.x + agPathX,
        AshGrayCrystal.y + agPathY,
        AshGrayCrystal.vx,
        AshGrayCrystal.vh
      ).data[0],
      context.getImageData(
        AshGrayCrystal.x + agPathX,
        AshGrayCrystal.y + agPathY,
        AshGrayCrystal.vx,
        AshGrayCrystal.vh
      ).data[1],
      context.getImageData(
        AshGrayCrystal.x + agPathX,
        AshGrayCrystal.y + agPathY,
        AshGrayCrystal.vx,
        AshGrayCrystal.vh
      ).data[2],
      context.getImageData(
        AshGrayCrystal.x + agPathX,
        AshGrayCrystal.y + agPathY,
        AshGrayCrystal.vx,
        AshGrayCrystal.vh
      ).data[3],
    ];

    if (
      (JSON.stringify(agPixelColor) != JSON.stringify(ashGray) &&
        JSON.stringify(agPixelColor) != JSON.stringify(white)) ||
      AshGrayCrystal.x > 49 ||
      AshGrayCrystal.y > 49 ||
      AshGrayCrystal.x < 1 ||
      AshGrayCrystal.y < 1
    ) {
      window.requestAnimationFrame(drawAshGrayCrystal);
    } else {
      AshGrayCrystal.draw();
      AshGrayCrystal.x += agPathX;
      AshGrayCrystal.y += agPathY;
      AshGrayCrystal.vh += Math.random();
      AshGrayCrystal.vx += Math.random();
      window.requestAnimationFrame(drawAshGrayCrystal);
    }
  }

  function drawAshGrayCrystalNo2() {
    var agPathX2 = Math.round(Math.random() * 2 - Math.random() * 2);
    var agPathY2 = Math.round(Math.random() * 2 - Math.random() * 2);

    ag2PixelColor = [
      context.getImageData(
        AshGrayCrystalNo2.x + agPathX2,
        AshGrayCrystalNo2.y + agPathY2,
        AshGrayCrystalNo2.vx,
        AshGrayCrystalNo2.vh
      ).data[0],
      context.getImageData(
        AshGrayCrystalNo2.x + agPathX2,
        AshGrayCrystalNo2.y + agPathY2,
        AshGrayCrystalNo2.vx,
        AshGrayCrystalNo2.vh
      ).data[1],
      context.getImageData(
        AshGrayCrystalNo2.x + agPathX2,
        AshGrayCrystalNo2.y + agPathY2,
        AshGrayCrystalNo2.vx,
        AshGrayCrystalNo2.vh
      ).data[2],
      context.getImageData(
        AshGrayCrystalNo2.x + agPathX2,
        AshGrayCrystalNo2.y + agPathY2,
        AshGrayCrystalNo2.vx,
        AshGrayCrystalNo2.vh
      ).data[3],
    ];

    if (
      (JSON.stringify(ag2PixelColor) != JSON.stringify(ashGray2) &&
        JSON.stringify(ag2PixelColor) != JSON.stringify(white)) ||
      AshGrayCrystalNo2.x + agPathX2 > 49 ||
      AshGrayCrystalNo2.y + agPathY2 > 49 ||
      AshGrayCrystalNo2.x + agPathX2 < 1 ||
      AshGrayCrystalNo2.y + agPathY2 < 1
    ) {
      window.requestAnimationFrame(drawAshGrayCrystalNo2);
    } else {
      AshGrayCrystalNo2.draw();
      AshGrayCrystalNo2.x += agPathX2;
      AshGrayCrystalNo2.y += agPathY2;
      AshGrayCrystalNo2.vh += Math.random();
      AshGrayCrystalNo2.vx += Math.random();
      window.requestAnimationFrame(drawAshGrayCrystalNo2);
    }
  }

  function drawAshGrayCrystalNo3() {
    var agPathX3 = Math.round(Math.random() * 2 - Math.random() * 2);
    var agPathY3 = Math.round(Math.random() * 2 - Math.random() * 2);

    ag3PixelColor = [
      context.getImageData(
        AshGrayCrystalNo3.x + agPathX3,
        AshGrayCrystalNo3.y + agPathY3,
        AshGrayCrystalNo3.vx,
        AshGrayCrystalNo3.vh
      ).data[0],
      context.getImageData(
        AshGrayCrystalNo3.x + agPathX3,
        AshGrayCrystalNo3.y + agPathY3,
        AshGrayCrystalNo3.vx,
        AshGrayCrystalNo3.vh
      ).data[1],
      context.getImageData(
        AshGrayCrystalNo3.x + agPathX3,
        AshGrayCrystalNo3.y + agPathY3,
        AshGrayCrystalNo3.vx,
        AshGrayCrystalNo3.vh
      ).data[2],
      context.getImageData(
        AshGrayCrystalNo3.x + agPathX3,
        AshGrayCrystalNo3.y + agPathY3,
        AshGrayCrystalNo3.vx,
        AshGrayCrystalNo3.vh
      ).data[3],
    ];

    if (
      (JSON.stringify(ag3PixelColor) != JSON.stringify(ashGray3) &&
        JSON.stringify(ag3PixelColor) != JSON.stringify(white)) ||
      AshGrayCrystalNo3.x > 49 ||
      AshGrayCrystalNo3.y > 49 ||
      AshGrayCrystalNo3.x < 1 ||
      AshGrayCrystalNo3.y < 1
    ) {
      window.requestAnimationFrame(drawAshGrayCrystalNo3);
    } else {
      AshGrayCrystalNo3.draw();
      AshGrayCrystalNo3.x += agPathX3;
      AshGrayCrystalNo3.y += agPathY3;
      AshGrayCrystalNo3.vh += Math.random();
      AshGrayCrystalNo3.vx += Math.random();
      window.requestAnimationFrame(drawAshGrayCrystalNo3);
    }
  }

  function drawCrystal() {
    var cPathX = Math.round(Math.random() * 2 - Math.random() * 2);
    var cPathY = Math.round(Math.random() * 2 - Math.random() * 2);

    cPixelColor = [
      context.getImageData(
        Crystal.x + cPathX,
        Crystal.y + cPathY,
        Crystal.vx,
        Crystal.vh
      ).data[0],
      context.getImageData(
        Crystal.x + cPathX,
        Crystal.y + cPathY,
        Crystal.vx,
        Crystal.vh
      ).data[1],
      context.getImageData(
        Crystal.x + cPathX,
        Crystal.y + cPathY,
        Crystal.vx,
        Crystal.vh
      ).data[2],
      context.getImageData(
        Crystal.x + cPathX,
        Crystal.y + cPathY,
        Crystal.vx,
        Crystal.vh
      ).data[3],
    ];
    if (
      (JSON.stringify(cPixelColor) != JSON.stringify(colorCrystal1) &&
        JSON.stringify(cPixelColor) != JSON.stringify(white)) ||
      Crystal.x > 49 ||
      Crystal.y > 49 ||
      Crystal.x < 1 ||
      Crystal.y < 1
    ) {
      window.requestAnimationFrame(drawCrystal);
    } else {
      Crystal.draw();
      Crystal.x += cPathX;
      Crystal.y += cPathY;
      Crystal.vh += Math.random();
      Crystal.vx += Math.random();
      window.requestAnimationFrame(drawCrystal);
    }
  }

  function drawCrystal2() {
    var c2PathX = Math.round(Math.random() * 2 - Math.random() * 2);
    var c2PathY = Math.round(Math.random() * 2 - Math.random() * 2);

    c1PixelColor = [
      context.getImageData(
        Crystal2.x + c2PathX,
        Crystal2.y + c2PathY,
        Crystal2.vx,
        Crystal2.vh
      ).data[0],
      context.getImageData(
        Crystal2.x + c2PathX,
        Crystal2.y + c2PathY,
        Crystal2.vx,
        Crystal2.vh
      ).data[1],
      context.getImageData(
        Crystal2.x + c2PathX,
        Crystal2.y + c2PathY,
        Crystal2.vx,
        Crystal2.vh
      ).data[2],
      context.getImageData(
        Crystal2.x + c2PathX,
        Crystal2.y + c2PathY,
        Crystal2.vx,
        Crystal2.vh
      ).data[3],
    ];

    if (
      (JSON.stringify(c1PixelColor) != JSON.stringify(colorCrystal2) &&
        JSON.stringify(c1PixelColor) != JSON.stringify(white)) ||
      Crystal2.x + c2PathX > 49 ||
      Crystal2.y + c2PathY > 49 ||
      Crystal2.x + c2PathX < 1 ||
      Crystal2.y + c2PathY < 1
    ) {
      window.requestAnimationFrame(drawCrystal2);
    } else {
      Crystal2.draw();
      Crystal2.x += c2PathX;
      Crystal2.y += c2PathY;
      Crystal2.vh += Math.random();
      Crystal2.vx += Math.random();
      window.requestAnimationFrame(drawCrystal2);
    }
  }

  function drawCrystal3() {
    var cPathX3 = Math.round(Math.random() * 2 - Math.random() * 2);
    var cPathY3 = Math.round(Math.random() * 2 - Math.random() * 2);

    c2PixelColor = [
      context.getImageData(
        Crystal3.x + cPathX3,
        Crystal3.y + cPathY3,
        Crystal3.vx,
        Crystal3.vh
      ).data[0],
      context.getImageData(
        Crystal3.x + cPathX3,
        Crystal3.y + cPathY3,
        Crystal3.vx,
        Crystal3.vh
      ).data[1],
      context.getImageData(
        Crystal3.x + cPathX3,
        Crystal3.y + cPathY3,
        Crystal3.vx,
        Crystal3.vh
      ).data[2],
      context.getImageData(
        Crystal3.x + cPathX3,
        Crystal3.y + cPathY3,
        Crystal3.vx,
        Crystal3.vh
      ).data[3],
    ];

    if (
      (JSON.stringify(c2PixelColor) != JSON.stringify(colorCrystal3) &&
        JSON.stringify(c2PixelColor) != JSON.stringify(white)) ||
      Crystal3.x > 49 ||
      Crystal3.y > 49 ||
      Crystal3.x < 1 ||
      Crystal3.y < 1
    ) {
      window.requestAnimationFrame(drawCrystal3);
    } else {
      Crystal3.draw();
      Crystal3.x += cPathX3;
      Crystal3.y += cPathY3;
      Crystal3.vh += Math.random();
      Crystal3.vx += Math.random();
      window.requestAnimationFrame(drawCrystal3);
    }
  }

  // calling the functions to create the crystals and start their expanding
  /*
  drawBlueGrayCrystal();
  drawSlateGrayCrystal();
  drawGlaucousCrystal();
  drawAshGrayCrystal();
  drawAshGrayCrystalNo2();
  drawAshGrayCrystalNo3();
  drawCrystal();
  drawCrystal2();
  drawCrystal3();
  */
} else {
  // canvas-unsupported code here
  console.log('Not supported by canvas');
}
