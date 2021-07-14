<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="error-template">
                    <p class="error-message">404</p>
                    <h2>Not Found</h2>
                    <div class="error-details">
                        Извините, запрашиваемая страница не найдена или удалена!
                    </div>
                    <div class="error-actions">
                        <a href="/" class="btn btn-primary btn-lg"
                            ><span class="glyphicon glyphicon-home"></span> На Главную
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
    name: 'PageNnotFound',
})
export default class PageNnotFound extends Vue {}
</script>

<style scoped>
.error-message {
    font-size: 150px;
}
.error-template {
    padding: 40px 15px;
    text-align: center;
}
.error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
}
.error-actions .btn {
    margin-right: 10px;
}
</style>
