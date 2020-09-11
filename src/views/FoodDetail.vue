<template>
<div>
  <Navbar />
  <div class="order-product container">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/foods">Food</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Food Order</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <img :src="products.gambar" :alt="'order-food'+products.nama" class="img-fluid">
      </div>
      <div class="col-md-6">
        <h3><strong>{{products.nama}}</strong></h3>
        <hr>
        <h5 class="mt-3">Harga : <strong>Rp. {{products.harga}} </strong> </h5>
        <form class="mt-4" v-on:submit.prevent>
          <div class="form-group">
            <label for="Jumlah_pesanan">Jumlah Pesanan</label>
            <input type="number" class="form-control" v-model="pesan.jumlah_pesanan" />
          </div>
          <div class="form-group">
            <label for="keterangan">Keterangan</label>
            <textarea placeholder="Contoh: Pedas, Sedikit Micin.." class="form-control" v-model="pesan.keterangan" />
          </div>
          <button type="submit" class="btn btn-success" @click="orderNow">Pesan <b-icon-cart /></button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar'
import Fire from '../config/firebase'

export default {
  components: {
    Navbar
  },
  data(){
    return {
      products: [],
      pesan: {}
    }
  },
  methods: {
    setProduct(data){
      this.products = data
    },
    orderNow(){
      this.pesan.products = this.products
      if(this.pesan.jumlah_pesanan) {
        Fire.database()
        .ref('keranjangs/products/')
        .push(this.pesan)
        .then(response => {
          this.$toast.success('Sukses pesanan dimasukan keranjang', {
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          })
          this.$router.push({ path: '/keranjang' })
          this.pesan = ''
        })
        .catch(error => console.log(error))
      } else {
        this.$toast.error('Jumlah pesanan harus diisi', {
          position: 'top-right',
          duration: 3000,
          dismissible: true,
        })
      }
    }
  },
  mounted() {
   Fire.database()
      .ref('best-products/' + this.$route.params.id)
      .once('value')
      .then(response => {
        if(response.val()) {
          const data = response.val()
          this.setProduct(data)
        }
      })
      .catch(error => console.log(' FOOD_DETAIL get firebase failed! : ', error))
  }
}
</script>

<style lang="scss" scoped>
  .order-product {
    .breadcrumb {
      background-color: #fff;
      margin-top: 5vh;
    }
    img {
      max-height: 60vh;
      border-radius: 20px;
    }
  }
</style>