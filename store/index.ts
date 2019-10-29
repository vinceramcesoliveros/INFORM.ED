import { getAccessorType, mutationTree, getterTree, actionTree, } from 'nuxt-typed-vuex'
import * as UI from './UI';
import * as comments from './comments';
// Disable error logging when you violate the Vuex rules
// Because only mutations can update the state and not the UI itself
export const strict = false;

export const state = () => ({
    data: null,
});
export const mutations = mutationTree(state, {});
export const getters = getterTree(state, {});
export const actions = actionTree({ state, getters, mutations }, {});

export const accessorType = getAccessorType({
    state,
    actions,
    mutations,
    getters,
    modules: {
        UI,
        comments,
    }

})