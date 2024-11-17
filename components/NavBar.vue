<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">Home</NuxtLink>
      <div>
        <template v-if="user">
          <Button variant="outline" @click="handleLogout">Logout</Button>
        </template>
        <template v-else>
          <NuxtLink to="/login" class="text-blue-600 hover:underline mr-4">Login</NuxtLink>
          <NuxtLink to="/signup" class="text-blue-600 hover:underline">Sign Up</NuxtLink>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { user, handleLogout } = useAuth()
</script> 