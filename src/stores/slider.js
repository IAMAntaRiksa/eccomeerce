import { defineStore } from 'pinia'
import Api from '../api/api';

export const useSliderStore = defineStore('slider', {
    state: () => ({
        sliders: [],
    }),

    actions: {
        async getSlidersData() {
            try {
                const { data } = await Api.get('/v1/sliders')
                this.sliders = data.data
            } catch (error) {
                console.log(error)
            }
        }
    },

    getters: {
        getSliders: (state) => state.sliders
    }
})

