import { getAccessorType, mutationTree, getterTree, actionTree, } from 'nuxt-typed-vuex'
import * as UI from './UI';
import * as comments from './comments';
import * as posts from './posts';
// Disable error logging when you violate the Vuex rules
// Because only mutations can update the state and not the UI itself
export const strict = false;

export const state = () => ({
    data: null as null | string,
});

export type RootState = ReturnType<typeof state>
export const mutations = mutationTree(state, {
    SET_ERROR(state: RootState, data: string) {
        state.data = data;
    }
});
export const getters = getterTree(state, {
    GET_ERRORS(state: RootState) {
        return state.data;
    },

});
export const actions = actionTree({ state, getters, mutations }, {});

export const accessorType = getAccessorType({
    state,
    actions,
    mutations,
    getters,
    modules: {
        UI,
        comments,
        posts,
    }

})