<template>
    <div class="defaultLayout">
        <Header />
        <slot></slot>
        <Footer />
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

@Options({
    name: 'DefaultLayout',
    components: { Header, Footer },
})
export default class DefaultLayout extends Vue {}
</script>

<style></style>
