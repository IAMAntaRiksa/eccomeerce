import { defineStore } from 'pinia'
import Api from '../api/api'

export const useCartStore = defineStore('cart', {
    state: () => ({
        carts: [],
        cartTotal: 0,
        cartWeight: 0
    }),
    getters: {
        contGetter: (state) => state.carts.length,
        cartGetter: (state) => state.carts,
        totalGetter: (state) => state.cartTotal,
        weightGetter: (state) => state.cartWeight
    },
    actions: {
        async storeCart(payload) {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                Api.post('/cart', payload, {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                }).then((response) => {
                    this.cartCount()
                    this.carts = response.data
                    resolve()
                }).catch((err) => {
                    reject(err)
                });
            });
        },

        async cartCount() {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                Api.get('/cart', {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                }).then((response) => {
                    this.carts = response.data
                    resolve()
                }).catch((err) => {
                    reject(err)
                });
            });
        },

        async cartTotals() {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                Api.get('/cart/total', {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                }).then((response) => {
                    this.cartTotal = response.data.total
                    resolve()
                }).catch((err) => {
                    reject(err)
                });
            });
        },
        async cartWeights() {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                Api.get('/cart/totalWeight', {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                }).then((response) => {
                    this.cartWeight = response.data.total
                    resolve()
                }).catch((err) => {
                    reject(err)
                });
            });
        },

        async removeCart(cart_id) {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                Api.post('/cart/remove', cart_id, {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                }).then(() => {
                    this.cartCount()
                    resolve()
                }).catch((err) => {
                    reject(err)
                });
            });
        }
    }
})