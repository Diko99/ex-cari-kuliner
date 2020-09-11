<template>
  <div class="mt-5">
    <!-- versi desktop -->
    <div class="d-none d-md-block">
        <b-row>
          <b-col md="6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h1 class="text-secondary">
                  <strong> Deliciuse food Menu </strong>
                  <br> In your Gadget
                </h1>
                <p>Pilih makan favoritmu disini dan pesanan sekarang</p>
                <button class="btn mt-4 btn-default bg-success text-white">
                  Pesan Sekarang <b-icon-arrow-right />
                </button>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <img src="../assets/IL/IL-Hero.svg" class="img-fluid" alt="">
          </b-col>
        </b-row>
    </div>

    <!-- versi mobile -->
    <div class="d-md-none d-sm-block">
        <b-row>
          <b-col md="6">
            <img src="../assets/IL/IL-Hero.svg" class="img-fluid" alt="">
          </b-col>
          <b-col md="6 mt-5">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center px-3">
                <h2 class="text-secondary">Deliciuse food Menu <strong> <br> in your Gadget</strong> </h2>
                <p class="mt-3">Pilih makan favoritmu disini dan pesanan sekarang</p>
                <button class="btn btn-default bg-info text-white">
                  Pesan Sekarang <b-icon-arrow-right />
                </button>
              </div>
            </div>
          </b-col>
        </b-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style>

</style>