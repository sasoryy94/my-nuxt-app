<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Welcome, {{ user?.email }}</h2>
      <p>This is your protected dashboard page.</p>
    </div>
  </div>
</template>

<script setup>
const { user } = useAuth()
</script> 