<template>
    <header class="p-3 bg-dark text-white">
        <div class="container">
            <div
                class="
                    d-flex
                    flex-wrap
                    align-items-center
                    justify-content-center justify-content-lg-start
                "
            >
                <a
                    href="/"
                    class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                >
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap" />
                    </svg>
                </a>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <!-- TODO: hover, focus для линков в навигации -->
                    <li><a href="#" class="nav-link px-2 text-white">Соревнования</a></li>
                    <li>
                        <router-link to="/sportsmans" class="nav-link px-2 text-white"
                            >Спортсмены</router-link
                        >
                    </li>
                    <li><a href="#" class="nav-link px-2 text-white">Судейство</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">Опубликовать</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">Информационные экраны</a></li>
                </ul>
                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Войти</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'Header',
})
export default class Header extends Vue {}
</script>

<style scoped>
svg {
    background: url('../../assets/cake.icon.png') no-repeat left;
}
</style>
