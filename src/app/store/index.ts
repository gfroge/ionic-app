import { createStore } from 'vuex'
import {StoreAccount} from '~/features'
import {StoreProducts} from '~/widgets'

export default createStore({
  modules: {
    StoreAccount,
    StoreProducts
  },
})