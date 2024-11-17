<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Create Account</h1>
        <p class="text-gray-600">Sign up to get started</p>
      </div>

      <AuthForm 
        mode="signup"
        submit-label="Sign Up"
        @submit="handleSignup"
      />

      <div v-if="error" class="p-4 text-sm text-red-600 bg-red-50 rounded-md">
        {{ error }}
      </div>

      <div class="text-center text-sm text-gray-600">
        Already have an account? 
        <NuxtLink to="/login" class="text-blue-600 hover:underline">
          Sign in
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { handleSignup, error } = useAuth()
</script> 