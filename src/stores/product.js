import { defineStore } from 'pinia'
import Api from '../api/api'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        product: {}
    }),

    actions: {
        async getProductsData() {
            try {
                const { data } = await Api.get('/v1/products')
                this.products = data.data.data
            } catch (error) {
                console.log(error)
            }
        },
        async getDetailProduct(slug) {
            try {
                const { data } = await Api.get(`/v1/products/${slug}`)
                this.product = data.data
            } catch (error) {
                console.log(error)
            }
        }
    },

    getters: {
        getterProducts: (state) => state.products,
        getterDetailProduct: (state) => state.product
    }
})
