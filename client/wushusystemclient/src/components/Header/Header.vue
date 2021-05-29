<template>
    <div class="header">
        <div class="header__nav">
            <nav>
                <ul>
                    <li>Соревнования</li>
                    <li><router-link to="/">Спортсмены</router-link></li>
                    <li>Судейство</li>
                    <li>Опубликовать</li>
                    <li>Информационные экраны</li>
                </ul>
            </nav>
        </div>
        <div class="header__user">
            <a href="/login">Войти</a>
        </div>
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
    display: flex;
    background: rgb(95, 80, 136);
}
.header__nav {
    display: flex;
    width: 70%;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
}
.header__user {
    display: flex;
    width: 30%;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 20px;
}
ul {
    display: flex;
    background: url('../../assets/cake.icon.png') no-repeat left;
    margin: 0;
}
li:first-child {
    padding-left: 20px;
}
li {
    display: inline-flex;
    padding: 10px;
}
li,
li > a,
.header__user > a {
    color: white;
    text-decoration: none;
}
li:hover,
li:focus,
.header__user > a:hover,
.header__user > a:focus,
li > a:hover,
li > a:focus {
    color: rgb(141, 119, 201);
}
</style>
