import { Universe, Cell } from "wasm-game-of-life";
import { memory } from "wasm-game-of-life/wasm_game_of_life_bg.wasm";

const CELL_SIZE = 5; // pixels
const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF"
const ALIVE_COLOR = "#000000"

// Construct universe and get width and height
const universe = Universe.new(128, 128);
const width = universe.width();
const height = universe.height();

const fps = new class {
  constructor() {
    this.fps = document.getElementById("fps");
    this.frames = [];
    this.lastFrameTimeStamp = performance.now();
  }

  render() {
    // Convert the delta time since the last frame render into a measure
    // of frames per second.
    const now = performance.now();
    const delta = now - this.lastFrameTimeStamp;
    this.lastFrameTimeStamp = now;
    const fps = 1 / delta * 1000;

    // Save only the latest 100 timings.
    this.frames.push(fps);
    if (this.frames.length > 100) {
      this.frames.shift();
    }

    // Find the max, min, and mean of our 100 latest timings.
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < this.frames.length; i++) {
      sum += this.frames[i];
      min = Math.min(this.frames[i], min);
      max = Math.max(this.frames[i], max);
    }
    let mean = sum / this.frames.length;

    // Render the statistics.
    this.fps.textContent = `
Frames per Second:
         latest = ${Math.round(fps)}
avg of last 100 = ${Math.round(mean)}
min of last 100 = ${Math.round(min)}
max of last 100 = ${Math.round(max)}
`.trim();
  }
};


// Give the canvas room for all of our cells and a 1px border
// around each of them.
const canvas = document.getElementById("game-of-life-canvas");
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;

canvas.addEventListener("click", event => {
    const boundingRect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;

    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    const canvasTop = (event.clientY - boundingRect.top) * scaleY;

    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

    universe.toggle_cell(row, col);

    drawGrid();
    drawCells();
});

const context = canvas.getContext('2d');

const drawGrid = () => {
    context.beginPath();
    context.strokeStyle = GRID_COLOR;

    // Vertical lines.
    for (let i = 0; i <= width; i++) {
        context.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        context.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
    }

    // Horizontal lines.
    for (let j = 0; j <= height; j++) {
        context.moveTo(0, j * (CELL_SIZE + 1) + 1);
        context.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
    }

    context.stroke();
};

const getIndex = (row, column) => {
    return row * width + column;
};

const drawCells = () => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

    context.beginPath();

    // Alive cells.
    context.fillStyle = ALIVE_COLOR;
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const idx = getIndex(row, col);
        if (cells[idx] !== Cell.Alive) {
          continue;
        }

        context.fillRect(
          col * (CELL_SIZE + 1) + 1,
          row * (CELL_SIZE + 1) + 1,
          CELL_SIZE,
          CELL_SIZE
        );
      }
    }

    // Dead cells.
    context.fillStyle = DEAD_COLOR;
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const idx = getIndex(row, col);
        if (cells[idx] !== Cell.Dead) {
          continue;
        }

        context.fillRect(
          col * (CELL_SIZE + 1) + 1,
          row * (CELL_SIZE + 1) + 1,
          CELL_SIZE,
          CELL_SIZE
        );
      }
    }

    context.stroke();
};

let animationID = null;

const isPaused = () => {
    return animationID == null;
}

const playPauseButton = document.getElementById("play-pause");

const play = () => {
    playPauseButton.textContent = "⏸";
    renderLoop();
}

const pause = () => {
    playPauseButton.textContent = "▶";
    cancelAnimationFrame(animationID);
    animationID = null;
}

playPauseButton.addEventListener("click", _ => {
    if (isPaused()) {
        play();
    } else {
        pause();
    }
})

const renderLoop = () => {
    fps.render();
    
    for (let i = 0; i < 9; i++) {
      universe.tick();
    }

    drawGrid();
    drawCells();

    animationID = requestAnimationFrame(renderLoop);
};

drawGrid();
drawCells();
play();
