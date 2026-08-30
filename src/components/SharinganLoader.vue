<template>
  <div class="sharingan-overlay">
    <div class="animation-stage">
      
      <!-- 1. AMATERASU: EYE OPENING, MANGEKYO AWAKENING & BLOOD TEAR -->
      <div v-if="chosenType === 'amaterasu'" class="anime-amaterasu-container">
        <div class="eye-outer">
          <!-- Sclera & Inner Eye -->
          <div class="sclera-mesh">
            <!-- Blood capillaries in eye whites -->
            <svg class="veins-svg" viewBox="0 0 240 120">
              <path d="M 15 60 Q 40 55, 65 58 Q 50 48, 70 45 M 25 65 Q 45 70, 68 62" stroke="#8b0000" stroke-width="1.2" fill="none" opacity="0.75" />
              <path d="M 225 60 Q 200 55, 175 58 Q 190 48, 170 45 M 215 65 Q 195 70, 172 62" stroke="#8b0000" stroke-width="1.2" fill="none" opacity="0.75" />
            </svg>
            
            <!-- Amaterasu Black Flames Aura -->
            <div class="amaterasu-flames"></div>

            <!-- Iris with Itachi Mangekyo -->
            <div class="amaterasu-iris">
              <svg class="mangekyo-svg" viewBox="0 0 100 100">
                <!-- Red glowing Iris Background -->
                <circle cx="50" cy="50" r="48" fill="url(#crimsonGrad)" stroke="#111" stroke-width="3"/>
                <defs>
                  <radialGradient id="crimsonGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ff1a1a"/>
                    <stop offset="70%" stop-color="#cc0000"/>
                    <stop offset="100%" stop-color="#4a0000"/>
                  </radialGradient>
                </defs>
                <!-- 3 Itachi Curved Pinwheel Blades -->
                <g class="spin-blades">
                  <path d="M 50 50 C 45 30, 30 18, 50 4 C 62 18, 55 35, 50 50 Z" fill="#050505"/>
                  <path d="M 50 50 C 45 30, 30 18, 50 4 C 62 18, 55 35, 50 50 Z" fill="#050505" transform="rotate(120 50 50)"/>
                  <path d="M 50 50 C 45 30, 30 18, 50 4 C 62 18, 55 35, 50 50 Z" fill="#050505" transform="rotate(240 50 50)"/>
                  <!-- Center pupil -->
                  <circle cx="50" cy="50" r="9" fill="#050505"/>
                </g>
              </svg>
            </div>
          </div>

          <!-- Upper & Lower Eyelids that open -->
          <div class="lid lid-upper"></div>
          <div class="lid lid-lower"></div>
          
          <!-- Eye outline stroke -->
          <div class="eye-contour"></div>
          
          <!-- Bleeding tear -->
          <div class="blood-tear-stream"></div>
          <div class="blood-tear-drop"></div>
        </div>
      </div>

      <!-- 2. ITACHI MANGEKYO SHARINGAN (CANON PINWHEEL) -->
      <div v-else-if="chosenType === 'itachi'" class="eye-standalone">
        <svg class="sharingan-svg glow-red" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="url(#itachiRed)" stroke="#050505" stroke-width="4"/>
          <defs>
            <radialGradient id="itachiRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ff2626"/>
              <stop offset="65%" stop-color="#d60000"/>
              <stop offset="100%" stop-color="#540000"/>
            </radialGradient>
          </defs>
          <g class="spin-smooth">
            <path d="M 50 50 C 42 28, 28 15, 50 3 C 65 16, 58 35, 50 50 Z" fill="#000"/>
            <path d="M 50 50 C 42 28, 28 15, 50 3 C 65 16, 58 35, 50 50 Z" fill="#000" transform="rotate(120 50 50)"/>
            <path d="M 50 50 C 42 28, 28 15, 50 3 C 65 16, 58 35, 50 50 Z" fill="#000" transform="rotate(240 50 50)"/>
            <circle cx="50" cy="50" r="10" fill="#000"/>
          </g>
        </svg>
      </div>

      <!-- 3. SASUKE ETERNAL MANGEKYO SHARINGAN (CANON 6-POINT CHOKU TOMOE) -->
      <div v-else-if="chosenType === 'sasuke'" class="eye-standalone">
        <svg class="sharingan-svg glow-red" viewBox="0 0 100 100">
          <!-- Black background for Sasuke EMS -->
          <circle cx="50" cy="50" r="48" fill="#080808" stroke="#1a0000" stroke-width="3"/>
          <defs>
            <radialGradient id="sasukeRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ff3b3b"/>
              <stop offset="70%" stop-color="#d10000"/>
              <stop offset="100%" stop-color="#730000"/>
            </radialGradient>
          </defs>
          <g class="spin-smooth">
            <!-- 6 Red Star Petals -->
            <ellipse cx="50" cy="50" rx="46" ry="11" fill="url(#sasukeRed)" stroke="#000" stroke-width="1.5" transform="rotate(0 50 50)"/>
            <ellipse cx="50" cy="50" rx="46" ry="11" fill="url(#sasukeRed)" stroke="#000" stroke-width="1.5" transform="rotate(60 50 50)"/>
            <ellipse cx="50" cy="50" rx="46" ry="11" fill="url(#sasukeRed)" stroke="#000" stroke-width="1.5" transform="rotate(120 50 50)"/>
            <!-- Center Black Circular Core & Center Pupil -->
            <circle cx="50" cy="50" r="19" fill="#050505"/>
            <!-- Itachi's 3 black curved blades extending inward -->
            <path d="M 50 50 C 47 38, 40 30, 50 22 C 57 30, 53 40, 50 50 Z" fill="#ff1f1f"/>
            <path d="M 50 50 C 47 38, 40 30, 50 22 C 57 30, 53 40, 50 50 Z" fill="#ff1f1f" transform="rotate(120 50 50)"/>
            <path d="M 50 50 C 47 38, 40 30, 50 22 C 57 30, 53 40, 50 50 Z" fill="#ff1f1f" transform="rotate(240 50 50)"/>
            <circle cx="50" cy="50" r="6" fill="#000"/>
          </g>
        </svg>
      </div>

      <!-- 4. KAKASHI / OBITO KAMUI MANGEKYO -->
      <div v-else-if="chosenType === 'kamui'" class="eye-standalone">
        <svg class="sharingan-svg glow-red kamui-warp" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="url(#kamuiRed)" stroke="#000" stroke-width="4"/>
          <defs>
            <radialGradient id="kamuiRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ff2222"/>
              <stop offset="70%" stop-color="#c90000"/>
              <stop offset="100%" stop-color="#470000"/>
            </radialGradient>
          </defs>
          <g class="spin-smooth">
            <!-- 3 Extended Triangular Pinwheel Blades -->
            <path d="M 50 50 L 38 12 Q 50 2, 60 14 Z" fill="#000"/>
            <path d="M 50 50 L 38 12 Q 50 2, 60 14 Z" fill="#000" transform="rotate(120 50 50)"/>
            <path d="M 50 50 L 38 12 Q 50 2, 60 14 Z" fill="#000" transform="rotate(240 50 50)"/>
            <circle cx="50" cy="50" r="11" fill="#000"/>
          </g>
        </svg>
      </div>

      <!-- 5. SHISUI KOTOAMATSUKAMI (4-POINT PINWHEEL) -->
      <div v-else-if="chosenType === 'shisui'" class="eye-standalone">
        <svg class="sharingan-svg glow-red" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="url(#shisuiRed)" stroke="#000" stroke-width="4"/>
          <defs>
            <radialGradient id="shisuiRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ff2e2e"/>
              <stop offset="70%" stop-color="#cc0000"/>
              <stop offset="100%" stop-color="#4f0000"/>
            </radialGradient>
          </defs>
          <g class="spin-smooth">
            <!-- 4 Windmill blades -->
            <path d="M 50 50 Q 36 28, 50 4 Q 60 26, 50 50 Z" fill="#000"/>
            <path d="M 50 50 Q 36 28, 50 4 Q 60 26, 50 50 Z" fill="#000" transform="rotate(90 50 50)"/>
            <path d="M 50 50 Q 36 28, 50 4 Q 60 26, 50 50 Z" fill="#000" transform="rotate(180 50 50)"/>
            <path d="M 50 50 Q 36 28, 50 4 Q 60 26, 50 50 Z" fill="#000" transform="rotate(270 50 50)"/>
            <circle cx="50" cy="50" r="9" fill="#000"/>
          </g>
        </svg>
      </div>

      <!-- 6. MADARA ETERNAL MANGEKYO SHARINGAN -->
      <div v-else-if="chosenType === 'madara'" class="eye-standalone">
        <svg class="sharingan-svg glow-red" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="url(#madaraRed)" stroke="#000" stroke-width="4"/>
          <defs>
            <radialGradient id="madaraRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ff2222"/>
              <stop offset="65%" stop-color="#c90000"/>
              <stop offset="100%" stop-color="#4d0000"/>
            </radialGradient>
          </defs>
          <g class="spin-smooth">
            <!-- Madara Connected Ring and 3 Spikes -->
            <circle cx="50" cy="50" r="32" fill="none" stroke="#000" stroke-width="6"/>
            <!-- 3 Tomoe bulbs -->
            <circle cx="50" cy="18" r="9" fill="#000"/>
            <path d="M 50 9 Q 62 14, 50 27 Z" fill="#000"/>
            
            <circle cx="50" cy="18" r="9" fill="#000" transform="rotate(120 50 50)"/>
            <path d="M 50 9 Q 62 14, 50 27 Z" fill="#000" transform="rotate(120 50 50)"/>
            
            <circle cx="50" cy="18" r="9" fill="#000" transform="rotate(240 50 50)"/>
            <path d="M 50 9 Q 62 14, 50 27 Z" fill="#000" transform="rotate(240 50 50)"/>

            <circle cx="50" cy="50" r="10" fill="#000"/>
          </g>
        </svg>
      </div>

      <!-- 7. THREE-TOMOE SHARINGAN (CANON AWAKENING) -->
      <div v-else-if="chosenType === 'tomoe3'" class="eye-standalone">
        <svg class="sharingan-svg glow-red" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="url(#tomoeRed)" stroke="#000" stroke-width="4"/>
          <defs>
            <radialGradient id="tomoeRed" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ff2b2b"/>
              <stop offset="70%" stop-color="#d40000"/>
              <stop offset="100%" stop-color="#590000"/>
            </radialGradient>
          </defs>
          <!-- Inner circle line -->
          <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(0, 0, 0, 0.45)" stroke-width="2"/>
          <g class="spin-smooth">
            <!-- Tomoe 1 -->
            <g transform="translate(50, 22)">
              <circle cx="0" cy="0" r="5.5" fill="#000"/>
              <path d="M 0 -5.5 C 5 -5.5, 9 -2, 8 4 C 6 2, 2 0, 0 0 Z" fill="#000"/>
            </g>
            <!-- Tomoe 2 -->
            <g transform="rotate(120 50 50) translate(50, 22)">
              <circle cx="0" cy="0" r="5.5" fill="#000"/>
              <path d="M 0 -5.5 C 5 -5.5, 9 -2, 8 4 C 6 2, 2 0, 0 0 Z" fill="#000"/>
            </g>
            <!-- Tomoe 3 -->
            <g transform="rotate(240 50 50) translate(50, 22)">
              <circle cx="0" cy="0" r="5.5" fill="#000"/>
              <path d="M 0 -5.5 C 5 -5.5, 9 -2, 8 4 C 6 2, 2 0, 0 0 Z" fill="#000"/>
            </g>
            <circle cx="50" cy="50" r="8" fill="#000"/>
          </g>
        </svg>
      </div>

      <!-- 8. RINNEGAN (CANON SIX-PATHS PURPLE RIPPLES) -->
      <div v-else class="eye-standalone">
        <svg class="sharingan-svg glow-purple rinne-pulse-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="url(#rinnePurple)" stroke="#11081f" stroke-width="3.5"/>
          <defs>
            <radialGradient id="rinnePurple" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#b69cdb"/>
              <stop offset="50%" stop-color="#8a67ba"/>
              <stop offset="100%" stop-color="#462c69"/>
            </radialGradient>
          </defs>
          <!-- Concentric wave rings -->
          <circle cx="50" cy="50" r="38" fill="none" stroke="#1d1130" stroke-width="2.2"/>
          <circle cx="50" cy="50" r="28" fill="none" stroke="#1d1130" stroke-width="2.2"/>
          <circle cx="50" cy="50" r="18" fill="none" stroke="#1d1130" stroke-width="2.2"/>
          <circle cx="50" cy="50" r="8" fill="#150826"/>
        </svg>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SharinganLoader",
  props: {
    forcedType: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      chosenType: "amaterasu",
      types: [
        "amaterasu",
        "itachi",
        "sasuke",
        "kamui",
        "shisui",
        "madara",
        "tomoe3",
        "rinnegan"
      ]
    };
  },
  created() {
    if (this.forcedType) {
      this.chosenType = this.forcedType;
    } else {
      const randIndex = Math.floor(Math.random() * this.types.length);
      this.chosenType = this.types[randIndex];
    }
  }
};
</script>

<style scoped>
.sharingan-overlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at center, rgba(12, 3, 3, 0.96) 0%, rgba(2, 2, 4, 0.98) 100%);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  user-select: none;
}

.animation-stage {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* STANDALONE EYE SVGs */
.eye-standalone {
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sharingan-svg {
  width: 130px;
  height: 130px;
  filter: drop-shadow(0 0 25px rgba(228, 20, 20, 0.75));
  transition: transform 0.3s ease;
}

.glow-red {
  animation: glow-pulse-red 2.4s infinite alternate ease-in-out;
}

.glow-purple {
  animation: glow-pulse-purple 2.4s infinite alternate ease-in-out;
}

.spin-smooth {
  transform-origin: 50px 50px;
  animation: spin-canon 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.spin-blades {
  transform-origin: 50px 50px;
  animation: spin-canon 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.kamui-warp {
  animation: kamui-warp-anim 3s infinite ease-in-out;
}

.rinne-pulse-svg {
  animation: rinne-chakra 2.8s infinite alternate ease-in-out;
}

/* 1. AMATERASU EYE OPENING & BLEEDING EFFECT */
.anime-amaterasu-container {
  position: relative;
  width: 240px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.eye-outer {
  position: relative;
  width: 220px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sclera-mesh {
  position: relative;
  width: 216px;
  height: 106px;
  background: radial-gradient(ellipse at center, #ffffff 30%, #e6d3d3 70%, #8c2626 100%);
  border-radius: 50% 50% 50% 50% / 65% 65% 35% 35%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.85);
}

.veins-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  animation: veins-flare 2.8s infinite ease-in-out;
}

.amaterasu-iris {
  position: relative;
  width: 86px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.mangekyo-svg {
  width: 86px;
  height: 86px;
  filter: drop-shadow(0 0 18px rgba(255, 20, 20, 0.9));
}

/* Black flames around the eye */
.amaterasu-flames {
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  box-shadow: 0 0 25px 8px #000, 0 0 40px 14px #ff1a1a;
  animation: amaterasu-flame-burst 1.4s infinite alternate ease-in-out;
  pointer-events: none;
  z-index: 2;
}

/* Eyelids opening animation */
.lid {
  position: absolute;
  left: -2px;
  width: calc(100% + 4px);
  background: #0d0404;
  z-index: 10;
  transition: all 0.4s ease;
}

.lid-upper {
  top: -2px;
  height: 52%;
  border-bottom: 3px solid #2e0909;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  animation: amaterasu-lid-top 2.8s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

.lid-lower {
  bottom: -2px;
  height: 52%;
  border-top: 3px solid #2e0909;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
  animation: amaterasu-lid-bottom 2.8s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

.eye-contour {
  position: absolute;
  inset: -1px;
  border-radius: 50% 50% 50% 50% / 65% 65% 35% 35%;
  border: 3px solid #140404;
  pointer-events: none;
  z-index: 11;
  box-shadow: 0 0 30px rgba(228, 20, 20, 0.5);
}

/* Blood Tear stream and falling drop */
.blood-tear-stream {
  position: absolute;
  top: 96px;
  left: 50%;
  width: 4.5px;
  height: 0;
  background: linear-gradient(to bottom, #590000 0%, #a80000 60%, #ff0d0d 100%);
  border-radius: 2px;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.9);
  animation: blood-stream-anim 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  z-index: 12;
}

.blood-tear-drop {
  position: absolute;
  top: 96px;
  left: 50%;
  width: 9px;
  height: 12px;
  background: radial-gradient(circle at 30% 30%, #ff2b2b 0%, #8c0000 70%);
  border-radius: 50% 50% 50% 50% / 25% 25% 75% 75%;
  transform: translateX(-50%);
  box-shadow: 0 0 12px #ff0000;
  animation: blood-drop-anim 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  z-index: 13;
}

/* ANIMATIONS */
@keyframes spin-canon {
  0% { transform: rotate(0deg) scale(0.92); }
  50% { transform: rotate(540deg) scale(1.04); }
  100% { transform: rotate(1080deg) scale(0.92); }
}

@keyframes glow-pulse-red {
  0% { filter: drop-shadow(0 0 15px rgba(228, 20, 20, 0.5)); transform: scale(0.97); }
  100% { filter: drop-shadow(0 0 35px rgba(255, 30, 30, 0.95)); transform: scale(1.03); }
}

@keyframes glow-pulse-purple {
  0% { filter: drop-shadow(0 0 15px rgba(158, 132, 184, 0.5)); transform: scale(0.97); }
  100% { filter: drop-shadow(0 0 35px rgba(186, 150, 224, 0.95)); transform: scale(1.03); }
}

@keyframes kamui-warp-anim {
  0% { transform: scale(0.95) rotate(0deg); }
  50% { transform: scale(1.08) rotate(180deg) skew(2deg, 2deg); filter: drop-shadow(0 0 35px #ff1a1a); }
  100% { transform: scale(0.95) rotate(360deg); }
}

@keyframes rinne-chakra {
  0% { transform: scale(0.96); filter: drop-shadow(0 0 15px rgba(160, 130, 200, 0.6)); }
  100% { transform: scale(1.05); filter: drop-shadow(0 0 40px rgba(200, 160, 255, 0.95)); }
}

@keyframes amaterasu-lid-top {
  0%, 12% { height: 52%; }
  30%, 85% { height: 6%; }
  100% { height: 52%; }
}

@keyframes amaterasu-lid-bottom {
  0%, 12% { height: 52%; }
  30%, 85% { height: 6%; }
  100% { height: 52%; }
}

@keyframes amaterasu-flame-burst {
  0% { opacity: 0.5; transform: scale(0.92); box-shadow: 0 0 20px 4px #000, 0 0 30px 8px #ff1a1a; }
  100% { opacity: 1; transform: scale(1.1); box-shadow: 0 0 45px 12px #000, 0 0 60px 18px #ff3333; }
}

@keyframes veins-flare {
  0%, 15% { opacity: 0.3; }
  45%, 85% { opacity: 1; filter: drop-shadow(0 0 4px #b30000); }
  100% { opacity: 0.3; }
}

@keyframes blood-stream-anim {
  0%, 25% { height: 0; opacity: 0; }
  38% { opacity: 1; }
  65%, 90% { height: 55px; opacity: 1; }
  100% { height: 62px; opacity: 0; }
}

@keyframes blood-drop-anim {
  0%, 30% { top: 96px; opacity: 0; transform: translateX(-50%) scale(0.4); }
  45% { opacity: 1; transform: translateX(-50%) scale(1); }
  75% { top: 155px; opacity: 1; }
  90%, 100% { top: 180px; opacity: 0; transform: translateX(-50%) scale(1.4); }
}
</style>
