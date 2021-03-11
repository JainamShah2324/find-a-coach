import requestGetters from './getters';
import requestMutations from './mutations';
import requestActions from './actions';

export default {
    namespaced: true,
    state() {
        return {
            requests: [],
        }
    },
    getters: requestGetters,
    mutations: requestMutations,
    actions: requestActions
}