<script setup lang="ts">
  import { computed, onMounted } from 'vue'
  import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'

  const router = useRouter()
  const route = useRoute()
  const authStore = useAuthStore()

  const isLoggedIn = computed(() => authStore.isLoggedIn)

  onMounted(() => {
    authStore.restore()
  })

  const handleLogout = () => {
    authStore.logout()
    router.push('/login')
  }

  const showHeader = computed(() => {
    return route.path !== '/login' && route.path !== '/register'
  })
  </script>

  <template>
    <div class="app">
      <!-- Header -->
      <header v-if="showHeader" class="header">
        <div class="header-container">
          <!-- Simple Menu (Left aligned) -->
          <nav class="simple-menu">
            <RouterLink to="/">입안등록</RouterLink>
            <RouterLink to="/download">다운로드</RouterLink>
          </nav>

          <!-- Auth -->
          <div class="auth-area">
            <RouterLink
              v-if="!isLoggedIn"
              to="/login"
              class="login-btn"
            >
              로그인
            </RouterLink>

            <button
              v-else
              class="logout-btn"
              @click="handleLogout"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <!-- Main -->
      <main class="main-content" :class="{ 'no-header': !showHeader }">
        <RouterView />
      </main>
    </div>
  </template>

  <style scoped>
  /* ===== Reset ===== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ===== App ===== */
  .app {
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont,
      'Segoe UI', sans-serif;
    background: #f5f7fa;
    color: #333;
    min-height: 100vh;
  }

  /* ===== Header ===== */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
    z-index: 100;
  }

  .header-container {
    max-width: 1280px; /* 폭 축소 */
    height: 60px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* ===== Menu ===== */
  .simple-menu {
    display: flex;
    gap: 24px;
  }

  .simple-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    font-size: 0.9rem;
    position: relative;
    padding: 6px 0;
  }

  .simple-menu a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #2563eb;
    transition: width 0.25s ease;
  }

  .simple-menu a:hover::after,
  .simple-menu a.router-link-active::after {
    width: 100%;
  }

  /* ===== Auth ===== */
  .auth-area {
    display: flex;
    align-items: center;
  }

  .login-btn,
  .logout-btn {
    background: #111;
    color: #fff;
    border: none;
    border-radius: 18px;
    padding: 6px 16px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .login-btn:hover,
  .logout-btn:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }

  /* ===== Main ===== */
  .main-content {
    margin-top: 60px;
    min-height: calc(100vh - 60px);
  }

  .main-content.no-header {
    margin-top: 0;
    min-height: 100vh;
  }

  /* ===== Responsive ===== */
  @media (max-width: 768px) {
    .header-container {
      padding: 0 16px;
    }

    .simple-menu {
      gap: 16px;
    }
  }
  </style>
