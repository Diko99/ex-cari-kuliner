<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <div class="row mb-4">
        <div class="col">
          <h3>Daftar <strong>Makanan</strong></h3>
        </div>
      </div>

      <div class="input-group mb-2">
        <input
          v-model="search"
          @keyup="searchFoods"
          type="text"
          class="form-control"
          id="inlineFormInputGroup"
          placeholder="Cari makanan favoritmu.."
        >
        <div class="input-group-prepend">
          <div class="input-group-text">
            <b-icon-search />
          </div>
        </div>
      </div>
      <b-row>
        <b-col class="text-center">
          <div :class="loading ? 'spinner-border' : 'd-none'" role="status" />
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col md="3" class="mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue'
import Navbar from '../components/Navbar'
import Fire from '../config/firebase'
import axios from 'axios'

export default {
  name: 'Foods',
  components: {CardProduct, Navbar},
  data() {
    return {
      products: [],
      loading: true,
      search: ''
    }
  },
  methods: {
    setProduct(data){
      this.products = data
    },
    changecolor() {
      this.loading = !this.loading
    }
    ,
    searchFoods(){
      axios.get('http://localhost:4000/products?q='+this.search)
      .then(res => {
        this.setProduct(res.data)
        this.loading = true
      })
      .catch(error => console.log(error))
    }
  },
  mounted() {
     Fire.database()
      .ref('products/')
      .once('value')
      .then(response => {
        if(response.val()) {
          const data = response.val()
          const filterData = data.filter(el => el !== null)
          this.setProduct(filterData)
          this.loading = !this.loading
        }
      })
      .catch(error => console.log('get firebase failed! : ', error))
  }
}
</script>

<style>

</style>