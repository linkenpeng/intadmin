import {createStore} from 'vuex'
export default createStore({
    state: {
        count: 1
    },
    getters: {
        tenTimes: (state) => {
            return state.count*10
        },
        nTimes: (state) => (n) => {
            return state.count*n
        }
    },
    mutations: {
        increment (state, payload) {
            state.count += payload.count
        }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                const backCount = Math.random() * 2 + 1
                if(backCount < 1) {
                    context.commit('increment', backCount)
                }
            }, 1000);
        }
    },
    modules: {

    }
})