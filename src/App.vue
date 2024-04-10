<script setup lang="ts">
import { ref } from 'vue';
import { Button } from './components/ui/button';
import { Textarea } from './components/ui/textarea';

const phpBinary = 'php';
const code = ref(`echo "hello world";`);
const result = ref('');

function submit() {

}
</script>

<template>
  <div class="p-6 container mx-auto items-center justify-center">
    <form @submit.prevent="submit">
      <Textarea v-model="code" autofocus class="font-mono h-32" />
      <Button type="submit" class="mt-4">Submit</Button>
    </form>
    <div v-html="result"></div>
  </div>
</template>