import {createStore} from 'vuex'

import datasets1 from './datasets1'
import datasets3 from './datasets3'

export const store = createStore({
    debug : true,
    modules: {
        datasets1,
        datasets3
      },
 })
