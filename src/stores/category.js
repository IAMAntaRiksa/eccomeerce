import { defineStore } from 'pinia'
import Api from '../api/api'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        categoryHeader: [],
        category: {}
    }),

    actions: {
        async getCategoriesHeader() {
            try {
                const { data } = await Api.get('/v1/categoryHeader')
                this.categoryHeader = data.categories
            } catch (error) {
                console.log(error)
            }
        },

        async getCategoriesData() {
            try {
                const { data } = await Api.get('/v1/categories')

                this.categories = data.data.data
            } catch (error) {
                console.log(error)
            }
        },

        async getDetailCategoriesData(slug) {
            try {
                const { data } = await Api.get(`/v1/categories/${slug}`)
                this.category = data.data
            } catch (error) {
                console.log(error)
            }
        }
    },

    getters: {
        getCategoryHeader: (state) => state.categoryHeader,
        getCategories: (state) => state.categories,
        getcategory: (state) => state.category
    }
})
