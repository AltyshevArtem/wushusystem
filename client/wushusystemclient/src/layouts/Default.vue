<template>
    <div class="defaultLayout">
        <Header />
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';

@Options({
    name: 'DefaultLayout',
    component: { Header },
})
export default class DefaultLayout extends Vue {}
</script>

<style></style>
