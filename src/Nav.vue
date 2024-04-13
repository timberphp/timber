<script setup lang=ts>
import { Icon } from '@iconify/vue';
import { cn } from './lib/utils'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'

export interface LinkProp {
    title: string
    label?: string
    icon: string
    variant: 'default' | 'ghost'
}

const links: LinkProp[] = [
    {
        title: 'Open Folder',
        icon: 'lucide:inbox',
        variant: 'default',
    },
    {
        title: 'Drafts',
        icon: 'lucide:file',
        variant: 'ghost',
    },
    {
        title: 'Sent',
        icon: 'lucide:send',
        variant: 'ghost',
    },
    {
        title: 'Junk',
        icon: 'lucide:archive',
        variant: 'ghost',
    },
    {
        title: 'Trash',
        icon: 'lucide:trash',
        variant: 'ghost',
    },
    {
        title: 'Archive',
        icon: 'lucide:archive',
        variant: 'ghost',
    },
]
</script>

<template>
    <div class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
        <nav class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                <a href="#" class="size-9">
                    <Icon icon="lucide:folder-open" class="size-6" />
                    <span class="sr-only">Open folder</span>
                </a>
        </nav>
    </div>
</template>