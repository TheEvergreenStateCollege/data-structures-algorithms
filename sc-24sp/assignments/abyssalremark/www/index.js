import { Universe } from "nixoflife";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick_thread();

  requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);