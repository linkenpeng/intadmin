import {createStore} from 'vuex'
const moduleA = {
    state: {
      countA: 1
    },
    getters: {
      countAA: (state) => state.countA + 10
    },
    mutations: {
      increaseA(state) {
        state.countA++;
      }
    },
    actions: {
      asyncIncreaseA({ commit }) {
        commit('increaseA');
      }
    }
};
  
const moduleB = {
    state: {
        countB: 1
    },
    getters: {
        countBB: (state) => state.countB + 10
    },
    mutations: {
        increaseB(state) {
        state.countB++;
        }
    },
    actions: {
        asyncIncreaseB({ commit }) {
        commit('increaseB');
        }
    }
};

const store = createStore({
    modules: {
        a: moduleA,
        b: moduleB
    },
    state: {
        count: 1
    },
    getters: {
        countGlobal: (state) => state.count * 2
    },
    mutations: {
        increase(state) {
            state.count++;
        },
        multiply(state, payload) {
            state.count *= payload.count;
        }
    },
    actions: {
        asyncIncrease({ commit }) {
            commit('increase');
        },
        asyncMultiply({ commit }, payload) {
            commit('multiply', payload);
        }
    }
});

export default store