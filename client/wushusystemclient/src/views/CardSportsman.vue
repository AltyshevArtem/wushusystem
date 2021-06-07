<template>
    <main>
        <div class="container py-4">
            <header class="pb-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                    <span class="fs-4">Jumbotron example</span>
                </a>
            </header>

            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="card" style="width: 18rem">
                    <!-- <img
                        class="card-img-top"
                        src="../media/${sportsmanMap.sportsman.photo}"
                        alt="Card image cap"
                    /> -->
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                <!-- <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Custom jumbotron</h1>
                    <p class="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just like the
                        one in previous versions of Bootstrap. Check out the examples below for how
                        you can remix and restyle it to your liking.
                    </p>
                </div> -->
            </div>

            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                        <h2>Change the background</h2>
                        <p>
                            Swap the background-color utility and add a `.text-*` color utility to
                            mix up the jumbotron look. Then, mix and match with additional component
                            themes and more.
                        </p>
                        <button class="btn btn-outline-light" type="button">Example button</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>Add borders</h2>
                        <p>
                            Or, keep it light and add a border for some added definition to the
                            boundaries of your content. Be sure to look under the hood at the source
                            HTML here as we've adjusted the alignment and sizing of both column's
                            content for equal-height.
                        </p>
                        <button class="btn btn-outline-secondary" type="button">
                            Example button
                        </button>
                    </div>
                </div>
            </div>

            <footer class="pt-3 mt-4 text-muted border-top">&copy; 2021</footer>
        </div>
    </main>
    <div class="sportsman">
        {{ sportsmanMap.sportsman }}
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { State, Action } from 'vuex-class';
import { ISportsmanState } from '../store/modules/sportsman/types';

const namespace = 'sportsman';

@Options({
    name: 'CardSportsman',
})
export default class Sportsman extends Vue {
    @State('sportsman')
    sportsmanMap!: ISportsmanState;
    @Action('getSportsman', { namespace })
    getSportsman: any;

    mounted(): void {
        this.getSportsman(this.$route.params.id);
    }
}
</script>

<style scoped></style>
