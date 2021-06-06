<template>
    <div class="defaultLayout">
        <Header />
        <main>
            <slot />
        </main>
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

<style>
.defaultLayout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
main {
    flex: 1;
}
</style>
