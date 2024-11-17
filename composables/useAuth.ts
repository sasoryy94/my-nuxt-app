import { useSupabaseClient, useSupabaseUser } from '#imports'

export const useAuth = () => {
  const supabaseClient = useSupabaseClient()
  const user = useSupabaseUser()
  const error = ref('')
  
  const handleLogin = async (credentials: { email: string, password: string }) => {
    try {
      error.value = ''
      const { data, error: authError } = await supabaseClient.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })
      
      if (authError) throw authError
      
      if (data?.user) {
        await navigateTo('/')
      }
    } catch (e: any) {
      error.value = e.message
      console.error('Login error:', e)
    }
  }

  const handleLogout = async () => {
    try {
      error.value = ''
      const { error: authError } = await supabaseClient.auth.signOut()
      if (authError) throw authError
      await navigateTo('/login')
    } catch (e: any) {
      error.value = e.message
      console.error('Logout error:', e)
    }
  }

  const handleSignup = async (credentials: { email: string, password: string }) => {
    try {
      error.value = ''
      const { data, error: authError } = await supabaseClient.auth.signUp({
        email: credentials.email,
        password: credentials.password
      })
      
      if (authError) throw authError
      
      if (data?.user) {
        await navigateTo('/')
      }
    } catch (e: any) {
      error.value = e.message
      console.error('Signup error:', e)
    }
  }

  return {
    user,
    error,
    handleLogin,
    handleLogout,
    handleSignup
  }
}