<template>
    <div id="app">
        <DefaultLayout>
            <router-view />
        </DefaultLayout>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DefaultLayout from '@/layouts/Default/Default.vue';

@Options({
    name: 'App',
    components: { DefaultLayout },
})
export default class App extends Vue {}
</script>
