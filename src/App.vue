<script setup>
import { ref, onMounted } from 'vue';
import { SpaceImpactGame } from './game/engine.js';

const showOnscreenButtons = ref(false);
let game = null;

const toggleOnscreenButtons = () => {
  showOnscreenButtons.value = !showOnscreenButtons.value;
};

onMounted(() => {
  const canvasMain = document.getElementById('canvas-main');
  const canvasBg = document.getElementById('canvas-bg');
  const playBtn = document.getElementById('play');
  const pauseBtn = document.getElementById('pause-button');
  const exitBtn = document.getElementById('exit');

  game = new SpaceImpactGame(canvasMain, canvasBg);

  playBtn.addEventListener('click', () => game.start());
  pauseBtn.addEventListener('click', () => {
    game.gamePause = !game.gamePause;
    pauseBtn.innerHTML = game.gamePause ? 'Resume' : 'Pause';
    pauseBtn.blur();
  });
  exitBtn.addEventListener('click', () => window.location.reload());

  const updateButtonPos = () => {
    const canvasRect = canvasBg.getBoundingClientRect();
    playBtn.style.top = `${canvasRect.height - 70}px`;
    exitBtn.style.top = `${canvasRect.height - 70}px`;
  };
  
  updateButtonPos();
  window.addEventListener('resize', updateButtonPos);
});
</script>

<template>
  <nav>
    <img src="/img/logo.png" alt="logo" id="logo">
  </nav>
  <div id="game">
    <canvas id="canvas-bg"></canvas>
    <canvas id="canvas-main"></canvas>
    <button id="pause-button">Pause</button>
    <button class="ingame-button" id="play">Play</button>
    <button class="ingame-button" id="exit">Exit</button>
  </div>
  <div class="toggle-container">
    <span>On-screen Buttons:</span>
    <div class="toggle" :class="{ 'toggle-on': showOnscreenButtons }" @click="toggleOnscreenButtons">
      <div class="toggle-ball" :class="{ 'toggle-ball-on': showOnscreenButtons }"></div>
    </div>
  </div>
  <div id="info" v-show="!showOnscreenButtons">
    <h2 class="info-head">Controls:</h2>
    <div class="controls">
      <div class="control-wrapper">
        <div class="action">Move:</div>
        <img id="arrows" src="/img/arrowKeys.png" alt="arrow keys">
      </div>
      <div class="control-wrapper">
        <div class="action">Fire:</div>
        <img id="space" src="/img/spacebar.png" alt="spacebar">
      </div>
      <div class="control-wrapper">
        <div class="action">Special:</div>
        <img id="xKey" src="/img/special.png" alt="X key">
      </div>
    </div>
    <h2 class="desc-head">Description:</h2>
    <p class="desc">Shoot down the enemy ships and survive all 8 levels.</p>
  </div>
  <div class="buttons-onscreen" v-show="showOnscreenButtons" oncontextmenu="return false">
    <button type="button" id="button-left" class="button"><img src="/img/buttonLeft.png" alt=""></button>
    <button type="button" id="button-up" class="button"><img src="/img/buttonUp.png" alt=""></button>
    <button type="button" id="button-right" class="button"><img src="/img/buttonRight.png" alt=""></button>
    <button type="button" id="button-down" class="button"><img src="/img/buttonDown.png" alt=""></button>
    <button type="button" id="button-fire" class="button"><img src="/img/buttonFire.png" alt=""></button>
    <button type="button" id="button-x" class="button"><img src="/img/buttonX.png" alt=""></button>
  </div>
</template>

<style scoped>
/* Scoped styles for the component if needed, but most styles are global in style.css */
</style>