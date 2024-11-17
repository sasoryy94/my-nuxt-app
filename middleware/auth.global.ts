export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()
  const publicRoutes = ['/login', '/signup']
  
  if (user.value && publicRoutes.includes(to.path)) {
    return navigateTo('/', { replace: true })
  }
  
  if (!user.value && !publicRoutes.includes(to.path)) {
    return navigateTo('/login', { replace: true })
  }
}) 