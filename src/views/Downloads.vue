<template>
  <div class="page">
    <!-- Hero -->
    <section class="hero">
      <!-- Left -->
      <div class="hero-left">
        <h1>
          더 빠른 경험을 위해<br />
          <strong>SsenTalk 데스크톱</strong><br />
          앱을 다운로드하세요
        </h1>

        <p>
          빠르고 미니멀한 인터페이스.<br />
          방해받지 않는 환경.
        </p>

        <div class="buttons">
          <button class="btn-primary" @click="download">
            {{ downloadLabel }}
          </button>
          <button class="btn-store">
            Microsoft Store에서 다운로드
          </button>
        </div>
      </div>

      <!-- Right -->
      <div class="hero-right">
        <img
          src="https://stormor1.mycafe24.com/ssen_talk/downloads/ssentalkmenu3.png"
          alt="SsenTalk Desktop Preview"
          class="preview-image"
        />
      </div>
    </section>



    <!-- Footer -->
    <section class="footer-download">
      <h2>데스크톱용 SsenTalk 다운로드</h2>
      <p>더 빠르고 더 집중적인 경험이 기다립니다.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/* OS 감지 */
type OS = 'windows' | 'mac'
const userAgent = navigator.userAgent.toLowerCase()

const detectedOS = computed<OS>(() => {
  if (userAgent.includes('mac')) return 'mac'
  return 'windows'
})

const downloadLabel = computed(() =>
  detectedOS.value === 'mac'
    ? 'macOS용 다운로드'
    : 'Windows용 다운로드'
)

const downloadMap: Record<OS, string> = {
  mac: '/downloads/notion-mac.dmg',
  windows: 'https://stormor1.mycafe24.com/ssen_talk/downloads/ssentalk1.0.2.zip'
}

const download = () => {
  const url = downloadMap[detectedOS.value]
  if (!url) return
  window.location.href = url
}
</script>

<style scoped>
/* ===== Base ===== */
.page {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
  color: #111;
  background: #fff;
}

/* ===== Hero Layout ===== */
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 220px 24px 80px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
}

.hero-left h1 {
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
}

.hero-left h1 strong {
  font-weight: 800;
}

.hero-left p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 32px;
}

/* ===== Buttons ===== */
.buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-primary,
.btn-store {
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 14px 24px;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    background-color 0.15s ease;
}

/* Primary */
.btn-primary {
  background: #111;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background: #000;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
}

/* Store */
.btn-store {
  background: #f5f5f5;
  color: #111;
  font-size: 14px;
}

.btn-store:hover {
  background: #ebebeb;
}

.btn-store:active {
  transform: scale(0.98);
}

/* ===== Preview Image (20% 확대) ===== */
.hero-right {
  display: flex;
  justify-content: center;
}

.preview-image {
  width: 100%;
  transform: scale(1.2);
  transform-origin: center;
  border-radius: 16px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
}

/* ===== Quote ===== */
.quote {
  text-align: center;
  padding: 120px 24px;
}

.quote-text {
  font-size: 20px;
  font-style: italic;
  margin-bottom: 16px;
}

.quote-author {
  font-size: 14px;
  color: #666;
}

.quote-author strong {
  color: #111;
}

/* ===== Footer ===== */
.footer-download {
  text-align: center;
  padding: 120px 24px;
}

.footer-download h2 {
  font-size: 32px;
  margin-bottom: 12px;
}

.footer-download p {
  font-size: 16px;
  color: #555;
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .buttons {
    align-items: center;
  }

  .hero-left h1 {
    font-size: 36px;
  }

  .preview-image {
    transform: scale(1.05);
  }
}
</style>
