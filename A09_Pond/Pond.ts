namespace Pond {
  interface Vector {
    x: number;
    y: number;
  }

  window.addEventListener("load", handleLoad);
  let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  let crc: CanvasRenderingContext2D = canvas.getContext("2d");

  crc.fillStyle = "#c0f2fa";
  crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);

  function handleLoad(_event: Event): void {
    drawHills({ x: 0, y: 170 }, 50, 150, "#91ccbd");
    drawGrass();
    drawPond({ x: 750, y: 450 });
    drawTree();
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
    drawCrown();
    drawTrunk();
  }

  function drawCrown() {
    crc.beginPath();
    crc.arc(0, 0, 200, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(180, 0, 40, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(170, 50, 50, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(155, 110, 40, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(120, 150, 40, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(60, 160, 60, 0, Math.PI * 2);
    crc.moveTo(0, 0);
    crc.arc(10, 190, 40, 0, Math.PI * 2);

    crc.closePath();

    crc.fillStyle = "#ffcffd";
    crc.fill();
  }

  function drawTrunk() {}
}
