<script setup lang="ts">
import { Button } from './components/ui/button';
import { Textarea } from './components/ui/textarea';
</script>

<template>
  <div class="p-6 container mx-auto items-center justify-center">
    <Textarea autofocus class="font-mono h-32" />
    <Button class="mt-4">Submit</Button>
  </div>
</template>