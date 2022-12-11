<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-4">
                <div class="card border-0 rounded shadow">
                    <div class="card-body p-2">
                        <img :src="detailProduct.image" class="w-100 border">
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <label class="font-weight-bold" style="font-size: 20px;"> {{ detailProduct.title }} </label>
                        <hr>
                        <div class="price-product" id="price-product" style="font-size: 1.35rem"><span
                                class="font-weight-bold mr-4" style="color: green">Rp.
                                {{ calculateDiscount(detailProduct) }}</span>
                            <s class="font-weight-bold" style="text-decoration-color:red">Rp. {{ detailProduct.price
                            }}</s>
                        </div>
                        <table class="table table-borderless mt-3">
                            <tbody>
                                <tr>
                                    <td class="font-weight-bold">DISKON</td>
                                    <td>:</td>
                                    <td>
                                        <button class="btn btn-sm" style="color: #ff2f00; border-color: #ff2f00;">
                                            DISKON {{ detailProduct.discount }} %
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-weight-bold">BERAT</td>
                                    <td>:</td>
                                    <td>
                                        <span class="badge badge-pill badge-success"
                                            style="font-size: 14px;border-radius: .3rem;padding: .25em .5em .2em;"> {{
                                                    detailProduct.weight
                                            }}
                                            gram</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            @click.prevent="addCart(detailProduct.id, calculateDiscount(detailProduct), detailProduct.weight)"
                            class="btn btn-primary btn-lg btn-block"><i class="fa fa-shopping-cart"></i> TAMBAH KE
                            KERANJANG</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <label class="font-weight-bold" style="font-size: 20px;">KETERANGAN</label>
                        <hr>
                        <div v-html="detailProduct.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, onMounted } from 'vue'
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {

        const store = useProductStore()
        const route = useRoute()
        onMounted(() => {
            store.getDetailProduct(route.params.slug)
        })

        const detailProduct = computed(() => {
            return store.getterDetailProduct
        })

        return {
            detailProduct
        }
    },
})
</script>
