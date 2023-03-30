<template>
  <section><Chart /></section>
  <!--section><CryptoMarket /></section-->
  <!--section><Snaps /></section-->
  <!--section><Screener /></section-->
</template>

<script>
import { Chart, CryptoMarket, Snaps, Screener } from "vue-tradingview-widgets";

export default {
  name: "App",
  components: {Chart, CryptoMarket, Screener, Snaps,
  },
};
</script>


<style>
#app {
}
section {
   }
</style>
