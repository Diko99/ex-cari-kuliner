<template>
  <div>
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-5">
        <div class="col">
          <h4>Best <strong>Foods</strong> </h4>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-sm btn-success float-right">
            Lihat semua <b-icon-arrow-right />
          </router-link>
        </div>
      </div>

      <b-row>
        <b-col class="text-center">
          <div :class="loading ? 'spinner-border' : 'd-none'" role="status" />
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col class="md-3 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import CardProduct from '@/components/CardProduct.vue'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Fire from '../config/firebase'

export default {
  name: 'Home',
  components: {
    Hero, CardProduct,Navbar
  },
  data() {
    return {
      products: [],
      loading: true
    }
  },
  methods: {
    setProduct(data){
      this.products = data
      this.products
    }
  },
  mounted() {
    Fire.database()
      .ref('best-products/')
      .once('value')
      .then(response => {
        if(response.val()) {
          const data = response.val()
          const filterData = data.filter(el => el !== null)
          this.setProduct(filterData)
          this.loading = false
        }
      })
      .catch(error => console.log('get fsddirebase failed! : ', error))
  }
}
</script>
