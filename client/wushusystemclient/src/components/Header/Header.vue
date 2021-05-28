<template>
    <div class="header">
        <nav></nav>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'Header',
})
export default class Header extends Vue {}
</script>

<style scoped>
.header {
    height: 300px;
    color: rgb(139, 150, 158);
}
</style>
