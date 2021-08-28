<template>
    <footer class="bg-dark text-center text-white">
        <div class="text-center p-3 copyright">
            © 2021 Все права защищены:
            <a class="text-white" href="http://www.wushu-russ.ru/">Федерация Ушу России</a>
        </div>
    </footer>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'Footer',
})
export default class Footer extends Vue {}
</script>

<style scoped>
.copyright {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
