import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex';

export const state = () => ({
    posts: null as null | Post[]
})
export type RootState = ReturnType<typeof state>
export const mutations = mutationTree(state, {

    SET_POSTS(state: RootState, data: Post[]) {
        state.posts = data;
    }
})

export const getters = getterTree(state, {

    GET_POSTS(state: RootState) {
        return state.posts
    }
})

export const actions = actionTree({ state, getters, mutations }, {
    async FETCH_POSTS({ commit }) {
        // Try to add a limit of 10 so that we don't want to request too much data.
        const data: Post[] = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        commit("SET_POSTS", data)

    }
})
type Post = {
    id: string;
    title: string;
    body: string;
    userId: number;
    message?: string;
    statusCode?: number;

}