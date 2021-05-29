<template>
    <div class="footer">
        <span>Wushu Competitions</span>
    </div>
</template>

<script>
import { Vue } from 'vue-class-component';

export default class Footer extends Vue {}
</script>

<style scoped>
.footer {
    display: flex;
    background: rgb(95, 80, 136);
    justify-content: flex-end;
}
.footer > span {
    color: white;
    padding: 10px;
}
</style>
