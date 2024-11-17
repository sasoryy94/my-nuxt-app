<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Welcome Back</h1>
        <p class="text-gray-600">Sign in to your account</p>
      </div>

      <AuthForm 
        mode="login"
        submit-label="Sign In"
        @submit="handleLogin"
      />

      <div v-if="error" class="p-4 text-sm text-red-600 bg-red-50 rounded-md">
        {{ error }}
      </div>

      <div class="text-center text-sm text-gray-600">
        Don't have an account? 
        <NuxtLink to="/signup" class="text-blue-600 hover:underline">
          Sign up
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { handleLogin, error } = useAuth()
</script> 