import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex';
import { GetterTree } from 'vuex/types/index';

export const state = () => ({
    comments: [
    ] as Comment[]
})
export type RootState = ReturnType<typeof state>
export const mutations = mutationTree(state, {

    SET_COMMENTS(state: RootState, data: Comment[]) {
        state.comments = data.map(comment => {
            return { ...comment }
        })
    }
})

export const getters = getterTree(state, {

    GET_COMMENTS(state: RootState) {
        return state.comments
    }
})

export const actions = actionTree({ state, getters, mutations }, {
    async FETCH_COMMENTS({ commit }) {
        const res = await this.$axios.$get('https://jsonplaceholder.typicode.com/comments?_limit=10')
        commit('SET_COMMENTS', res)
    }
})
type Comment = {

    postId: number;
    id: string;
    name: string;
    email: string;
    body: string;
}