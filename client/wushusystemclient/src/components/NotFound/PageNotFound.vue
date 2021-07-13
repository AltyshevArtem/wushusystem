<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="error-template">
                    <p class="error-number">404</p>
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
<script>
export default {
    name: 'PageNotFound',
};
</script>

<style>
.error-number {
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
