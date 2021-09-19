<template>
    <nav aria-label="..." v-if="pageCount > 1">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: sportsmansMap.page === 1 }">
                <a class="page-link" @click="prevPage" tabindex="-1" aria-disabled="true">
                    Previous
                </a>
            </li>
            <template v-if="pageCount > limitPage">
                <li
                    class="page-item"
                    v-for="page in limitPage"
                    :key="page"
                    :class="{ disabled: isDisabledPage(page) }"
                >
                    <a class="page-link" @click="currentPage(page)">{{ page }}</a>
                </li>
                <li class="page-item disabled">
                    <a class="page-link">...</a>
                </li>
            </template>
            <template v-else>
                <li
                    class="page-item"
                    v-for="page in pageCount"
                    :key="page"
                    :class="{ disabled: isDisabledPage(page) }"
                >
                    <a class="page-link" @click="currentPage(page)">{{ page }}</a>
                </li>
            </template>
            <li class="page-item" :class="{ disabled: sportsmansMap.page === pageCount }">
                <a class="page-link" @click="nextPage"> Next </a>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts">
// TODO: Если страниц больше limitPage, то мы не видим страницы больше
//     этого значения. Нужно либо использовать скролл,
//     либо при нажатии в списке менять нумерацию
/* VUE */
import { Vue, Options } from 'vue-class-component';

/* VUEX */
import { State, Mutation } from 'vuex-class';

/* STATE */
import { ISportsmansState } from '@/store/modules/sportsmans/types';

/* NAMESPACE */
const namespace = 'sportsmans';

@Options({
    name: 'Pagination',
})
// TODO: Сделать компонент пагинации независимым от Sportsman
export default class Pagination extends Vue {
    /* PAGINATION LIMIT */
    limitPage = 25;

    /* COMPUTED */
    get pageCount(): number {
        if (this.sportsmansMap.pageSize === 0) return 0;
        return Math.ceil(this.sportsmansMap.count / this.sportsmansMap.pageSize);
    }

    /* METHOD */
    public isDisabledPage(page: number): boolean {
        return page === this.sportsmansMap.page;
    }

    /* STATE */
    @State('sportsmans')
    sportsmansMap!: ISportsmansState;

    /* MUTATIONS */
    @Mutation('setSearch', { namespace })
    setSearch: any;
    @Mutation('prevPage', { namespace })
    prevPage: any;
    @Mutation('currentPage', { namespace })
    currentPage: any;
    @Mutation('nextPage', { namespace })
    nextPage: any;

    mounted(): void {
        this.currentPage(1);
    }
}
</script>
