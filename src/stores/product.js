import { defineStore } from 'pinia'
import Api from '../api/api'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
    }),

    actions: {
        async getProductsData() {
            try {
                const { data } = await Api.get('/v1/products')
                this.products = data.data.data
            } catch (error) {
                console.log(error)
            }
        }
    },

    getters: {
        getProducts: (state) => state.products
    }
})
