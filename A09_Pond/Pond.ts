namespace Pond {
  export interface Vector {
    x: number;
    y: number;
  }

  window.addEventListener("load", handleLoad);
  let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  export let crc: CanvasRenderingContext2D = canvas.getContext("2d");

  crc.fillStyle = "#c0f2fa";
  crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);

  function handleLoad(_event: Event): void {
    drawHills({ x: 0, y: 170 }, 50, 150, "#91ccbd");
    drawGrass();
    drawPond({ x: 750, y: 450 });
    drawWall();
    drawTree();
    drawStones();
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
    new Stone({ x: 300, y: 300 }, 1, "bigStone").draw();
    new Stone({ x: -20, y: 370 }, 1, "weirdStone").draw();
    new Stone({ x: 10, y: 400 }, 1, "smallStone").draw();
    new Stone({ x: 200, y: 280 }, 1, "weirdStone").draw();
    new Stone({ x: 210, y: 310 }, 1, "smallStone").draw();
    new Stone({ x: 725, y: 300 }, 1, "smallStone").draw();
    new Stone({ x: 770, y: 330 }, 1, "bigStone").draw();
    new Stone({ x: 710, y: 310 }, 1, "weirdStone").draw();
    new Stone({ x: 220, y: 435 }, 1, "smallStone").draw();

    new Stone({ x: 210, y: 420 }, 1, "weirdStone").draw();


  }
}
