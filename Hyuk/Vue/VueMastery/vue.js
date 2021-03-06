Vue.component('product', {
    template: `
    <div class="product">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>{{ sale }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantID"
                    :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">
                </div>

                <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to
                    cart</button>
            </div>
        </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyster", "Gender-neutral"],
            variants: [
                {
                    variantID: 2234,
                    variantColor: "green",
                    variantImage: "./assets/vmSocks-green.jpg",
                    variantQuantity: 10,
                },
                {
                    variantID: 2235,
                    variantColor: "blue",
                    variantImage: "./assets/vmSocks-blue.jpg",
                    variantQuantity: 0,
                }
            ],
            cart: 0,
            onSale: true,
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            }
            return this.brand + ' ' + this.product + ' are not on sale'
        },
    },
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart : [],
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})