let canvas: HTMLCanvasElement| null = document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = canvas?.getContext("2d") ?? new CanvasRenderingContext2D();

crc2

crc2.fillStyle = "#FF0000";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.strokeStyle = "#FFFFFF";

crc2.beginPath();
crc2.arc(100, 100, 20, 1, 1.5 * Math.PI);
crc2.closePath();
crc2.stroke();

crc2.beginPath();
crc2.ellipse(200,200,20,40,50,20,40);
crc2.stroke();

crc2.beginPath();
crc2.moveTo(300, 300)
crc2.lineTo(300, 250);
crc2.lineTo(250, 250);
crc2.closePath();
crc2.stroke();

crc2.strokeText("wow", 350, 300)

let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

gradient.addColorStop(0, "black");
gradient.addColorStop(0.2, "black");
gradient.addColorStop(.25, "red");
gradient.addColorStop(.5, "red");
gradient.addColorStop(1, "gold");

crc2.fillStyle = gradient;
crc2.fillRect(150, 0, 200, 100);

let pattern: CanvasRenderingContext2D  = document.createElement('canvas').getContext('2d')
pattern.canvas.width = 40;
pattern.canvas.height = 20;

pattern.fillStyle = '#fec';
pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
pattern.moveTo(0, 10);
pattern.lineTo(10, 10);
pattern.lineTo(20, 0);
pattern.lineTo(30, 0);
pattern.lineTo(40, 10);
pattern.lineTo(30, 20);
pattern.lineTo(20, 20);
pattern.lineTo(10, 10);
pattern.stroke();

crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat')?? new CanvasRenderingContext2D();
crc2.fillRect(0, 0, canvas?.width?? 0, canvas?.height??0);