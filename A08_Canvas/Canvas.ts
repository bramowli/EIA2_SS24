namespace Canvas {
  let cvs: HTMLCanvasElement | null = document.querySelector("canvas");
  let crc: CanvasRenderingContext2D = cvs.getContext("2d");

  crc.fillStyle = "#72b0a2";
  crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);
  crc.strokeStyle = "#FFFFFF";
  crc.fillStyle = "#FFFFFF";

  let gradient: CanvasGradient = crc.createLinearGradient(0, 0, 500, 500);
  gradient.addColorStop(0, "#72b0a2");
  gradient.addColorStop(1, "#9c4922");

  crc.fillStyle = gradient;
  crc.fillRect(0, 0, 500, 500);

  let triangle: CanvasPath = new Path2D();
  crc.beginPath();
  crc.moveTo(0, 0);
  crc.lineTo(Math.random() * 50, Math.random() * 50);
  crc.lineTo(Math.random() * 50, Math.random() * 50);
  crc.closePath();
  crc.stroke();

  let triCount = Math.floor(Math.random() )
}
