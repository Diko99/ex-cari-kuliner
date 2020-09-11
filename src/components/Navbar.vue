<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Cari Kulinner</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav mr-auto">
          <li v-for="item in links" :key="item.id" class="nav-item">
            <router-link class="nav-link" :to="item.to">{{item.title}}</router-link>
          </li>
        </ul>
         <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="nav-link" to="/cart">
              Keranjang  <b-icon-cart></b-icon-cart>
              <span class="badge badge-success ml-2">
                {{ jumlah_pesanan.length ? jumlah_pesanan.length : 0 }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Fire from '../config/firebase'

export default {
  name: 'HelloWorld',
  data () {
    return {
      jumlah_pesanan: [],
      links : [
        {title : 'Home', to: '/', id: 1},
        {title : 'Foods', to: '/foods', id: 2},
      ],
    }
  },
  methods: {
    setJumlah(data){
      this.jumlah_pesanan = data
    }
  },
  mounted() {
     Fire.database()
      .ref('keranjangs/products/')
      .once('value')
      .then(response => {
        let result = Object.keys(response.val())
        this.setJumlah(result)
      })
      .catch(error => console.log('keranjangs boss! : ', error))
  }
}
</script>

<style lang="scss" scoped>
.navbar .container .navbar-brand {
  font-family: 'Pacifico', cursive;
}
.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid rgb(44, 124, 61);
}
</style>
