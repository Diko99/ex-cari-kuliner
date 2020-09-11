<template>
  <div class="card shadow mb-5">
    <img class="card-img-top img-fluid rounded" :src="product.gambar" alt="Card image cap">
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title mt-3 font-weight-bold">{{product.nama}}</h5>
      <p class="card-text">Harga <strong>Rp. {{product.harga}} -,</strong></p>
      <router-link :to="'/foods/'+product.id" class="btn btn-success mt-auto">
        <b-icon-cart />  Pesan
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['product']
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 55vh;
  justify-content: center;
  img {
    height: 25vh;
  }
  .btn {
    justify-content: flex-end;
  }
}
</style>