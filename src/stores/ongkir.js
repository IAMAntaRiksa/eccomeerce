import { defineStore } from 'pinia';
import Api from '../api/api';

export const useOngkirStore = defineStore('ongkir', {
    state: () => ({
        provincies: [],
        cities: [],
    }),
    actions: {
        async getProvinciesData() {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                Api.get('/rajaongkir/provinces', {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                }).then((response) => {
                    this.provincies = response.data
                    resolve()
                }).catch((error) => {
                    reject(error)
                });
            });
        },

        async getCitiesData(province_id) {
            const token = localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                Api.get(`/rajaongkir/cities`, {
                    params: {
                        province_id: province_id
                    },
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                }).then((response) => {
                    this.cities = response.data
                    resolve()
                }).catch((error) => {
                    reject(error)
                });
            });
        }
    },
    getters: {
        provincieGetter: (state) => state.provincies,
        citieGetter: (state) => state.cities,
    }
})