<template>
  <div class="page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-left">
        <h1>
          더 빠른 경험을 위해<br />
          <strong>Notion 데스크톱</strong><br />
          앱을 다운로드하세요
        </h1>
        <p>
          빠르고 미니멀한 인터페이스.<br />
          방해받지 않는 환경.
        </p>

        <div class="buttons">
          <button class="btn-primary">Windows용 다운로드</button>
          <button class="btn-store">Microsoft Store에서 다운로드</button>
        </div>
      </div>

      <div class="hero-right">
        <img src="/images/notion-desktop-preview.png" alt="Notion Desktop" />
      </div>
    </section>

    <!-- Quote -->
    <section class="quote">
      <p class="quote-text">
        “Notion 덕분에 저희가 기존에 사용하고 있던 여러 툴을 정리할 수 있었어요.”
      </p>
      <p class="quote-author">
        <strong>Justin Watt</strong><br />
        <span>Metalab · 제품디자인 이사</span>
      </p>
    </section>

    <!-- Footer Download -->
    <section class="footer-download">
      <h2>데스크톱용 Notion 다운로드</h2>
      <p>더 빠르고 더 집중적인 경험이 기다립니다.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// UserAgent 기반 OS 감지
const userAgent: string = navigator.userAgent.toLowerCase()

type OS = 'windows' | 'mac'

const detectedOS = computed<OS>(() => {
  if (userAgent.includes('mac')) return 'mac'
  return 'windows'
})

const downloadLabel = computed<string>(() => {
  return detectedOS.value === 'mac'
    ? 'macOS용 다운로드'
    : 'Windows용 다운로드'
})

const downloadMap: Record<OS, string> = {
  mac: '/downloads/notion-mac.dmg',
  windows: '/downloads/notion-win.exe'
}

const download = (): void => {
  const os = detectedOS.value
  const url = downloadMap[os]

  // TS 안전 가드 (undefined 방지)
  if (!url) return

  window.location.href = url
}
</script>

<style scoped>
/* ===== Base ===== */
.page {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #111;
  background: #fff;
}

/* ===== Hero Layout ===== */
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 80px;
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

.btn-primary {
  background: #111;
  color: #fff;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
}

.btn-primary:hover {
  background: #000;
}

.btn-store {
  background: #f5f5f5;
  color: #111;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 14px;
}

/* ===== Preview Image ===== */
.hero-right img {
  width: 100%;
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
}
</style>
