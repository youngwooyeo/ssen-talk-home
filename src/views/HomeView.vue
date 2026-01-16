<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const searchQuery = ref('')

  const mainCategories = ref([
    {
      id: 1,
      title: '쎈톡이란?',
      description: '1클릭으로 3000명에게 개별 카톡을 보내는 단체발송 서비스입니다.',
      image: '💬',
      link: '/about'
    },
    {
      id: 2,
      title: '시작하기',
      description: 'PC카톡 로그인 → 고객 명단 등록 → 메시지 작성 → 전송',
      image: '🚀',
      link: '/getting-started'
    },
    {
      id: 3,
      title: '고객 관리',
      description: '고객 명단을 등록하고 그룹별로 관리하는 방법을 알아보세요.',
      image: '📋',
      link: '/customer-management'
    },
    {
      id: 4,
      title: '메시지 발송',
      description: '1:1 개별 메시지처럼 보이는 단체 발송으로 고객 응답률을 높이세요.',
      image: '📤',
      link: '/send-message'
    }
  ])

  const popularTopics = ref([
    'PC카톡 로그인 방법',
    '고객 명단 등록하기',
    '메시지 예약 발송',
    '콘텐츠 다운로드 및 활용',
    '발송 실패 해결 방법',
    '이용자 보호조치 예방'
  ])

  const navigateTo = (path: string) => {
    router.push(path)
  }
  </script>

  <template>
    <div class="home-view">
      <!-- 히어로 -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">쎈톡 사용설명서</h1>
          <p class="hero-subtitle">1:1 카톡 단체발송의 모든 것</p>

          <div class="search-container">
            <div class="search-box">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="사용 설명서 검색하기"
                class="search-input"
              />
            </div>
          </div>
        </div>

        <!-- 모니터 목업은 유지 -->
        <div class="hero-image">
          <div class="monitor-mockup">
            <div class="monitor-screen">
              <div class="screen-content">
                <div class="screen-text">
                  <div class="logo-text">쎈톡</div>
                  <div class="subtitle-text">1:1 카톡 단체발송</div>
                </div>
              </div>
            </div>
            <div class="monitor-stand">
              <div class="stand-neck"></div>
              <div class="stand-base"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 카테고리 -->
      <section class="main-content">
        <div class="categories-section">
          <div
            v-for="category in mainCategories"
            :key="category.id"
            class="category-card text-only"
            @click="navigateTo(category.link)"
          >
            <div class="category-info">
              <h3 class="category-title">{{ category.title }}</h3>
              <p class="category-description">{{ category.description }}</p>
              <div class="category-link">
                자세히 보기 →
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>


  <style scoped>
  .home-view {
    background: #f5f5f7;
    min-height: calc(100vh - 70px);
  }

  /* 히어로 섹션 */
  .hero-section {
    background: #fff;
    padding: 60px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;
  }

  .hero-content {
    max-width: 600px;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: #1d1d1f;
    margin-bottom: 12px;
    letter-spacing: -1px;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 1.3rem;
    color: #86868b;
    margin-bottom: 40px;
    font-weight: 400;
  }

  .search-container {
    margin-bottom: 24px;
  }

  .search-box {
    display: flex;
    align-items: center;
    background: #f5f5f7;
    border-radius: 12px;
    padding: 14px 20px;
    gap: 12px;
    transition: all 0.3s;
  }

  .search-box:focus-within {
    background: #e8e8ed;
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.1);
  }

  .search-icon {
    color: #86868b;
    flex-shrink: 0;
  }

  .search-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: #1d1d1f;
    outline: none;
  }

  .search-input::placeholder {
    color: #86868b;
  }

  .toc-link {
    margin-top: 20px;
  }

  .toc-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #007aff;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.3s;
  }

  .toc-button:hover {
    opacity: 0.7;
  }

  /* 히어로 이미지 - 모니터 */
  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .monitor-mockup {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .monitor-screen {
    width: 480px;
    height: 320px;
    background: #1d1d1f;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .monitor-screen::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 8px;
    background: #1d1d1f;
    border-radius: 0 0 8px 8px;
  }

  .screen-content {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .screen-gradient {
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .screen-text {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .logo-text {
    color: #fff;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: -1px;
  }

  .subtitle-text {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2rem;
    font-weight: 500;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .monitor-stand {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -4px;
  }

  .stand-neck {
    width: 80px;
    height: 60px;
    background: linear-gradient(180deg, #3d3d3f 0%, #2d2d2f 100%);
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .stand-base {
    width: 160px;
    height: 12px;
    background: linear-gradient(180deg, #3d3d3f 0%, #2d2d2f 100%);
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* 메인 콘텐츠 */
  .main-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 60px 40px;
  }

  /* 카테고리 섹션 */
  .categories-section {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 80px;
  }

  .category-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .category-card {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 60px;
    align-items: center;
    padding: 40px 0;
    cursor: pointer;
    transition: all 0.3s;
  }

  .category-card.reverse {
    grid-template-columns: 1fr 320px;
  }

  .category-card.reverse .category-device {
    order: 2;
  }

  .category-card.reverse .category-info {
    order: 1;
    text-align: right;
  }

  .category-card.reverse .category-link {
    justify-content: flex-end;
  }

  .category-card:hover .phone-mockup {
    transform: translateY(-8px) scale(1.02);
  }

  /* iPhone 목업 */
  .category-device {
    display: flex;
    justify-content: center;
  }

  .phone-mockup {
    width: 280px;
    height: 560px;
    background: #1d1d1f;
    border-radius: 48px;
    padding: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .phone-mockup::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 30px;
    background: #1d1d1f;
    border-radius: 0 0 20px 20px;
    z-index: 10;
  }

  .phone-screen {
    width: 100%;
    height: 100%;
    border-radius: 38px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .screen-content-phone {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .screen-gradient-phone {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .screen-gradient-phone.gradient-1 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .screen-gradient-phone.gradient-2 {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }

  .screen-gradient-phone.gradient-3 {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }

  .screen-gradient-phone.gradient-4 {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }

  .screen-icon {
    font-size: 5rem;
    z-index: 1;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
  }

  .home-indicator {
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
  }

  .home-indicator::before {
    content: '';
    width: 120px;
    height: 5px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 3px;
  }

  /* 카테고리 정보 */
  .category-info {
    padding: 20px 0;
  }

  .category-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1d1d1f;
    margin-bottom: 16px;
    letter-spacing: -1px;
  }

  .category-description {
    font-size: 1.1rem;
    color: #86868b;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .category-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #007aff;
    font-size: 1rem;
    font-weight: 600;
    transition: gap 0.3s;
  }

  .category-card:hover .category-link {
    gap: 10px;
  }

  /* 쎈톡 설명 섹션 */
  .explanation-section {
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #fff;
    border-radius: 24px;
  }

  .explanation-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: #1d1d1f;
    margin-bottom: 60px;
    line-height: 1.4;
  }

  .conversation-flow {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .message-bubble {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
  }

  .message-bubble:nth-child(1) {
    animation-delay: 0.2s;
  }
  .message-bubble:nth-child(2) {
    animation-delay: 0.4s;
  }
  .message-bubble:nth-child(3) {
    animation-delay: 0.6s;
  }
  .message-bubble:nth-child(4) {
    animation-delay: 0.8s;
  }
  .message-bubble:nth-child(5) {
    animation-delay: 1s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .message-bubble.left {
    justify-content: flex-start;
  }

  .message-bubble.right {
    justify-content: flex-end;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .avatar-icon {
    font-size: 2rem;
  }

  .bubble-content {
    background: #f5f5f7;
    padding: 20px 24px;
    border-radius: 20px;
    max-width: 500px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  }

  .message-bubble.left .bubble-content {
    border-top-left-radius: 4px;
  }

  .message-bubble.right .bubble-content {
    border-top-right-radius: 4px;
  }

  .bubble-content.blue {
    background: #007aff;
  }

  .bubble-content p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #1d1d1f;
    margin: 0;
  }

  .bubble-content.blue p {
    color: #fff;
  }

  /* 4단계 프로세스 섹션 */
  .process-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 40px;
    background: #fff;
    border-radius: 24px;
  }

  .process-steps {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .process-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex: 1;
    max-width: 200px;
  }

  .step-icon-wrapper {
    width: 140px;
    height: 140px;
    background: #f5f7fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .process-step:hover .step-icon-wrapper {
    background: #e8f4ff;
    transform: scale(1.05);
  }

  .step-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1d1d1f;
    text-align: center;
  }

  .step-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 -10px;
  }

  /* 인기 주제 */
  .popular-section {
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1d1d1f;
    margin-bottom: 30px;
  }

  .popular-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .popular-item {
    background: #fff;
    border-radius: 12px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: all 0.3s;
    border: 1px solid #d2d2d7;
  }

  .popular-item:hover {
    background: #f5f5f7;
    transform: translateX(4px);
  }

  .popular-icon {
    color: #007aff;
    flex-shrink: 0;
  }

  .popular-text {
    flex: 1;
    font-size: 1rem;
    color: #1d1d1f;
    font-weight: 500;
  }

  .popular-arrow {
    color: #86868b;
    flex-shrink: 0;
  }

  /* 반응형 */
  @media (max-width: 1024px) {
    .hero-section {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .hero-image {
      order: -1;
    }

    .popular-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 40px 20px;
    }

    .main-content {
      padding: 40px 20px;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .category-card {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .category-card.reverse {
      grid-template-columns: 1fr;
    }

    .category-card.reverse .category-device {
      order: 1;
    }

    .category-card.reverse .category-info {
      order: 2;
      text-align: left;
    }

    .category-card.reverse .category-link {
      justify-content: flex-start;
    }

    .phone-mockup {
      width: 240px;
      height: 480px;
    }

    .screen-icon {
      font-size: 4rem;
    }

    .category-title {
      font-size: 2rem;
    }

    .category-description {
      font-size: 1rem;
    }

    .monitor-screen {
      width: 360px;
      height: 240px;
    }

    .logo-text {
      font-size: 2.2rem;
    }

    .subtitle-text {
      font-size: 1rem;
    }

    .stand-neck {
      width: 60px;
      height: 50px;
    }

    .stand-base {
      width: 120px;
    }

    .explanation-section {
      padding: 60px 30px;
    }

    .explanation-title {
      font-size: 1.8rem;
      margin-bottom: 40px;
    }

    .conversation-flow {
      gap: 20px;
    }

    .message-bubble {
      gap: 12px;
    }

    .avatar {
      width: 50px;
      height: 50px;
    }

    .avatar-icon {
      font-size: 1.6rem;
    }

    .bubble-content {
      padding: 16px 20px;
      max-width: 100%;
    }

    .bubble-content p {
      font-size: 0.95rem;
    }

    .process-section {
      padding: 40px 20px;
    }

    .process-steps {
      flex-direction: column;
      gap: 30px;
    }

    .process-step {
      max-width: 100%;
    }

    .step-icon-wrapper {
      width: 120px;
      height: 120px;
    }

    .step-icon svg {
      width: 50px;
      height: 50px;
    }

    .step-arrow {
      transform: rotate(90deg);
      margin: -10px 0;
    }

    .step-title {
      font-size: 1rem;
    }
  }
  </style>