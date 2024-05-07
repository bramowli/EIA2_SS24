namespace Pond {
  let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
  let crc: CanvasRenderingContext2D = canvas.getContext("2d");

  window.addEventListener("load", handleLoad);
  crc.fillStyle = "#a1e2ed";
  crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);

  function handleLoad(): void {
    drawHills(x: 0, y: 300);
    drawPond();
  }

  function drawHills(_position: Vector, _min: number, _max: number): void {}
  function drawPond(): void {}


  //gpt:
// Canvas-Größe festlegen


// Funktion zum Zeichnen einer ungleichmäßigen Wellenlinie mit ausgefülltem unteren Teil
function drawUnevenWave(crc: CanvasRenderingContext2D, amplitudes: number[], fillStyle: string) {
    crc.beginPath();
    crc.moveTo(0, canvas.height);
    crc.lineTo(0, canvas.height - amplitudes[0]);
    const increment = canvas.width / (amplitudes.length - 1);
    for (let i = 1; i < amplitudes.length - 1; i++) {
        const xMid = (i * increment + (i + 1) * increment) / 2;
        const yMid = (canvas.height - amplitudes[i] + canvas.height - amplitudes[i + 1]) / 2;
        crc.quadraticCurveTo(i * increment, canvas.height - amplitudes[i], xMid, yMid);
    }
    crc.lineTo(canvas.width, canvas.height);
    crc.closePath();
    crc.fillStyle = fillStyle;
    crc.fill();
}

// Anzahl der Punkte und maximale Höhe der Amplituden festlegen
const numPoints = 20;
const maxHeight = 200;

// Zufällige Amplituden generieren
function generateAmplitudes(numPoints: number, maxHeight: number): number[] {
    const amplitudes: number[] = [];
    for (let i = 0; i < numPoints; i++) {
        const randomAmplitude = Math.random() * maxHeight;
        amplitudes.push(randomAmplitude);
    }
    return amplitudes;
}

// Zufällige Amplituden generieren
const amplitudes = generateAmplitudes(numPoints, maxHeight);

// Zeichnen der ungleichmäßigen Wellenlinie
drawUnevenWave(crc, amplitudes, '#87ceeb'); // Beispiel-Füllfarbe


}