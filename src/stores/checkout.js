import { defineStore } from 'pinia'
import Api from '../api/api'
import { useCartStore } from '@/stores/cart'


export const useCheckoutStore = defineStore('checkout', {
    actions: {
        storeCheckout(payload) {
            const store = useCartStore()
            return new Promise((resolve, reject) => {
                Api.post('/checkout', payload)
                    .then((response) => {
                        //dispatch cart
                        store.cartCount()
                        resolve(response.data)
                    }).catch(error => {
                        reject(error)
                    })
            })
        },
    }
})