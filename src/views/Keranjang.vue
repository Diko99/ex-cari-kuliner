<template>
  <div class="keranjang-product">
    <Navbar />
    <div class="container mt-4">
      <div class="row mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item"><router-link to="/foods">Foods</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">
            <strong> Keranjang </strong>
          </li>
        </ol>
      </div>
      <h5>Keranjang <strong> Saya </strong></h5>
      <div :class=" keranjangs ? 'spinner-grow text-center bg-warning' : 'bg-danger'" role="status" />
      <div class="table-responsive mt-5">
        <table :class="'table'">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Foto</th>
              <th scope="col">Makanan</th>
              <th scope="col">Keterangan</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col" align="right">Total Harga</th>
              <th scope="col">Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr :class=" items ? '' : 'd-none'" v-for="items in keranjangs" :key="items.products.id">
              <th> {{items.products.id}}</th>
              <td><img :src="items.products.gambar" class="img-fluid" alt=""></td>
              <td>{{items.products.nama}}</td>
              <td>{{items.keterangan ? items.keterangan : '-' }}</td>
              <td>{{items.jumlah_pesanan}}</td>
              <td>Rp. {{items.products.harga}}</td>
              <td align="center">
                <strong> Rp. {{items.jumlah_pesanan * items.products.harga}}</strong>
              </td>
              <td align="center"><b-icon-trash /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import axios from 'axios'
import Fire from '../config/firebase'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      keranjangs: []
    }
  },
  methods: {
    setKeranjang(data) {
      const result = []
      result.push(data)
      this.keranjangs = result
    }
  },
  mounted() {
    Fire.database()
      .ref('keranjangs/products/')
      .once('value')
      .then(response => {
        let result = Object.values(response.val())
        result.map((item, index) => {
          let post = []
          post.push(item)
          this.setKeranjang(post[0]) 
        })
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style lang="scss" scoped>
  .keranjang-product {
    .breadcrumb {
      background-color: #fff;
        li a:nth-child(1) {color: rgb(124, 112, 112);}
    }
    .img-fluid {
      max-width: 200px;
      border-radius: 10px;
    }
  }
</style>