<template>
    <div>
        <slot></slot>
    </div>
</template>


<script lang="ts">
export default {
    name: 'Paragraph',
    props: {
        children: String
    }
}
</script>