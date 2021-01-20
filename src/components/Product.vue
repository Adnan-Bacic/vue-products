<template>
    <div>
        <h1>Product</h1>
        {{ productID }}
    </div>
</template>

<script>
export default {
    name: 'Product',

    data(){
        return{
            productID: this.$route.params.product_id
        }
    }
}
</script>