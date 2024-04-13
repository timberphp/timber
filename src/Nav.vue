<script setup lang=ts>
import { Icon } from '@iconify/vue';
import Button from './components/ui/button/Button.vue';
</script>

<template>
    <div class="group h-screen max-w-12 bg-gray-200 flex flex-col gap-4 py-2">
        <nav class="flex flex-col items-center justify-center gap-2">
            <!-- open folder -->
            <Button variant="link" size="icon">
                <Icon icon="lucide:folder-open" class="size-6" />
            </Button>

            <!-- open servers -->
            <Button variant="link" size="icon">
                <Icon icon="lucide:server" class="size-6" />
            </Button>
        </nav>
    </div>
</template>