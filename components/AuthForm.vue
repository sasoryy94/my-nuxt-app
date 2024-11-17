<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input 
        id="email" 
        type="email" 
        v-model="email" 
        placeholder="Enter your email"
        :disabled="loading"
        autocomplete="email"
        required
      />
    </div>
    
    <div class="space-y-2">
      <Label for="password">Password</Label>
      <Input 
        id="password" 
        type="password" 
        v-model="password" 
        :placeholder="passwordPlaceholder"
        :disabled="loading"
        :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
        required
      />
    </div>

    <Button type="submit" class="w-full" :disabled="loading">
      {{ loading ? 'Processing...' : submitLabel }}
    </Button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const props = defineProps<{
  mode: 'login' | 'signup'
  submitLabel?: string
}>()

const emit = defineEmits<{
  submit: [payload: { email: string, password: string }]
}>()

const email = ref('')
const password = ref('')
const loading = ref(false)

const passwordPlaceholder = computed(() => 
  props.mode === 'login' ? 'Enter your password' : 'Create a password'
)

const onSubmit = async () => {
  loading.value = true
  try {
    await emit('submit', { 
      email: email.value, 
      password: password.value 
    })
  } finally {
    loading.value = false
  }
}
</script> 