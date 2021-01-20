<template>
    <div>
        <h1>Product list</h1>
        <ul>
            <li v-for="(product, index) in arrayProducts" v-bind:key="index">
                <p>{{ product.id }}</p>
                <p>{{ product.name }}</p>
                <p>{{ product.price }}</p>
                <p>{{ product.inStock }}</p>
                <router-link :to="{ name:'Product', params: { product_id:product.id }}">See more</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ProductList',

    data(){
        return{
            arrayProducts: [
                { id: 1, name: 'prod1', price: 10, inStock: true },
                { id: 2, name: 'prod2', price: 20, inStock: false },
                { id: 3, name: 'prod3', price: 30, inStock: true }
            ]
        }
    }
}
</script>