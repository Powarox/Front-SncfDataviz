import {createStore} from 'vuex'

import dataset1 from './dataset1'
// import dataset2 from './dataset2'

export const store = createStore({
    debug : true,
    modules: {
        dataset1,
        // dataset2
      },
 })
