<template>
    <div style="padding: 0 10px;">
        <h3 class="title text-base">{{ title }}</h3>
        <span v-html="text"></span>
        <div class="link" v-if="loadButtonShow">
            <a v-if="extractLink(text)" :href="extractLink(text)" target="_blank" class="text-sm">Перейти на источник</a>
        </div>
    </div>
</template>


<script lang="ts" setup>
defineProps<{
    title?: string,
    text?: string,
    loadButtonShow?: boolean,
}>()

function extractLink(content: string = '') {
    var regex = /<a\s+href="([^"]+)"\s+target="_blank">[^<]+<\/a>/;
    var match = content.match(regex);
    if (match) {
        return match[1];
    }
    return '';
}
</script>

<style lang="scss" scoped>
.link {
    width: 100%;
    display: flex;
    justify-content: end;
    color: var(--gray);
    margin-top: 25px;
}

.title {
    color: var(--primary);
}
</style>