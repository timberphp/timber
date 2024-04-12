<script setup lang="ts">
import {ref} from 'vue';
import {Button} from './components/ui/button';
import {Textarea} from './components/ui/textarea';
import {invoke} from '@tauri-apps/api/core';
import {makeCommand} from './lib/code-runner';
import {open} from '@tauri-apps/plugin-dialog'

const code = ref(`echo "hello world";`);
const directory = ref('/Users/daudau/Code/lab');
const output = ref('');


async function submit() {
  const command = await makeCommand(directory.value, 'local', code.value);
  console.log(command);
  try {
    const result = await invoke('execute_command', {command}) as string;
    output.value = result;
    console.log('output', result)
  } catch (e) {
    if (typeof e === 'string') {
      output.value = e;
    } else if (e instanceof Error) {
      output.value = e.message;
    } else {
      output.value = "An error occurred."
    }
  }
}

async function selectFolder() {
  const selected = await open({
    directory: true,
    multiple: false,
  })
  console.log('selected', selected)
  if (selected) {
    directory.value = selected;
  }
}
</script>

<template>
  <div class="p-6 container mx-auto items-center justify-center">
    <div>
      Directory: {{ directory }}
      <Button variant="outline" type="button" @click="selectFolder">select directory</Button>
    </div>
    <form @submit.prevent="submit">
      <Textarea v-model="code" autofocus class="font-mono h-32"/>
      <Button type="submit" class="mt-4">Submit</Button>
    </form>
    <pre class="text-sm" v-text="output"></pre>
  </div>
</template>