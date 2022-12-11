import { defineStore } from 'pinia';
import Api from '../api/api';

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [],
        order: {}
    }),
    actions: {
        getOrdersData() {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                Api.get('/order', {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                }).then((response) => {
                    this.orders = response.data.data
                    resolve()
                }).catch((error) => {
                    reject(error)
                });
            });
        },

        getDetailOrder(snap_token) {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                Api.get(`/order/${snap_token}`, {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                }).then((response) => {
                    this.order = response.data.data.data
                    resolve()
                }).catch((error) => {
                    reject(error)
                });
            });
        }
    },
    getters: {
        orderGetter: (state) => state.orders,
    }
})