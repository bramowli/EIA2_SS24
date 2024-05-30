namespace Pond {
  export interface Vector {
    x: number;
    y: number;
  }

  window.addEventListener("load", handleLoad);
  export const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  export const crc: CanvasRenderingContext2D = canvas.getContext("2d");
  let moveables: Moveable[] = [];

  let background: ImageData;

  crc.fillStyle = "#c0f2fa";
  crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);

  function handleLoad(_event: Event): void {
    drawHills({ x: 0, y: 170 }, 50, 150, "#91ccbd");
    drawGrass();
    drawPond({ x: 750, y: 450 });
    drawWall();
    drawTree();
    drawStones();
    drawLilyPads();
    drawReeds();
    background = crc.getImageData(0, 0, canvas.width, canvas.height);

    drawBirds();
    drawPetals();

    setInterval(animate, 40);
  }

  function drawHills(_position: Vector, _min: number, _max: number, color: string): void {
    let stepMin: number = 115;
    let stepMax: number = 180;
    let x: number = 0;

    crc.save();
    crc.translate(_position.x, _position.y);

    crc.beginPath();
    crc.moveTo(0, 0);
    crc.lineTo(0, -_max);

    do {
      x += stepMin + Math.random() * (stepMax - stepMin);
      let y = -_min - Math.random() * (_max - _min);

      // to have rounded mountaintops
      let cpX1 = x - (stepMin + stepMax) / 8;
      let cpY1 = y - (_max - _min) / 4;
      let cpX2 = x - (stepMin + stepMax) / 8;
      let cpY2 = y;

      crc.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y);
    } while (x < canvas.width);

    crc.lineTo(x, 0);
    crc.closePath();

    crc.fillStyle = color;
    crc.fill();
  }

  function drawGrass() {
    crc.fillStyle = "#7bad87";
    crc.fillRect(0, 0, canvas.width, canvas.height);
    crc.restore();
  }

  function drawPond(_position: Vector): void {
    crc.restore();

    crc.save();
    crc.translate(_position.x, _position.y);

    crc.beginPath();
    crc.ellipse(-300, -80, 300, 100, 0, 0, Math.PI * 2);
    crc.arc(-150, 0, 200, 0, Math.PI * 2);

    crc.closePath();

    crc.fillStyle = "#53608a";
    crc.fill();

    crc.restore();
  }

  function drawTree() {
    drawTrunk();
    drawCrown();
  }

  function drawCrown() {
    crc.save();
    crc.beginPath();
    crc.arc(0, 0, 200, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(160, 0, 40, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(160, 50, 50, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(170, 110, 40, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(135, 150, 40, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(80, 170, 40, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(20, 160, 60, 0, Math.PI * 2);

    crc.closePath();

    crc.fillStyle = "#ffcffd";
    crc.fill();
    crc.restore();
  }

  function drawTrunk() {
    crc.save();
    crc.translate(0, 400);

    crc.beginPath();
    crc.lineTo(0, -200);
    crc.lineTo(50, -200);
    crc.bezierCurveTo(0, 0, 100, 0, 80, 0);
    crc.lineTo(0, 0);

    crc.moveTo(50, -120);
    crc.arc(30, -120, 20, 0, Math.PI * 2);

    crc.closePath();

    crc.fillStyle = "#401c05";
    crc.fill();

    crc.restore();
  }

  function drawWall() {
    crc.save();
    crc.translate(0, 180);

    crc.beginPath();
    crc.moveTo(-100, 0);
    crc.bezierCurveTo(300, -50, 650, -50, 850, 0);
    crc.lineTo(850, 200);
    crc.bezierCurveTo(850, 30, 650, -50, 0, 50);

    crc.closePath();
    crc.fillStyle = "#bdb9b9";
    crc.fill();
    crc.strokeStyle = "#aba9a9";
    crc.lineWidth = 4;
    crc.stroke();

    // // for future details

    // const x = 10; // X-Position des Steins
    // const y = 10; // Y-Position des Steins
    // const width = 80; // Breite des Steins
    // const height = 60; // Höhe des Steins

    // crc.beginPath();
    // crc.moveTo(x + width * 0.1, y); // Obere linke Ecke
    // crc.lineTo(x + width * 0.9, y); // Obere rechte Ecke
    // crc.quadraticCurveTo(x + width, y + height * 0.1, x + width, y + height * 0.5); // Rundung oben rechts
    // crc.quadraticCurveTo(x + width, y + height * 0.9, x + width * 0.9, y + height); // Rundung unten rechts
    // crc.lineTo(x + width * 0.1, y + height); // Untere linke Ecke
    // crc.quadraticCurveTo(x, y + height * 0.9, x, y + height * 0.5); // Rundung unten links
    // crc.quadraticCurveTo(x, y + height * 0.1, x + width * 0.1, y); // Rundung oben links
    // crc.closePath();
    // crc.fillStyle = "#999"; // Graue Farbe für den Stein
    // crc.fill();
    crc.restore();
  }

  function drawStones() {
    new Stone({ x: 300, y: 300 }, 1, "bigStone", true).draw();
    new Stone({ x: -20, y: 370 }, 1, "weirdStone", true).draw();
    new Stone({ x: 10, y: 400 }, 1, "smallStone", true).draw();
    new Stone({ x: 200, y: 280 }, 1, "weirdStone", true).draw();
    new Stone({ x: 210, y: 310 }, 1, "smallStone", true).draw();
    new Stone({ x: 725, y: 300 }, 1, "smallStone", true).draw();
    new Stone({ x: 770, y: 330 }, 1, "bigStone", true).draw();
    new Stone({ x: 710, y: 310 }, 1, "weirdStone", true).draw();
    new Stone({ x: 220, y: 435 }, 1, "smallStone", true).draw();
    new Stone({ x: 210, y: 420 }, 1, "weirdStone", true).draw();
  }

  function drawLilyPads() {
    new LilyPad({ x: 600, y: 400 }, 1, true).draw();
    new LilyPad({ x: 630, y: 300 }, 1, false).draw();
    new LilyPad({ x: 680, y: 420 }, 1, false).draw();
  }

  function drawReeds() {
    new Reed({ x: 550, y: 270 }, 1, true, "twoLeaves").draw();
    new Reed({ x: 560, y: 275 }, 1, true, "oneLeaf").draw();
    new Reed({ x: 570, y: 270 }, 1, true, "twoLeaves").draw();
    new Reed({ x: 580, y: 280 }, 1, true, "twoLeaves").draw();
    new Reed({ x: 588, y: 273 }, 1, true, "noLeaf").draw();
    new Reed({ x: 598, y: 275 }, 1, true, "noLeaf").draw();
    new Reed({ x: 605, y: 273 }, 1, true, "oneLeaf").draw();
    new Reed({ x: 610, y: 280 }, 1, true, "twoLeaves").draw();
    new Reed({ x: 223, y: 296 }, 1, true, "twoLeaves").draw();
  }

  function drawBirds() {
    moveables.push(new Bird({ x: 200, y: 230 }, 0.75, "walkingBird", "#996633", false));
    moveables.push(new Bird({ x: 240, y: 240 }, 0.75, "walkingBird", "#666633", false));
    moveables.push(new Bird({ x: 600, y: 440 }, 0.75, "swimmingBird", "#996633", true));
    moveables.push(new Bird({ x: 240, y: 400 }, 0.75, "swimmingBird", "#666633", false));
    moveables.push(new Bird({ x: 400, y: 300 }, 1, "swimmingBird", "#ffffff", true));
    moveables.push(new Bird({ x: 450, y: 300 }, 0.5, "swimmingBird", "#e6d067", true));
    moveables.push(new Bird({ x: 500, y: 300 }, 0.5, "swimmingBird", "#e6d067", true));
    moveables.push(new Bird({ x: 550, y: 300 }, 0.5, "swimmingBird", "#e6d067", true));
    moveables.push(new Bird({ x: 400, y: 350 }, 1, "swimmingBird", "#ffffff", false));
    moveables.push(new Bird({ x: 320, y: 250 }, 1, "walkingBird", "#ffffff", true));
    moveables.push(new Bird({ x: 120, y: 435 }, 1, "sleepingBird", "#ffffff", true));
    moveables.push(new Bird({ x: 220, y: 420 }, 1, "eatingBird", "#ffffff", false));
  }

  function drawPetals() {
    // for having multiple petals
    for (let i: number = 0; i < 30; i++) {
      let color: petalColor;
      let math: number = Math.random();
      if (math <= 0.5) {
        color = "lighter";
      } else if (math > 0.5) {
        color = "darker";
      }
      moveables.push(new Petal({ x: Math.random() * 200, y: Math.random() * 250 }, color));
      //console.log(petals[i]);
    }
  }

  function animate() {
    crc.putImageData(background, 0, 0);
    for (let i: number = 0; i < moveables.length; i++) {
      moveables[i].move();
      moveables[i].draw();
    }
    drawReeds();
  }
}
