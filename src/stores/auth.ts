import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface UserInfo {
  user_id: string
  user_nm: string
  user_email?: string
  user_tel?: string
  user_hp?: string
  user_dept?: string
  user_position?: string
  user_role?: string
  use_yn?: string
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const isLoggedIn = ref(false)
  const userInfo = ref<UserInfo | null>(null)

  // Computed (Getters)
  const userName = computed(() => userInfo.value?.user_nm || '')

  const userAvatar = computed(() => {
    if (!userName.value) return ''
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(userName.value)}&background=3b82f6&color=fff`
  })

  const userId = computed(() => userInfo.value?.user_id || '')
  const userEmail = computed(() => userInfo.value?.user_email || '')
  const userTel = computed(() => userInfo.value?.user_tel || '')
  const userDept = computed(() => userInfo.value?.user_dept || '')
  const userPosition = computed(() => userInfo.value?.user_position || '')
  const userRole = computed(() => userInfo.value?.user_role || '')

  // Actions
  function login(userData: UserInfo) {
    console.log('🔐 Pinia: 로그인 처리', userData)

    isLoggedIn.value = true
    userInfo.value = userData

    // localStorage에도 저장
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userInfo', JSON.stringify(userData))
  }

  function logout() {
    console.log('🚪 Pinia: 로그아웃 처리')

    isLoggedIn.value = false
    userInfo.value = null

    // localStorage도 클리어
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userInfo')
  }

  function restore() {
    console.log('♻️ Pinia: 상태 복원 시도')

    const savedLoginState = localStorage.getItem('isLoggedIn')
    const savedUserInfo = localStorage.getItem('userInfo')

    if (savedLoginState === 'true' && savedUserInfo) {
      try {
        const userData = JSON.parse(savedUserInfo)
        isLoggedIn.value = true
        userInfo.value = userData
        console.log('✅ Pinia: 상태 복원 성공', userData)
      } catch (error) {
        console.error('❌ Pinia: 상태 복원 실패', error)
        logout()
      }
    } else {
      console.log('ℹ️ Pinia: 저장된 상태 없음')
    }
  }

  return {
    // State
    isLoggedIn,
    userInfo,
    // Getters
    userName,
    userAvatar,
    userId,
    userEmail,
    userTel,
    userDept,
    userPosition,
    userRole,
    // Actions
    login,
    logout,
    restore,
  }
})
