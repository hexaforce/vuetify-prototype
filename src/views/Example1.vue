<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panel popout>
<!--           
      <v-flex xs12 lg5 offset-lg2>
        <v-expansion-panel inset> 
-->
          <draggable class="v-expansion-panel__container">
            <v-expansion-panel-content v-for="cryptoCurrency in cryptoCurrencys" :key="cryptoCurrency.id" :expand-icon="cryptoCurrency.icon">
              <template v-slot:header>
                <v-sheet :color=cryptoCurrency.bgcolor>
                  <div>{{ cryptoCurrency.title }}</div>
                  <div>単価：１{{ cryptoCurrency.symbol }} = {{ cryptoCurrency.unitPrice }}　円</div>
                </v-sheet>
              </template>
              <v-card :color=cryptoCurrency.bgcolor>

                <v-img :aspect-ratio="16/9" :src=cryptoCurrency.logo class="my-3" contain height="80"/>
                <v-card-title primary-title>
                  <v-card-text>保有数：　{{ cryptoCurrency.retentionCount }} {{ cryptoCurrency.symbol }} ({{ cryptoCurrency.retentionCount * cryptoCurrency.unitPrice }}円相当)</v-card-text>
                  <div>出庫可能数：　{{ cryptoCurrency.unHoldingsCount }} {{ cryptoCurrency.symbol }}</div>
                </v-card-title>

                <CurrencyChart :symbol=cryptoCurrency.symbol />
                <InstantForm :buyItem=cryptoCurrency :allItem=cryptoCurrencys />
              </v-card>
            </v-expansion-panel-content>
          </draggable>
        </v-expansion-panel>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from "vuedraggable"
import CurrencyChart from "@/components/CurrencyChart.vue"
import InstantForm from "@/components/InstantForm.vue"

export default {
  name: "example1",
  components: {
    draggable,
    CurrencyChart,
    InstantForm
  },
  data: () => ({
      cryptoCurrencys: [
        {
          id: 1,
          symbol: 'BTC',
          title: "Bitcoin",
          bgcolor: "amber lighten-5",
          icon: "fab fa-bitcoin",
          logo:require('../assets/Bitcoin.svg'),
          increaseAmount: [0.001, 0.01, 0.1, 1],
          paymentaAllow: ["JPY", "ETH", "XRP"],
          unitPrice: 900000,
          retentionCount:1000,
          unHoldingsCount:1000
        },
        {
          id: 2,
          symbol: 'ETH',
          title: "Ethereum",
          bgcolor: "teal lighten-5",
          icon: "fab fa-ethereum",
          logo:require('../assets/Ethereum.svg'),
          increaseAmount: [0.01, 0.1, 1,10],
          paymentaAllow: ["JPY", "BTC", "XRP"],
          unitPrice: 25000,
          retentionCount: 25000,
          unHoldingsCount:1000
        },
        {
          id: 3,
          symbol: 'XRP',
          title: "Ripple",
          bgcolor: "purple lighten-5",
          icon: "fab fa-qq",
          logo:require('../assets/Ripple.svg'),
          increaseAmount: [10, 100, 1000, 1000],
          paymentaAllow: ["JPY", "BTC", "ETH"],
          unitPrice: 50,
          retentionCount:1000,
          unHoldingsCount:1000
        }
      ]

    }),
  methods: {

  }
}
</script>
