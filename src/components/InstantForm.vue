<template>
  <v-flex>
    <v-form>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs6>
            <v-select :items="buyItem.paymentaAllow" v-model="paymentCurrency" label="決済通貨" prepend-inner-icon="fa-wallet" />
          </v-flex>
          <v-flex xs6>
            <v-text-field type="number" v-model="buyAmount" label="購入数量" placeholder="購入数量を入力" prepend-inner-icon="fa-coins" clearable />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex text-xs-right>
            <v-btn round @click="addBuyAmount(buyItem.increaseAmount[0])" >+{{ buyItem.increaseAmount[0] }}</v-btn>
            <v-btn round @click="addBuyAmount(buyItem.increaseAmount[1])" >+{{ buyItem.increaseAmount[1] }}</v-btn>
            <v-btn round @click="addBuyAmount(buyItem.increaseAmount[2])" >+{{ buyItem.increaseAmount[2] }}</v-btn>
            <v-btn round @click="addBuyAmount(buyItem.increaseAmount[3])" >+{{ buyItem.increaseAmount[3] }}</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-sheet class="d-flex" color="grey lighten-3">
              <v-layout row wrap>

                <v-flex md6>
                  <sheet-label>決済通貨残高</sheet-label>
                </v-flex>
                <v-flex md6>
                  <v-subheader>
                    <v-icon>{{ paymentCurrencyIcon }}</v-icon>{{ customerUnHoldingsCount }}
                  </v-subheader>
                </v-flex>
                <v-flex md6>
                  <sheet-label>単価</sheet-label>
                </v-flex>
                <v-flex md6>
                  <v-subheader>
                    <v-icon>{{ buyItem.icon }}</v-icon>1 {{ buyItem.symbol }}
                    <v-spacer/>
                    <v-icon>fa-equals</v-icon>
                    <v-spacer/>
                    <!-- <v-chip>=</v-chip> -->{{ paymentCurrencyUnitPrice }} {{ paymentCurrency }} 
                    <v-icon>{{ paymentCurrencyIcon }}</v-icon>
                  </v-subheader>
                </v-flex>
                <v-flex md6>
                  <sheet-label>参考決済金額</sheet-label>
                </v-flex>
                <v-flex md6>
                  <v-subheader>
                    <v-icon>{{ paymentCurrencyIcon }}</v-icon>{{ paymentTotal }}
                  </v-subheader>
                </v-flex>
              </v-layout>
            </v-sheet>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex text-xs-right>
            <v-btn round color="primary" :loading="loading" :disabled="loading" @click.native="loader = 'loading'" >購入</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-flex>
</template>

<script>

const rate = {
  'JPY' : {'BTC':999999,'ETH':29999,'XRP':49.999},
  'BTC' : {'ETH':0.01,'XRP':0.000001},
  'ETH' : {'BTC':100,'XRP':0.0001},
  'XRP' : {'BTC':100000,'ETH':1000}
}

export default {
  components: {
    SheetLabel: {
      functional: true,
      render(h, {
        children
      }) {
        return h("v-sheet", {
          staticClass: "align-center justify-center d-flex",
          props: {
            color: "rgba(0, 0, 0, .36)",
            dark: true,
            height: 50
          }
        }, children);
      }
    }
  },
  data: () => ({
    loader: null,
    loading: false,
    rate: null,
    customerUnHoldingsCount: 0,
    paymentCurrency: '',
    paymentCurrencyIcon: 'fa-question',
    paymentCurrencyUnitPrice: 0,
    buyAmount: 0,
    paymentTotal: 0
  }),
  props: ['buyItem', 'allItem'],
  methods: {
    addBuyAmount: function (x) {
      this.buyAmount += x
    }
  },
  computed: {
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    },
    paymentCurrency: function (symbol) {
      if (symbol == 'JPY') {
        this.customerUnHoldingsCount = 100000
        this.paymentCurrencyIcon = 'fa-yen-sign'
      } else {
        for (let i in this.allItem) {
          if (this.allItem[i].symbol == symbol) {
            this.customerUnHoldingsCount = this.allItem[i].unHoldingsCount
            this.paymentCurrencyIcon = this.allItem[i].icon
          }
        }
      }
      this.paymentCurrencyUnitPrice = rate[symbol][this.buyItem.symbol]
    },
    buyAmount: function (amount){
      this.paymentTotal = amount * this.paymentCurrencyUnitPrice
    }
  }
}
</script>